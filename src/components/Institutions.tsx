import React from "react";
import clsx from "clsx";
import HomepageSectionTitle from "./HomepageSectionTitle";
import styles from "./Institutions.module.css";

function Institution({ log, name, url }) {
  return (
    <div className="col col--4">
      <div className={styles.institution}>
        <a href={url} target="_blank">
          <img src={log} alt={name} />
        </a>
      </div>
    </div>
  );
}

export function Institutions({ list }) {
  return (
    <section>
      <div className="container">
        {list.map((category) => (
          <div key={category.title} className="row margin-bottom--lg">
            <h2 className="col col--12 section">{category.title}</h2>
            {category.members.map((props: any) => (
              <Institution key={props.name} {...props} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomepageInstitutions({ list }) {
  return (
    <section className={styles.institutions}>
      <div className="container">
        <HomepageSectionTitle>
          In Collaboration with World-renowned <b>Researchers</b> and <b>Technology Leaders</b>
        </HomepageSectionTitle>
        <div className="row">
          {list.map((category) =>
            category.members.map((props) => (
              <Institution key={props.name} {...props} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
