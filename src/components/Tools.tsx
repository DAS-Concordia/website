import React from "react";
import clsx from "clsx"; // Optional: For adding styles conditionally
import styles from "./Tools.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

// Importing images
import TheSoftwareLibrarianImage from "../images/TheSoftwareLibrarian.png";
import codemapperImage from "../images/codemapper.png";
import DependencyImage from "../images/Dependency.jpg";
import DepHealthImage from "../images/DepHealth.jpg";
import commitGuruImage from "../images/commitGuru.png";
import MSRBotImage from "../images/MSRBot.png";
import AskGitImage from "../images/AskGit.png";


// Tools Data
const tools = [
  {
    id: "Jasmine-Latendresse",
    name: "Jasmine Latendresse",
    role:"PhD Student   ",
    toolName: "The Software Librarian",
    image: TheSoftwareLibrarianImage,
    pdf:"https://das.encs.concordia.ca/pdf/lat2025softlib.pdf",
    link:"https://marketplace.visualstudio.com/items?itemName=jaslatendresse.software-librarian"
  },
  {
    id: "JasmineLatendresse",
    name: "Jasmine Latendresse",
    role:"PhD Student    ",
    toolName: "Code Mapper",
    link: "https://codemapper.alwaysdata.net/",
    image: codemapperImage,
    pdf:"https://das.encs.concordia.ca/pdf/letourneau2024code.pdf"
  },
  {
    id: "Abbas Javan Jafari    ",
    name: "Abbas Javan Jafari    ",
    role:"PhD Student    ",
    toolName: "DependencySniffer ",
    github: "https://github.com/abbasjavan/DependencySniffer",
    image: DependencyImage,
    pdf:"https://das.encs.concordia.ca/pdf/Javan_2021TSE.pdf"
  },
  {
    id: "Mahmoud Alfadel    ",
    name: "Mahmoud Alfadel    ",
    role:"PhD Student    ",
    toolName: "Dep-Health ",
    link: "http://104.237.154.205:8443/?fbclid=IwAR3qdZPNXISqK7VkPNXYQaEhtdxKR8nBEbmqGJI7Z-nHw9f6_oSNAjLc_dI",
    image: DepHealthImage,
    pdf:"https://das.encs.concordia.ca/pdf/alfadel_thesis.pdf"
  },
  {
    id: "Ahmad Abdellatif    ",
    name: "Ahmad Abdellatif    ",
    role:"Postdoctoral Researcher    ",
    toolName: "MSRBot",
    image: MSRBotImage,
    pdf:"https://das.encs.concordia.ca/pdf/Abdellatif2020EMSE.pdf",
    github:"https://github.com/ahmad-abdellatif/MSRBot?utm_source=chatgpt.com",
  },
  {
    id: "Ahmad Abdellatif    ",
    name: "Ahmad Abdellatif    ",
    role:"Postdoctoral Researcher    ",
    toolName: "ASKGit",
    image: AskGitImage,
    link:"https://askgit.io/",

    // pdf:"https://das.encs.concordia.ca/pdf/Abdellatif2020EMSE.pdf",
    // github:"https://github.com/ahmad-abdellatif/MSRBot?utm_source=chatgpt.com",
  },

  {
    id: "Emad Shihab    ",
    name: "Emad Shihab    ",
    role:"Professor    ",
    toolName: "Commit Guru",
    image: commitGuruImage,
    pdf:"https://users.encs.concordia.ca/~eshihab/pubs/Rosen_FSE2015Tool.pdf",
    link:"http://commit.guru/?fbclid=IwY2xjawIExgRleHRuA2FlbQIxMAABHQWFOAoglPOT40_n0h7QjuOHdnfNkunk179EmwmQUg_2B6qB7iTdN39lpA_aem_sz5ZQpSL0e2uL3fyS8_fnw"
  },
];

// The ToolsList component to display all tools
export default function Tools() {
  return (
    <>
        <div className={ styles.toolsContainer}>

    <div className={styles.emptyiteam}></div>
      {tools.map((tool) => (
        <div className={styles.card} key={tool.id}>
          <div className={clsx("card__header", styles.toolsHeader)}>
            <h4 className={styles.type}>{tool.toolName}</h4>
          </div>

          <div className="toolCard">
            <div className={styles.toolContentContainer}>
              {/* Image Container */}
              <div className={styles.toolImageContainer}>
                <img
                  src={tool.image}
                  alt={tool.toolName}
                  className={styles.toolImage}
                />
              </div>
              {/* Content Container */}
              <div className={styles.cardbody}>
              <div className={styles.toolbox}>
                <div  className={styles.name}>
                <p className={styles.toolCreator}>{tool.name}</p> 
                <p className={styles.toolCreator}>{tool.role}</p> 

                </div>
               
                <div className={clsx("button-group", styles.floatButtons)}>
                {tool.pdf && (
                    <button
                      className={clsx("button button--outline button--sm button--secondary")}
                    >
                      <a
                        href={tool.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(styles.toolLink, "btn btn-primary")}
                      >
                        <FontAwesomeIcon icon={faFilePdf} /> PDF
                      </a>
                    </button>
                  )}
                 
                 {tool.github && (
                    <button
                      className={clsx("button button--outline button--sm button--secondary")}
                    >
                      <a
                        href={tool.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(styles.toolLink)}
                      >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                      </a>
                    </button>
                  )}
                 
                  {tool.link && (
                    <button
                      className={clsx("button button--outline button--sm button--secondary")}
                    >
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(styles.toolLink)}
                      >
                      Tool
                      </a>
                    </button>
                  )}
               </div></div>
              </div>
            </div>
          </div>
            </div>
      ))}
    </div></>
  );
}
