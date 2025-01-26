import React from "react";
import Layout from "@theme/Layout";
import PageHeader from "../../components/PageHeader";
import BlogPage from "../../components/BlogPage"; // Default import (no curly braces)

export default function BlogPageWrapper() {
  console.log({ BlogPage, PageHeader }); // Debugging log

  return (
    <Layout title="Partners" description="The project's partners.">
      <PageHeader title="Blog" description="" />
      <main>
        <BlogPage />
      </main>
    </Layout>
  );
}
