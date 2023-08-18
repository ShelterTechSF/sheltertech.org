import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews";
import * as React from "react";

const PreviewPage = () => {
  return (
    <div>
      <h1>Loading preview…</h1>
    </div>
  );
};

export default withPrismicPreviewResolver(PreviewPage);
