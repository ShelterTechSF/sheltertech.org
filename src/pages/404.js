import React from "react";

import Layout from "../layouts/Layout";

const Page = () => (
  <div className="content">
    <div className="content-bg" />
    <div className="content--header">
      <h2>Page not found</h2>
      <h3>Sorry, we couldn&apos;t find the page you were looking&nbsp;for.</h3>
    </div>
  </div>
);

export default () => (
  <Layout>
    <Page />
  </Layout>
);
