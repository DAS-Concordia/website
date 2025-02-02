// BlogPage.tsx
import React from "react";
import clsx from "clsx";
import styles from "./blog.module.css";
// Use require() for production compatibility
const codereviewImage = require("../images/Blog/codereview.jpg").default;
const MachinelearningImage = require("../images/Blog/Machinelearning.jpg").default;
const chattingsoftwareprojectImage = require("../images/Blog/chattingsoftwareproject.jpg").default;
const haveyouforgettenImage = require("../images/Blog/haveyouforgetten.jpg").default

const BlogPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Blog Post 1 */}
      <div className={styles.blogContainer}>
        <div className={styles.title}>
          <h2>
            <a href="/blog/publications/Taking_the_Guesswork_Out_of_Code_Reviews">
              Taking the Guesswork Out of Code Reviews
            </a>
          </h2>
          <a href="/members/hassan-khatoonabadi" className={styles.authorName}>
            Hassan Khatoonabadi
          </a>
          <div className={styles.avatar__subtitle}>Postdoctoral Researcher</div>
        </div>
        <div className={styles.events}>
          <div className={styles.imageContainer}>
            <img src={codereviewImage} alt="Hassan Khatoonabadi" />
          </div>
          <div className={styles.text}>
            <p className={styles.description}>
              If you've ever contributed to a software project, you know that waiting for feedback on a Pull Request (PR) can be like watching paint dry. Contributors and maintainers both benefit when PRs are reviewed efficiently, but the waiting game often comes down to when, and how soon, responses happen.
              <a href="/blog/publications/Taking_the_Guesswork_Out_of_Code_Reviews" className={styles.readMore}>
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Blog Post 2 */}
      <div className={styles.blogContainer}>
        <div className={styles.title}>
          <h2>
            <a href="/blog/publications/Managing_Your_Machine_Learning_Models">
              Managing Your Machine Learning Models - What’s Inside?
            </a>
          </h2>
          <a href="/members/jasmine-latendresse" className={styles.authorName}>
            Jasmine Latendresse
          </a>
          <div className={styles.avatar__subtitle}>PhD Student</div>
        </div>
        <div className={styles.events}>
          <div className={styles.imageContainer}>
            <img src={MachinelearningImage} alt="Jasmine Latendresse" />
          </div>
          <div className={styles.text}>
            <p className={styles.description}>
              In today's world of artificial intelligence and machine learning, keeping ML models organized and running efficiently is crucial. Yet, it’s not always straightforward. This study dives into the core activities and hurdles of managing ML models effectively and presents a practical guide for ML professionals.
              <a href="/blog/publications/Managing_Your_Machine_Learning_Models" className={styles.readMore}>
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Blog Post 3 */}
      <div className={styles.blogContainer}>
        <div className={styles.title}>
          <h2>
            <a href="/blog/publications/Chatting_with_your_software_project">
              Chatting with Your Software Project
            </a>
          </h2>
          <a href="/members/ahmad-abdellatif" className={styles.authorName}>
            Ahmad Abdellatif
          </a>
          <div className={styles.avatar__subtitle}>PhD Student</div>
        </div>
        <div className={styles.events}>
          <div className={styles.imageContainer}>
            <img src={chattingsoftwareprojectImage} alt="Ahmad Abdellatif" />
          </div>
          <div className={styles.text}>
            <p className={styles.description}>
              No matter where you stand in the software development food-chain, analyzing your software repository to get insights into your own project is part of the day-to-day business. Developers use the repository to identify (and blame!) the colleague that introduced that nasty piece of code, managers use the repository to get productivity metrics on their teams and everyone.
              <a href="/blog/publications/Chatting_with_your_software_project" className={styles.readMore}>
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Blog Post 4 */}
      <div className={styles.blogContainer}>
        <div className={styles.title}>
          <h2>
            <a href="/blog/publications/Have_we_forgetten_how_to_program">
              Have We Forgotten How to Program?
            </a>
          </h2>
          <a href="https://suhaib.ca" className={styles.authorName}>
            Suhaib Mujahid
          </a>
          <div className={styles.avatar__subtitle}>Master's Student</div>
        </div>
        <div className={styles.events}>
          <div className={styles.imageContainer}>
            <img src={haveyouforgettenImage} alt="Suhaib Mujahid" />
          </div>
          <div className={styles.text}>
            <p className={styles.description}>
              After the left-pad fiasco, David Haney’s blog post: “Have We Forgotten How to Program?”, lead to many heated discussions whether developers should take on dependencies for simple tasks. You can read the post and the discussion that ensued for all the details, but to summarize it – a dependency on an 11 line package that implements a left padding string function was removed; this package was used by Babel.
              <a href="/blog/publications/Have_we_forgetten_how_to_program" className={styles.readMore}>
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogPage;