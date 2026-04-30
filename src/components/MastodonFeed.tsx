import React, { useEffect, useState } from "react";

type Post = {
  title: string;
  link: string;
  content: string;
  pubDate: string;
  imageUrl: string | null;
  authorName: string;
  authorHandle: string;
  authorUrl: string;
};


function AuthorHeader({
  name,
  handle,
  url,
  avatar,
}: {
  name: string;
  handle: string;
  url: string;
  avatar: string | null;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        color: "inherit",
        marginBottom: "8px",
      }}
    >
      {/* Real profile image */}
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            background: "#999",
          }}
        />
      )}

      {/* Text */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontWeight: 600 }}>{name}</span>
        <span style={{ fontSize: "12px", color: "#666" }}>{handle}</span>
      </div>
    </a>
  );
}


export function MastodonFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [avatar, setAvatar] = useState<string | null>(null);

  const RSS_URL = "https://mastodon.social/@daslab.rss";



  useEffect(() => {
    fetch(
      "https://mastodon.social/api/v1/accounts/lookup?acct=daslab"
    )
      .then((res) => res.json())
      .then((data) => setAvatar(data.avatar))
      .catch((err) => console.error("Avatar fetch error:", err));
  }, []);


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

          const contentNode =
            item.querySelector("content\\:encoded") ||
            item.querySelector("description");

          const content = contentNode?.textContent || "";

          let imageUrl: string | null = null;

          const enclosure = item.querySelector("enclosure");
          if (enclosure?.getAttribute("url")) {
            imageUrl = enclosure.getAttribute("url");
          }

          if (!imageUrl) {
            const mediaContent =
              item.getElementsByTagName("media:content")[0];
            if (mediaContent?.getAttribute("url")) {
              imageUrl = mediaContent.getAttribute("url");
            }
          }

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

          return {
            title,
            link,
            content,
            pubDate,
            imageUrl,
            authorName: "DASLAB",
            authorHandle: "@daslab",
            authorUrl: "https://mastodon.social/@daslab",
          };
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
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          {/* Post image */}
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}

          {/* Content */}
          <div style={{ flex: 1 }}>
            {/* Author with REAL avatar */}
            <AuthorHeader
              name={post.authorName}
              handle={post.authorHandle}
              url={post.authorUrl}
              avatar={avatar}
            />

            {/* Text */}
            <div style={{ marginBottom: "6px" }}>
              {post.content
                ? post.content.replace(/<[^>]+>/g, "").slice(0, 200) +
                  "..."
                : ""}
            </div>

            {/* Date */}
            <small style={{ color: "#555" }}>
              {post.pubDate
                ? new Date(post.pubDate).toLocaleDateString()
                : ""}
            </small>

            {/* Link */}
            <div style={{ marginTop: "6px" }}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Mastodon
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}