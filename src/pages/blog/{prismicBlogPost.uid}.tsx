import { graphql, PageProps } from "gatsby";
import React from "react";
import BlogPostTemplate from "../../templates/BlogPostTemplate";

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
        topic {
          document {
            ... on PrismicBlogPostTopic {
              data {
                name {
                  text
                }
              }
            }
          }
        }
        publish_date
        body {
          ... on PrismicBlogPostDataBodyStatsBlock {
            slice_type
            primary {
              statistic {
                text
              }
              statistic_text {
                text
              }
            }
          }
          ... on PrismicBlogPostDataBodyImageWithCaption {
            primary {
              image {
                url
                alt
              }
              caption {
                text
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
            slice_type
          }
          ... on PrismicBlogPostDataBodyQuoteBlock {
            id
            primary {
              quote {
                text
              }
              attributee {
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyTextBlock {
            id
            primary {
              body_text {
                raw
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
              button_text {
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
  const slices = blogData?.body ?? [];

  return (
    <BlogPostTemplate
      title={blogData?.title?.text}
      author={blogData?.author?.text}
      topic={blogData?.topic?.document?.data?.name?.text}
      date={blogData?.publish_date}
      headerImgAlt={blogData?.header_image?.alt}
      headerImgUrl={blogData?.header_image?.url}
      slices={slices}
    />
  );
};

export default PrismicBlogPostPage;
