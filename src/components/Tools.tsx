import React from "react";
import clsx from "clsx"; // Optional: For adding styles conditionally
import styles from "./Tools.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

// Importing images
import TheSoftwareLibrarianImage from "../images/TheSoftwareLibrarian.jpg";
import codemapperImage from "../images/codemapper.jpg";
import DependencyImage from "../images/Dependency.jpg";
import DepHealthImage from "../images/DepHealth.jpg";
import commitGuruImage from "../images/commitGuru.jpg";
import MSRBotImage from "../images/MSRBot.jpg";
import RepochatImage from "../images/RepoChat.jpg";
import DepRevealImage from "../images/DepReveal.jpg";
import FairBoostImage from "../images/FairBoost.jpg";
import BotHunterImage from "../images/BotHunter.jpg";
import PerfJITImage from "../images/PerfJIT.jpg";
import npmssimplifiedImage from "../images/npmssimplified.jpg";
import CISKIPPERImage from "../images/CISKIPPER.jpg";
import LogBugFinderImage from "../images/LogBugFinder.jpg";
import SATDDetectorImage from "../images/SATDDetector.jpg";
import PERMLYZERImage from "../images/PERMLYZER.jpg";
import CODYNAQImage from "../images/CODYNAQ.jpg";
import ConcolicCodeCloneDetectionImage from "../images/ConcolicCodeCloneDetection.jpg";
import IRCAnalyzerFrameworkImage from "../images/IRCAnalyzerFramework.jpg";


