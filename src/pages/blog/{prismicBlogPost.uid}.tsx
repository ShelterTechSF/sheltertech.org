import { graphql, PageProps } from "gatsby";
import React from "react";
import BlogPostTemplate from "./BlogPostTemplate";

/**
  This is the setup for our dynamically generated blog post pages.
  All urls of the pattern "/blog/{uid}"" point here and perform the query on this page.
  Refer to the following docs:
  https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
  https://prismic.io/docs/technologies/tutorial-4-add-dynamic-pages-gatsby
*/

export const query = graphql`
  query PrismicBlogPost($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      data {
        author {
          text
        }
        header_image {
          alt
          copyright
          url
        }
        title {
          text
        }
        publish_date
        body {
          ... on PrismicBlogPostDataBodyStatsBlock {
            id
            slice_type
          }
          ... on PrismicBlogPostDataBodyImageWithCaption {
            primary {
              image {
                url
                alt
              }
              caption {
                raw
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyCtaBlock {
            id
            primary {
              button_link {
                url
              }
              button_text {
                text
              }
              header {
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodySeparator {
            id
            primary {
              separator_image {
                url
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyQuoteBlock {
            id
            primary {
              quote {
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyTextBlock {
            id
            primary {
              body_text {
                html
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyFileDownloadBlock {
            id
            primary {
              file {
                url
              }
              file_download_header {
                text
              }
            }
            slice_type
          }
        }
      }
    }
  }
`;

const PrismicBlogPostPage = ({
  data,
}: PageProps<GatsbyTypes.PrismicBlogPostQuery>) => {
  if (!data?.prismicBlogPost?.data) return <h1>There was a problem</h1>;
  const blogData = data.prismicBlogPost.data;

  return (
    <BlogPostTemplate
      title={blogData?.title?.text || ""}
      author={blogData?.author?.text || ""}
    />
  );
};

export default PrismicBlogPostPage;
