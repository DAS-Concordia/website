
import React from "react";
import Layout from "@theme/Layout";
import PageHeader from "../../components/PageHeader";
import { AllPublications } from "../../components/Publications";




export default function PublicationsPage() {
  return (
    <Layout title="Partners" description="The project's partners.">
      <PageHeader title="Publications" description="" />
      <main>
        <AllPublications />
      </main>
    </Layout>
  );
}
