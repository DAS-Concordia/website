import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Institutions } from "../components/Institutions";
import PageHeader from "../components/PageHeader";

export const InstitutionList = [
  {
    title: "",
    members: [
      {
        name: "The Faculty of Engineering and Computer Science at Concordia University",
        log: require("../../logos/ENCS.png").default,
        url: "https://encs.concordia.ca",
      },
      {
        name: "Natural Sciences and Engineering Research Council of Canada (NSERC)",
        log: require("../../logos/NSERC_RGB.png").default,
        url: "https://www.nserc-crsng.gc.ca/index_eng.asp",
      },
      {
        name: "Mitacs",
        log: require("../../logos/Mitacs.png").default,
        url: "https://www.mitacs.ca/en",
      },
      {
        name: "Ericsson",
        log: require("../../logos/Ericsson.png").default,
        url: "https://www.ericsson.com/en",
      },
      {
        name: "National Bank of Canada",
        log: require("../../logos/NBC.png").default,
        url: "https://www.nbc.ca",
      },
      {
        name: "Motsai Research Inc.",
        log: require("../../logos/Motsai.png").default,
        url: "https://motsai.com",
      },
      {
        name: "IBM",
        log: require("../../logos/IBM.png").default,
        url: "https://www.ibm.com/ca-en",
      },
      {
        name: "TD Bank Group",
        log: require("../../logos/TD.png").default,
        url: "https://www.td.com/ca/en/",
      },
      {
        name: "Airudi",
        log: require("../../logos/Airudi.png").default,
        url: "https://airudi.com/en/",
      },
      {
        name: "IVADO",
        log: require("../../logos/IVADO.png").default,
        url: "https://ivado.ca/en/",
      },
      {
        name: "Vercel",
        log: require("../../logos/Vercel.png").default,
        url: "https://vercel.com/?utm_source=das-lab&utm_campaign=oss",
      }, 
      {
        name: "Sandoz",
        log: require("../../logos/Sandoz.png").default,
        url: "https://www.sandoz.ca/",
      },
    ],
  },
  {
    title: "Universities",
    members: [
      {
        name: "Polytechnique Montréal",
        log: require("../../logos/PolyMTL.png").default,
        url: "https://www.polymtl.ca/en/",
      },
      {
        name: "Queen's University",
        log: require("../../logos/Queens.png").default,
        url: "https://www.queensu.ca",
      },
      {
        name: "University of Alberta",
        log: require("../../logos/Alberta.png").default,
        url: "https://www.ualberta.ca",
      },
      {
        name: "McGill University",
        log: require("../../logos/McGill.png").default,
        url: "https://www.mcgill.ca",
      },
      {
        name: "Rochester Institute of Technology (RIT)",
        log: require("../../logos/RIT.png").default,
        url: "https://www.rit.edu",
      },
      {
        name: "Monash University",
        log: require("../../logos/Monash.png").default,
        url: "https://www.monash.edu",
      },
      {
        name: "Istanbul Technical University (ITU)",
        log: require("../../logos/ITU.png").default,
        url: "https://www.itu.edu.tr/en",
      },
      {
        name: "Eindhoven University of Technology",
        log: require("../../logos/TUe.png").default,
        url: "https://www.tue.nl/en",
      },
      {
        name: "Zhejiang University",
        log: require("../../logos/Zhejiang.png").default,
        url: "http://www.zju.edu.cn/english",
      },
      {
        name: "Kyushu University",
        log: require("../../logos/Kyushu.png").default,
        url: "https://www.kyushu-u.ac.jp/en/",
      },
    ],
  },
];

export default function Partners() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Partners"
      description="The DAS Lab's sponsors and collaborates."
    >
      <PageHeader title="Our Sponsors and Collaborates" />
      <main>
        <Institutions list={InstitutionList} />
      </main>
    </Layout>
  );
}
