import React, { useEffect } from "react";
import useThemeContext from "@theme/hooks/useThemeContext";
import styles from "./Twitter.module.css";
import HomepageSectionTitle from "./HomepageSectionTitle";

export const TwitterSection = () => {
  return (
    <section className={styles.twitterSection}>
      <div className="container">
        <HomepageSectionTitle>
          Tweets by <b>DAS</b> Lab
        </HomepageSectionTitle>

        <div className="row">
          <div className="col col--6 col--offset-3">
            <TwitterFeed />
          </div>
        </div>
      </div>
    </section>
  );
};

export const TwitterFeed = ({ tweetLimit = 5, username, accountName }) => {
  const { isDarkTheme } = useThemeContext();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
  }, []);

  return (
    <a
      className="twitter-timeline"
      data-lang="en"
      data-chrome="noheader,nofooter,noborders"
      data-theme={isDarkTheme ? "dark" : "light"}
      data-tweet-limit={tweetLimit}
      href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
    >
      Tweets by {accountName}
    </a>
  );
};
