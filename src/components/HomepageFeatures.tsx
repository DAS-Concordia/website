/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import HomepageSectionTitle from "./HomepageSectionTitle";
import Cooperation from "../svg/cooperation.svg";
import HomeNotes from "../pages/_home.mdx";

type FeatureItem = {
  title: string;
  Svg: React.ReactElement;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Mining Software Repositories",
    Svg: require("../svg/data-mining.svg").default,
    description: (
      <p>
        We also apply state-of-the-art Data Mining, Artificial Intelligence, and
        Statistical Analysis techniques in order to build our solutions.
      </p>
    ),
  },
  {
    title: "Software Data Analytics",
    Svg: require("../svg/data-analytics.svg").default,
    description: (
      <p>
        We also apply state-of-the-art Data Mining, Artificial Intelligence, and
        Statistical Analysis techniques in order to build our solutions.
      </p>
    ),
  },
  {
    title: "Quality Prediction",
    Svg: require("../svg/quality-prediction.svg").default,
    description: (
      <p>
        We also apply state-of-the-art Data Mining, Artificial Intelligence, and
        Statistical Analysis techniques in order to build our solutions.
      </p>
    ),
  },
  {
    title: "Technical Debt",
    Svg: require("../svg/data-engineering.svg").default,
    description: (
      <p>
        We also apply state-of-the-art Data Mining, Artificial Intelligence, and
        Statistical Analysis techniques in order to build our solutions.
      </p>
    ),
  },
  {
    title: "Mobile/Wear Applications",
    Svg: require("../svg/mobile.svg").default,
    description: (
      <p>
        We also apply state-of-the-art Data Mining, Artificial Intelligence, and
        Statistical Analysis techniques in order to build our solutions.
      </p>
    ),
  },
  {
    title: "Empirical Software Engineering",
    Svg: require("../svg/data-analysis.svg").default,
    description: (
      <p>
        We also apply state-of-the-art Data Mining, Artificial Intelligence, and
        Statistical Analysis techniques in order to build our solutions.
      </p>
    ),
  },
];

function Feature({ Svg, title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4  margin-bottom--lg")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {description}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <HomepageSectionTitle>
          Investigate, develop and deploy data-driven solutions that can{" "}
          <b>help software practitioners</b> improve their software
        </HomepageSectionTitle>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function NotesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <HomepageSectionTitle>
          Applying <b>State-Of-The-Art</b> Techniques
        </HomepageSectionTitle>
        <div className="row">
          <div className={clsx("col col--8  col--offset-2")}>
            <div className="text--center">
              <Cooperation className={styles.featureSvg} />
            </div>
            <div className="text--center padding-horiz--md hero__subtitle">
              We also apply state-of-the-art Data Mining, Artificial
              Intelligence, and Statistical Analysis techniques in order to
              build our solutions. Several of the techniques and tools developed
              by DAS members have been developed in cooperation with and/or
              being used in some of the world’s largest software companies.
            </div>
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className={clsx("col col-12")}>
            <HomeNotes />
          </div>
        </div>
      </div>
    </section>
  );
}
