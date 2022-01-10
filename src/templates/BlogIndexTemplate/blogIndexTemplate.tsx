import { graphql, PageProps } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

import BlogPostSummaryCard from "../../components/blog/BlogPostSummaryCard";
import Pagination from "../../components/blog/Pagination";
import TopicFilterMenu from "../../components/blog/TopicFilterMenu";
import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import Spacer from "../../components/grid-aware/Spacer";
import TextHeader from "../../components/grid-aware/TextHeader";
import Layout from "../../components/layout";
import articleSpotlightImage from "../../pages/images/laura-barerra-vera-cropped.png";

export const query = graphql`
  query BlogIndexPage(
    $limit: Int!
    $skip: Int!
    $filter: PrismicBlogPostFilterInput
  ) {
    allPrismicBlogPost(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: data___publish_date }
      filter: $filter
    ) {
      nodes {
        url
        data {
          publish_date
          title {
            text
          }
          author {
            text
          }
          header_image {
            alt
            url
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
          body {
            ... on PrismicBlogPostDataBodyTextBlock {
              id
              primary {
                body_text {
                  text
                }
              }
            }
          }
        }
      }
    }
    allPrismicBlogPostTopic {
      nodes {
        data {
          name {
            text
          }
        }
        uid
      }
    }
  }
`;

type BlogIndexPageContext = {
  limit: number; // Number of posts to display on the page
  skip: number; // Number of posts to skip before the first post on this page
  currentPage: number; // Current page number (0-indexed)
  totalPages: number; // Total number of pages
  basePageURL: string; // Base URL for pages; can append "/<pageNumber>" to construct full URL
  filter: GatsbyTypes.PrismicBlogPostTopicFilterInput | null;
  topic: string | null; // Active topic, or null when all topics are shown
};

export default ({
  data,
  pageContext,
}: PageProps<GatsbyTypes.BlogIndexPageQuery, BlogIndexPageContext>) => {
  const topics = data.allPrismicBlogPostTopic.nodes.map((topic) => ({
    name: topic.data?.name?.text,
    uid: topic.uid,
  }));
  const posts = data.allPrismicBlogPost.nodes.map((post) => ({
    url: post.url,
    title: post.data?.title?.text,
    topic: post.data?.topic?.document?.data?.name?.text,
    body: post.data?.body?.[0]?.primary?.body_text?.text,
    date: post.data?.publish_date,
    author: post.data?.author?.text,
    image: post.data?.header_image,
  }));
  return (
    <Layout>
      <Helmet>
        <title>Stories | ShelterTech</title>
      </Helmet>
      <TextHeader
        title="ShelterTech Stories"
        description="The official blog of ShelterTech, an all-volunteer non-profit creating technology for people experiencing homelessness. Made with love in SF."
        large
      />
      <TopicFilterMenu topics={topics} activeTopic={pageContext.topic} />
      {posts.map((post) => (
        <BlogPostSummaryCard
          key={post.url}
          url={post.url}
          title={post.title}
          topic={post.topic}
          body={post.body}
          date={post.date}
          author={post.author}
          image={post.image}
        />
      ))}
      <Pagination
        baseURL={pageContext.basePageURL}
        currentPage={pageContext.currentPage}
        totalPages={pageContext.totalPages}
      />
      <ArticleSpotlightCard
        eyebrowText="Volunteer Spotlight"
        title="Laura Barrera-Vera"
        subtitle="Program Manager, SF Service Guide"
        description="I moved to San Francisco in 2019 and immediately decided to join ShelterTech as I felt compelled to take action to address the worsening homelessness crisis. As Product Lead, I have focused on managing product development and on improving collaboration across all key teams to ensure we build an impactful product."
        button={{
          text: "Read More",
          externalLink:
            "https://medium.com/shelter-tech/volunteer-spotlight-laura-barrera-vera-41594cfbbe7b",
        }}
        backgroundImage={articleSpotlightImage}
      />
      <Spacer heightDesktop="170px" heightMobile="80px" />
    </Layout>
  );
};
