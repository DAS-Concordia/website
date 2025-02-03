// BlogPage.tsx
import React from "react";
import clsx from "clsx";

import styles from "./blog.module.css";
import codereviewImage from "../images/Blog/codereview.jpg";
import MachinelearningImage from "../images/Blog/Machinelearning.jpg";
import chattingsoftwareprojectImage from "../images/Blog/chattingsoftwareproject.jpg";
import haveyouforgettenImage from "../images/Blog/haveyouforgetten.jpg";

interface BlogPost {
  title: string;
  authorName: string;
  authorUrl: string;
  authorRole: string;
  description: string;
  postUrl: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Taking the Guesswork Out of Code Reviews",
    authorName: "Hassan Khatoonabadi",
    image: codereviewImage,
    authorUrl: "/members/hassan-khatoonabadi",
    authorRole: "Postdoctoral Researcher",
    description:
      "If you've ever contributed to a software project, you know that waiting for feedback on a Pull Request (PR) can be like watching paint dry. Contributors and maintainers both benefit when PRs are reviewed efficiently, but the waiting game often comes down to when, and how soon, responses happen.",
    postUrl: "/blog/publications/Taking_the_Guesswork_Out_of_Code_Reviews",
  },
  {
    title: "Managing Your Machine Learning Models - What’s Inside?",
    authorName: "Jasmine Latendresse",
    image: MachinelearningImage,
    authorUrl: "/members/jasmine-latendresse",
    authorRole: "PhD Student",
    description:
      "In today's world of artificial intelligence and machine learning, keeping ML models organized and running efficiently is crucial. Yet, it’s not always straightforward. This study dives into the core activities and hurdles of managing ML models effectively and presents a practical guide for ML professionals.",
    postUrl: "/blog/publications/Managing_Your_Machine_Learning_Models",
  },
  {
    title: "Chatting with Your Software Project",
    authorName: "Ahmad Abdellatif",
    image: chattingsoftwareprojectImage,
    authorUrl: "/members/ahmad-abdellatif",
    authorRole: "PhD Student",
    description:
      "No matter where you stand in the software development food-chain, analyzing your software repository to get insights into your own project is part of the day-to-day business. Developers use the repository to identify (and blame!) the colleague that introduced that nasty piece of code, managers use the repository to get productivity metrics on their teams and everyone.",
    postUrl: "/blog/publications/Chatting_with_your_software_project",
  },
  {
    title: "Have We Forgotten How to Program?",
    authorName: "Suhaib Mujahid",
    image: haveyouforgettenImage,
    authorUrl: "https://suhaib.ca",
    authorRole: "Master's Student",
    description:
      "After the left-pad fiasco, David Haney’s blog post: “Have We Forgotten How to Program?”, lead to many heated discussions whether developers should take on dependencies for simple tasks. You can read the post and the discussion that ensued for all the details, but to summarize it – a dependency on an 11 line package that implements a left padding string function was removed; this package was used by Babel.",
    postUrl: "/blog/publications/Have_we_forgetten_how_to_program",
  },
];

function BlogPage() {
  return (
    <div className="container">
      {blogPosts.map((post) => (
        <div key={post.title} className={clsx(styles.container, "blog-post-container")}>
          <div className={clsx(styles.title, "blog-post-title")}>
            <h2>
              <a href={post.postUrl}>{post.title}</a>
            </h2>
            <a href={post.authorUrl} className={clsx(styles.authorName, "author-link")}>
              {post.authorName}
            </a>
            <div className={clsx(styles.avatar__subtitle, "author-role")}>{post.authorRole}</div>
          </div> 

          <div className={clsx(styles.events, "responsive-events")}>
            <div className={styles.imageContainer}>
              <img src={post.image} alt={post.authorName} />
            </div>
            <div className={clsx(styles.text, "text-description")}>
              <p className={clsx(styles.description, "description-text")}>
                {post.description}{" "}
                <a href={post.postUrl} className={clsx(styles.readMore, "read-more-link")}>
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