// Tools Data
const tools = [
  {
    id: "samuel-abedu",
    name: "Samuel Abedu, Laurine Menneron, SayedHassan Khatoonabadi, Emad Shihab.",
    toolName: "RepoChat",
    image: RepochatImage,
    pdf:"https://das.encs.concordia.ca/pdf/abedu2025repochat.pdf",
    link:"https://repochattool.streamlit.app/"
  },
  {
    id: "Jasmine-Latendresse",
    name: "Jasmine Latendresse, Naoures Day, SayedHassan Khatoonabadi, and Emad Shihab.",
    toolName: "The Software Librarian",
    image: TheSoftwareLibrarianImage,
    pdf:"https://das.encs.concordia.ca/pdf/lat2025softlib.pdf",
    link:"https://marketplace.visualstudio.com/items?itemName=jaslatendresse.software-librarian"
  },
  {
    id: "JasmineLatendresse",
    name: "Thomas Le Tourneau, Jasmine Latendresse,Ahmad Abdellatif, and Emad Shihab.",
    toolName: "Code Mapper",
    // link: "https://codemapper.alwaysdata.net/",
    image: codemapperImage,
    pdf:"https://das.encs.concordia.ca/pdf/letourneau2024code.pdf"
  },


  {
    id: "Mahmoud Alfadel    ",
    name: "Mahmoud Alfadel, Diego Elias Costa, and Emad Shihab.    ",
    toolName: "DEPHEALTH ",
    // link: "http://104.237.154.205:8443/?fbclid=IwAR3qdZPNXISqK7VkPNXYQaEhtdxKR8nBEbmqGJI7Z-nHw9f6_oSNAjLc_dI",
    image: DepHealthImage,
    pdf:"https://das.encs.concordia.ca/pdf/Alfadel_EMSE2023.pdf"
  },
  {
    id: "Mahmoud Alfadel    ",
    name: "Mahmoud Alfadel, Diego Elias Costa, Emad Shihab, and Bram Adams.    ",
    toolName: "DepReveal ",
    image: DepRevealImage,
    github:"https://github.com/mahmoud-alfadel/DepReveal",
    pdf:"https://das.encs.concordia.ca/pdf/Alfadel_TOSEM2022.pdf"
  },
  {
    id: "Khaled Badran",
    name: "Khaled Badran, Pierre-Olivier, Amanda Kolopanis, Rached Bouchoucha, Antonio Collante, Diego Costa, Emad Shihab, and Foutse Khomh. ",
    toolName: "FairBoost ",
    image: FairBoostImage,
    github:"https://github.com/KhaledBadran/FairBoost",
    pdf:"https://das.encs.concordia.ca/pdf/Badran_Computer2022.pdf"
  },
  {
    id: "Ahmad Abdellatif    ",
    name: "Ahmad Abdellatif, Mairieli Wessel, Igor Steinmacher, Marco A. Gerosa, and Emad Shihab.   ",
    toolName: " BotHunter",
    image: BotHunterImage,
    pdf:"https://das.encs.concordia.ca/pdf/abdellatif_MSR2022.pdf",
    github:"https://github.com/ahmad-abdellatif/BotHunter",
    // link:"https://askgit.io/",
  },
  {
    id: "Abbas Javan Jafari    ",
    name: "Abbas Javan Jafari, Diego Elias Costa, Rabe Abdalkareem, Emad Shihab, and Nikolaos Tsantalis.    ",
    toolName: "DependencySniffer ",
    github: "https://github.com/abbasjavan/DependencySniffer",
    image: DependencyImage,
    pdf:"https://das.encs.concordia.ca/pdf/Javan_2021TSE.pdf"
  },
  {
    id: "Jinfu Chen ",
    name: "Jinfu Chen, Weiyi Shang, and Emad Shihab.",
    toolName: "PerfJIT  ",
    image: PerfJITImage,
    pdf:"/https://das.encs.concordia.ca/pdf/chen_tse2020.pdf"
  },
  {
    id: "Ahmad Abdellatif    ",
    name: "Ahmad Abdellatif, Khaled Badran, Emad Shihab.   ",
    toolName: "MSRBot & ASKGit",
    image: MSRBotImage,
    pdf:"https://das.encs.concordia.ca/pdf/Abdellatif2020EMSE.pdf",
    github:"https://github.com/ahmad-abdellatif/MSRBot?utm_source=chatgpt.com",
    // link:"https://askgit.io/",
  },
  {
    id: "Ahmad Abdellatif    ",
    name: "Ahmad Abdellatif, Yi Zeng, Mohamed Elshafei, Emad Shihab, and Weiyi Shang.",
    toolName: "Npms-simplified",
    image: npmssimplifiedImage,
    pdf:"https://das.encs.concordia.ca/pdf/abdellatif_ist2020.pdf",
    // github:"https://github.com/ahmad-abdellatif/MSRBot?utm_source=chatgpt.com",
    // link:"https://askgit.io/",
  },
  {
    id: "Rabe Abdalkareem",
    name: "Rabe Abdalkareem, Suhaib Mujahid, Emad Shihab, and Juergen Rilling.",
    toolName: "CI-SKIPPER",
    image: CISKIPPERImage,
    pdf:"https://das.encs.concordia.ca/pdf/abdalkareem_tse2019.pdf",
    github:"https://github.com/suhaibmujahid/ci-skipper",
    // link:"https://askgit.io/",
  },
  {
    id: "Mehran Hassani",
    name: "Mehran Hassani, Weiyi Shang, Emad Shihab, and Nikolaos Tsantalis.",
    toolName: "LogBugFinder",
    image: LogBugFinderImage,
    pdf:"https://das.encs.concordia.ca/pdf/hassani_emse2018.pdf",
    // github:"https://mehranhassani.github.io/LogBugFinder/",
    // link:"https://askgit.io/",
  },
  {
    id: "Zhongxin Liu",
    name: "Zhongxin Liu ,Qiao Huang ,Xin Xia ,Emad Shihab ,David Lo , and Shanping Li.",
    toolName: "SATD Detector",
    image: SATDDetectorImage,
    pdf:"https://das.encs.concordia.ca/pdf/liu_icse2018.pdf",
    link:"https://goo.gl/ZzjBzp",
  },
  {
    id: "Suhaib Mujahid",
    name: "Suhaib Mujahid, Rabe Abdalkareem, and Emad Shihab.",
    toolName: "PERMLYZER",
    image: PERMLYZERImage,
    pdf:"https://das.encs.concordia.ca/pdf/mujahid_icsme_2018.pdf",
    // link:"https://goo.gl/ZzjBzp",
  },
  {
    id: "Yuecai Zhu",
    name: "Yuecai Zhu, Emad Shihab, and Peter C. Rigby.",
    toolName: "CODYNAQ",
    image: CODYNAQImage,
    pdf:"https://das.encs.concordia.ca/pdf/zhu_icsme2018.pdf",
    // link:"https://goo.gl/ZzjBzp",
  },
  {
    id: "Emad Shihab    ",
    name: "Emad Shihab, Christoffer Rosen, and Ben Grawi.    ",
    toolName: "Commit Guru",
    image: commitGuruImage,
    pdf:"https://users.encs.concordia.ca/~eshihab/pubs/Rosen_FSE2015Tool.pdf",
    link:"http://commit.guru/?fbclid=IwY2xjawIExgRleHRuA2FlbQIxMAABHQWFOAoglPOT40_n0h7QjuOHdnfNkunk179EmwmQUg_2B6qB7iTdN39lpA_aem_sz5ZQpSL0e2uL3fyS8_fnw"
  },
  {
    id: "Daniel E. Krutz ",
    name: "Daniel E. Krutz and Emad Shihab",
    toolName: "CCCD: Concolic code clone detection",
    image: ConcolicCodeCloneDetectionImage,
    pdf:"https://das.encs.concordia.ca/pdf/Krutz_WCRE2013.pdf",
    // link:"https://goo.gl/ZzjBzp",
  },
  {
    id: "Emad Shihab ",
    name: "Emad Shihab, Zhen Ming Jiang and Ahmed E. Hassan",
    toolName: " IRC Analyzer Framework",
    image: IRCAnalyzerFrameworkImage,
    pdf:"https://das.encs.concordia.ca/pdf/Shihab_MSR2009Challenge.pdf",
    // link:"https://goo.gl/ZzjBzp",
  },
];

