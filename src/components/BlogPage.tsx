// BlogPage.tsx
import React from "react";
import clsx from "clsx";
import styles from "./blog.module.css";
// Use require() for production compatibility
const codereviewImage = require("../images/Blog/codereview.jpg").default;
const MachinelearningImage = require("../images/Blog/Machinelearning.jpg").default;
const chattingsoftwareprojectImage = require("../images/Blog/chattingsoftwareproject.jpg").default;

const haveyouforgettenImage = require("../images/Blog/haveyouforgetten.jpg").default;
const AlphaBotImage = require("../images/Blog/AlphaBot.jpg").default;
const SoftwareLibrarianImage = require("../images/Blog/SoftwareLibrarian.jpg").default;


// interface BlogPost {
//   title: string;
//   authorName: string;
//   authorUrl: string;
//   authorRole: string;
//   description: string;
  
//   postUrl: string;
// }

const blogPosts = [
  {
    title: "Smart Package Management with Software Librarian",
    authorName: "Jasmine Latendresse",
    image: SoftwareLibrarianImage,
    authorUrl: "/members/jasmine-latendresse",
    authorRole: "PhD Student",
    description:
      "In modern software development, open-source packages are essential building blocks that help developers innovate faster. However, managing these dependencies effectively is challenging. Issues such as outdated or deprecated libraries, licensing conflicts, and security vulnerabilities can compromise software quality. With the rise of AI-powered coding assistants like GitHub Copilot, ensuring that recommended packages are safe and reliable is more crucial than ever. ",
    postUrl: "/blog/publications/Smart_Package_Management_with_Software_Librarian",
  },
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
    image:MachinelearningImage,
    authorUrl: "/members/jasmine-latendresse",
    authorRole: "PhD Student",
    description:
      "In today's world of artificial intelligence and machine learning, keeping ML models organized and running efficiently is crucial. Yet, it’s not always straightforward. This study dives into the core activities and hurdles of managing ML models effectively and presents a practical guide for ML professionals.",
    postUrl: "/blog/publications/Managing_Your_Machine_Learning_Models",
  },
  {
    title: "AlphaBot: The Smart Solution for Smarter Software Chatbots",
    authorName: "Farbod Farhour ",
    image:AlphaBotImage,
    authorUrl: "/members/farbod-farhour",
    authorRole: "Master's Student",
    description:
      "Training chatbots to handle software engineering (SE) queries presents unique challenges due to the technical and domain specific nature of the field. Unlike general conversational AI, SE chatbots must accurately interpret specialized terms like “bug” (software defect) or “commit” (code changes). These terms carry precise meanings within the context of software development, making them difficult to process with standard methods. ",
    postUrl: "/blog/publications/AlphaBot_The_Smart_Solution_for_Smarter_Software_Chatbots",
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
    image:haveyouforgettenImage,
    authorUrl: "https://suhaib.ca",
    authorRole: "Master's Student",
    description:
      "After the left-pad fiasco, David Haney’s blog post: “Have We Forgotten How to Program?”, lead to many heated discussions whether developers should take on dependencies for simple tasks. You can read the post and the discussion that ensued for all the details, but to summarize it – a dependency on an 11 line package that implements a left padding string function was removed; this package was used by Babel.",
    postUrl: "/blog/publications/Have_we_forgetten_how_to_program",
  },
];




// BlogPage component for rendering all blog posts
const BlogPage: React.FC = () => {
  return (
    <>
    <div className={styles.emptyiteam}></div>
    <div className={styles.container}>
   

      {blogPosts.map((post) => (
    
        <div  key={post.title} className={styles.blogContainer}>

          <div className={styles.title}>
            <h2>
              <a href={post.postUrl}>{post.title}</a>
            </h2>
            <a href={post.authorUrl} className={styles.authorName}>
              {post.authorName}
            </a>
            <div className={styles.avatar__subtitle}>{post.authorRole}</div>
          </div> 
 
          <div className={styles.events}>
            <div className={styles.imageContainer}>
              <img src={post.image} alt={post.authorName} />
            </div>
            <div className={styles.text}>
              <p className={styles.description}>
                {post.description}{" "}
                <a href={post.postUrl} className={styles.readMore}>
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>

      ))}
    </div>
    </>
  );
};

export default BlogPage;
