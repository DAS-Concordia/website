import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useThemeContext from "@theme/hooks/useThemeContext";
import styles from "./index.module.css";
import HomepageFeatures, { NotesSection } from "../components/HomepageFeatures";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";
import logo from "../../static/img/logo.png";
import { TwitterSection } from "../components/Twitter";
import HomepageSectionTitle from "../components/HomepageSectionTitle";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className="container">
        <img src={logo} className={styles.logo} />
        <h1 className="hero__title">
          <b>D</b>ata-driven <b>A</b>nalysis of <b>S</b>oftware Lab
        </h1>
        <p className="hero__subtitle">
          DAS is part of the Computer Science and Software Engineering
          department at Concordia University
        </p>
        one of the{" "}
        <a
          target="_blank"
          href="https://www.topuniversities.com/university-rankings-articles/top-50-under-50-next-50-under-50/qs-top-50-under-50-2020"
        >
          top 100 universities under 50 years
        </a>{" "}
        in the world
      </div>
    </header>
  );
}



export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <NotesSection />
        <TwitterSection />
      </main>
    </Layout>
  );
}
