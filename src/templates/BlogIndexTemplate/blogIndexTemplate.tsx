import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

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

type TopicFilterMenuProps = {
  activeTopic: string | null;
  topics: {
    name?: string;
    uid: string;
  }[];
};
const TopicFilterMenu = ({ activeTopic, topics }: TopicFilterMenuProps) => {
  const items = [{ name: "All Topics", uid: null }, ...topics];
  return (
    <ul>
      {items.map((topic) => (
        <li>
          {topic.uid === activeTopic ? (
            topic.name
          ) : (
            <Link to={topic.uid ? `/blog/${topic.uid}` : "/blog"}>
              {topic.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

type BlogPostSummaryCardProps = {
  title?: string;
  topic?: string;
  body?: string;
  date?: string;
  author?: string;
  image?: {
    url?: string;
    alt?: string;
  };
};
const BlogPostSummaryCard = ({
  title,
  topic,
  body,
  date,
  author,
  image,
}: BlogPostSummaryCardProps) => {
  return (
    <div>
      <div>{topic}</div>
      <h2>{title}</h2>
      <div>{body}</div>
      <div>
        {date} - {author}
      </div>
      {/*
        There's a bug in eslint-plugin-jsx-a11y that causes the ?. syntax to be
        treated like a string, so we silence this false positive. See
        https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/755
      */}
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <div>{image?.url && <img src={image.url} alt={image?.alt} />}</div>
    </div>
  );
};

type PageNavigationProps = {
  baseURL: string;
  currentPage: number;
  totalPages: number;
};
const PageNavigation = ({
  baseURL,
  currentPage,
  totalPages,
}: PageNavigationProps) => {
  const urlForPage = (pageNumber: number) =>
    pageNumber === 0 ? baseURL : `${baseURL}/${pageNumber + 1}`;
  return (
    <ul>
      {Array.from({ length: totalPages }).map((_, pageNumber) => (
        <li>
          {pageNumber === currentPage ? (
            pageNumber + 1
          ) : (
            <Link to={urlForPage(pageNumber)}>{pageNumber + 1}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

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
      />
      <TopicFilterMenu topics={topics} activeTopic={pageContext.topic} />
      {posts.map((post) => (
        <BlogPostSummaryCard
          title={post.title}
          topic={post.topic}
          body={post.body}
          date={post.date}
          author={post.author}
          image={post.image}
        />
      ))}
      <PageNavigation
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
