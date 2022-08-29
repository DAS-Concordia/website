import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import logo from "../../static/img/logo.png";
import { TwitterFeed } from "../components/Twitter";
import HomeNotes from "./_home.mdx";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className="container">
        <img src={logo} className={styles.logo} />
        <h1 className="hero__title">
          <b>D</b>ata-driven <b>A</b>nalysis of <b>S</b>oftware Lab
        </h1>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section>
          <div className="container">
            <div className="row margin-top--lg">
              <div className={clsx("col col--7 margin-bottom--lg")}>
                <HomeNotes />
              </div>
              <div className={clsx("col col--5 margin-bottom--lg")}>
                <TwitterFeed
                  username="DASLabConcordia"
                  accountName="DAS Lab"
                  tweetLimit="2"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
