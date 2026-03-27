import React, { useEffect, useState } from "react";

type Post = {
  title: string;
  link: string;
  content: string;
  pubDate: string;
  imageUrl: string | null;
};

export function MastodonFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const RSS_URL = "https://mastodon.social/@rawanabdellatif.rss";

  useEffect(() => {
    fetch(RSS_URL)
      .then((res) => res.text())
      .then((str) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, "application/xml");

        const items = Array.from(xml.querySelectorAll("item")).slice(0, 3);

        const latestPosts: Post[] = items.map((item) => {
          const title = item.querySelector("title")?.textContent || "";
          const link = item.querySelector("link")?.textContent || "";
          const pubDate = item.querySelector("pubDate")?.textContent || "";

          // content
          const contentNode =
            item.querySelector("content\\:encoded") ||
            item.querySelector("description");

          const content = contentNode?.textContent || "";

          // -------------------------
          // IMAGE EXTRACTION (FIXED)
          // -------------------------

          let imageUrl: string | null = null;

          // 1. enclosure (BEST SOURCE)
          const enclosure = item.querySelector("enclosure");
          if (enclosure?.getAttribute("url")) {
            imageUrl = enclosure.getAttribute("url");
          }

          // 2. media:content fallback
          if (!imageUrl) {
            const mediaContent = item.getElementsByTagName("media:content")[0];
            if (mediaContent?.getAttribute("url")) {
              imageUrl = mediaContent.getAttribute("url");
            }
          }

          // 3. HTML <img> fallback
          if (!imageUrl) {
            const contentDoc = new DOMParser().parseFromString(
              content,
              "text/html"
            );

            const img = contentDoc.querySelector("img");

            if (img) {
              imageUrl =
                img.getAttribute("src") ||
                img.getAttribute("data-src") ||
                null;
            }
          }

          return { title, link, content, pubDate, imageUrl };
        });

        setPosts(latestPosts);
      })
      .catch((err) => console.error("RSS fetch error:", err));
  }, []);

  return (
    <div>
      <h3>Latest News</h3>

      {posts.map((post, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "20px",
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          {/* Image */}
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title || "Mastodon media"}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
          )}

          {/* Content */}
          <div style={{ flex: 1 }}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            <small style={{ color: "#555" }}>
              {post.pubDate
                ? new Date(post.pubDate).toLocaleDateString()
                : ""}
            </small>

            {/* <br /> */}
            <div>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              View on Mastodon
            </a></div>
          </div>
        </div>
      ))}
    </div>
  );
}