// The ToolsList component to display all tools
export default function Tools() {
  return (
    <>
        <div className={ styles.toolsContainer}>

    <div className={styles.emptyiteam}></div>
      {tools.map((tool) => (
        <>


     <div className={clsx("card", styles.cards)} key={tool.id}>
     <div className={clsx("card","toolImageContainer_src-components-Tools-module",styles.toolImageContainer)}>
                <img
                  src={tool.image}
                  alt={tool.toolName}
                  className={styles.toolImage}
                />
        </div>
        <div className={styles.cardbody}>
       <div className={clsx("card__header", styles.toolsHeader)}>
      
         <h4 className={styles.type}>{tool.toolName}</h4>
       </div>


 {/* Content Container */}
<div className="card__body">
 <div className={styles.toolbox}>
 <div  className={styles.name}>
 <p className={styles.toolCreator}>{tool.name}</p> 

 </div>
               
<div className={clsx("button-group", styles.floatButtons)}>
 {tool.pdf && (               
 <a href={tool.pdf}
 target="_blank"
rel="noopener noreferrer"
 className= "button button--outline button--sm button--secondary">
 <FontAwesomeIcon icon={faFilePdf} /> PDF
 </a>)}
                 
{tool.github && (                
<a href={tool.github}
 target="_blank"
rel="noopener noreferrer"
className= "button button--outline button--sm button--secondary" >
 <FontAwesomeIcon icon={faGithub} /> GitHub
 </a>
               
 )}
                 
{tool.link && (            
<a href={tool.link}
 target="_blank"
 rel="noopener noreferrer"
className= "button button--outline button--sm button--secondary">
 Tool
 </a>              
 )}
</div>
</div>
</div>
</div>

</div>
</>
      ))}
    </div></>
  );
}
