import Layout from "@theme/Layout";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Test from "../../components/Test";
import PageHeader from "../../components/PageHeader";

export default function Members() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Test " description="The labs's test page">
      <PageHeader title="Test " />

      <main> 
        
      <Test />
      </main>
    </Layout>
  );
}
