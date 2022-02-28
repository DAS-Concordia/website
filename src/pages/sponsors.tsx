import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Institutions } from "../components/Institutions";
import PageHeader from "../components/PageHeader";

export const InstitutionList = [
  {
    title: "The DAS lab is funded through support from:",
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
        name: "Vercel",
        log: require("../../logos/Vercel.png").default,
        url: "https://vercel.com/?utm_source=das-lab&utm_campaign=oss",
      },
    ],
  },
];

export default function Partners() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Partners" description="The project's partners.">
      <PageHeader title="Our Sponsors" />
      <main>
        <Institutions list={InstitutionList} />
      </main>
    </Layout>
  );
}
