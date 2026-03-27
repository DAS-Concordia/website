
import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import { MastodonFeed } from "./MastodonFeed";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Test(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
  
          <div className="container">
       
     
                {/* <TwitterFeed
                  username="DASLabConcordia"
                  accountName="DAS Lab"
                  tweetLimit="2"
                /> */}
                <MastodonFeed />
              </div>
   
  );
}