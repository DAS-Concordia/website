import React from "react";
import clsx from "clsx";
import styles from "./HomepageSectionTitle.module.css";

const HomepageSectionTitle = ({ children }) => (
  <div className={clsx("row", styles.title)}>
    <div className={"col col--12"}>
      <h2>{children}</h2>
    </div>
  </div>
);

export default HomepageSectionTitle;
