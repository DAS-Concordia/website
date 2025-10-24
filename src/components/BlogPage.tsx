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
const RepoChatImage= require("../images/Blog/RepoChat.jpg").default;

const codemapperImage= require("../images/Blog/codemapper.jpg").default;
const DataVersionControlImage= require("../images/Blog/DataVersionControl.jpg").default;

const AIandTODOCommentsImage= require("../images/Blog/AIandTODOComments.jpg").default;
const SE4AITrainingProgramImage= require("../images/Blog/SE4AITrainingProgram.jpg").default;
const DependencyUpdateStrategiesImage= require("../images/Blog/DependencyUpdateStrategies.jpg").default;

const IdentifyingMaliciousPackagesImage= require("../images/Blog/IdentifyingMaliciousPackages.jpeg").default;






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

    title: "Identifying Malicious Packages through Maintainer and Project Signals ",
    authorName: "Haya Samaana",
    image: IdentifyingMaliciousPackagesImage,
    authorUrl: "https://www.linkedin.com/in/haya-samaana/",
    authorRole: "Master's Student",
    description:
      "Malicious software packages are increasingly targeting open-source ecosystems like PyPI (the Python Package Index), often introduced through subtle tactics such as typosquatting, misleading metadata, or suspicious maintainer activity. These packages can cause serious harm before they are detected. To help address this challenge, we developed a machine learning-based method that automatically identifies malicious PyPI packages by analyzing their metadata, code, configuration files, and other package-level signals.",
    postUrl: "/blog/publications/Identifying_Malicious_Packages_through_Maintainer_and_Project_Signals",
  },
  {

    title: "RepoChat: Enhancing GitHub Repository Interactions with LLM-Powered Chatbot",
    authorName: "Samuel Abedu",
    image: RepoChatImage,
    authorUrl: "/members/samuel-abedu",
    authorRole: "PhD Student",
    description:
      "In the dynamic landscape of software development, repositories like GitHub hold invaluable data, including source code, documentation, issue tracking, and commit histories. However, accessing and interpreting this information can be time-consuming and require considerable technical expertise. This complexity poses challenges, especially for non-technical stakeholders, such as project managers, who need insights without delving into technical details.",
    postUrl: "/blog/publications/RepoChat_Enhancing_GitHub_Repository_Interactions_with_LLM-Powered_Chatbot",
  },
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
    title: "Code Mapper: Charting the Global Pulse of Open Source.",
    authorName: "Thomas Le Tourneau",
    image: codemapperImage,
    authorUrl: "/members/thomas-le-tourneau",
    authorRole: "Undergraduate Student ",
    description:
      "Open source is more than just code, it’s a global movement fueled by collaboration across borders. Every repository, every commit, and every pull request represent the collective effort of developers worldwide. But despite this vast interconnected network, the geographical reach of open-source contributions often goes unnoticed. Code Mapper changes that.",
    postUrl: "/blog/publications/CodeMapper_Charting_the_Global_Pulse_of_Open_Source",
  },
  {
    title: "Data Version Control (DVC): A Foundational Tool for Reproducible Machine Learning Workflows   ",
    authorName: "Lorena Barreto",
    image: DataVersionControlImage,
    authorUrl: "https://www.linkedin.com/in/lorenasimedo/?originalSubdomain=ca",
    authorRole: "Masters Student",
    description:
      "Managing datasets, models, and experiments in data science is complex. Unlike source code, which is easily tracked with Git, data files are large, constantly changing, and difficult to version. Without a structured system, teams struggle with inconsistencies, lost work, and the inability to reproduce results. Data Version Control (DVC) extends Git to handle data, models, and entire workflows, ensuring seamless collaboration, reproducibility, and efficient tracking of every stage in a data science project.",
    postUrl: "/blog/publications/DVC_in_Open_Source_ML_development",
  },
  {

    title: "AI and TODO Comments: A New Way to Think About Code Generation",
    authorName: "David OBrien ",
    image: AIandTODOCommentsImage,
    authorUrl: "https://davidmobrien.github.io/",
    authorRole: "PhD Student",
    description:
      "Every developer has written a TODO comment at some point in their code. Whether it's a simple reminder to fix a bug, mark unfinished work, or indicate a piece of technical debt, these short notes have been a go-to method for flagging issues for later. But with the rise of AI-powered tools like GitHub Copilot, these TODOs may be taking on a whole new purpose. So, what happens when AI tools, like Copilot, come across these comments? Do they help, ignore, or maybe even make things worse? ",
    postUrl: "/blog/publications/AI_and_TODO_Comments",
  },
  {
    title: "SE4AI: Bridging Technical Expertise and Social Responsibility in AI Development",
    authorName: "Ahmad Abdellatif",
    image: SE4AITrainingProgramImage,
    authorUrl: "/members/ahmad-abdellatif",
    authorRole: "PhD Student",
    description:
      "AI-driven software systems have rapidly become a cornerstone of modern technology, transforming industries and creating endless opportunities for innovation. However, building these systems involves much more than mastering algorithms or fine-tuning data models. Integrating AI into software development requires a deeper understanding of the technical, ethical, and social implications of the technology. That’s where **SE4AI** comes in. This training program is designed to equip participants not just with the technical skills needed for AI development, but also with the broader societal understanding that these systems demand.",
    postUrl: "/blog/publications/SE4AI_Bridging_Technical_Expertise_and_Social_Responsibility_in_AI_Development",
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
  },  {

    title: "Navigating Dependency Updates: What Influences a Developer's Strategy? ",
    authorName: "Abbas Javan Jafari ",
    image: DependencyUpdateStrategiesImage,
    authorUrl: "/members/abbas-javan",
    authorRole: "PhD Student",
    description:
      "Keeping software dependencies up to date is a balancing act. Developers want to integrate the latest features, security patches, and bug fixes, but they also need to avoid updates that might introduce breaking changes. While Semantic Versioning (SemVer) was designed to help with this process, not all developers strictly follow its guidelines. Some prefer more restrictive update strategies, while others lean towards more flexible approaches. The choice often depends on project stability, team policies, and the nature of the software being developed, and the standards and best practices of the broader ecosystem. ",
    postUrl: "/blog/publications/Navigating_Dependency_Updates_What_Influences_a_Developers_Strategy",
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="container">
     {blogPosts.map((post) => (
        <div key={post.title} className={styles.container} >
      
       <div className={styles.title}>
          <h2><a href={post.postUrl}>{post.title}</a></h2>
          <a href={post.authorUrl} className={styles.authorName}>
              {post.authorName}
            </a>
            <div className={styles.avatar__subtitle}>{post.authorRole}</div>
          </div>
          

         <div className={styles.events} >
         <div className={styles.imageContainer}>
          <img src={post.image} alt={post.authorName}/></div>
          <div className={styles.text}>
          <p className={styles.description}>{post.description} <a href={post.postUrl} className={styles.readMore}>
            Read More
          </a></p>
         </div></div>
    
    </div>
      ))}
    </div>
  );
};

export default BlogPage;