import Layout from "@theme/Layout";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TeamMembers from "../../components/TeamMembers";
import PageHeader from "../../components/PageHeader";
import members from "../../data/members-list.build";

export default function Members() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Members" description="The labs's members.">
      <PageHeader title="Members of DAS Lab" />
      <main>
        <TeamMembers list={members} />
      </main>
    </Layout>
  );
}
