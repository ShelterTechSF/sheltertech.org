import { graphql, PageProps } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import React from "react";
import BaseHead from "../../components/BaseHead";
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
      _previewable
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
                richText
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

export const PrismicBlogPostPage = ({
  data,
}: PageProps<Queries.PrismicBlogPostQuery>) => {
  if (!data?.prismicBlogPost?.data) return <h1>There was a problem</h1>;
  const blogData = data.prismicBlogPost.data;
  const slices = blogData?.body ?? [];
  const topicDocument = blogData?.topic?.document;

  return (
    <BlogPostTemplate
      title={blogData?.title?.text ?? undefined}
      author={blogData?.author?.text ?? undefined}
      topic={
        topicDocument && "data" in topicDocument
          ? topicDocument.data?.name?.text ?? undefined
          : undefined
      }
      date={blogData?.publish_date ?? undefined}
      headerImgAlt={blogData?.header_image?.alt ?? undefined}
      headerImgUrl={blogData?.header_image?.url ?? undefined}
      slices={slices}
    />
  );
};

export default withPrismicPreview(PrismicBlogPostPage);

export const Head = ({
  data,
  location,
}: PageProps<Queries.PrismicBlogPostQuery>) => {
  if (!data?.prismicBlogPost?.data)
    return <BaseHead title="There was a problem | ShelterTech" />;
  const blogData = data.prismicBlogPost.data;
  const title = blogData?.title?.text ?? undefined;
  const headerImgUrl = blogData?.header_image?.url ?? undefined;
  return (
    <>
      <BaseHead title={title ? `${title} | ShelterTech` : null} />
      {title && <meta property="og:title" content={title} />}
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={`https://sheltertech.org${location.pathname}`}
      />
      <meta
        name="twitter:card"
        content={headerImgUrl ? "summary_large_image" : "summary"}
      />
      {headerImgUrl && <meta property="og:image" content={headerImgUrl} />}
    </>
  );
};
