import Layout from "@theme/Layout";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Tools from "../../components/Tools.tsx";
import PageHeader from "../../components/PageHeader";
import members from "../../data/members-list.build";

export default function Members() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Tools" description="The labs's tools.">
      <PageHeader title="Tools " />
<<<<<<< HEAD
      <main> 
=======
      <main>
>>>>>>> 0147c99 (Add tools page link)
        
      <Tools />
      </main>
    </Layout>
  );
}
