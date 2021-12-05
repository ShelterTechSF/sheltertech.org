import { graphql, PageProps } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import Spacer from "../../components/grid-aware/Spacer";
import TextHeader from "../../components/grid-aware/TextHeader";
import Layout from "../../components/layout";
import articleSpotlightImage from "../images/laura-barerra-vera-cropped.png";

export const query = graphql`
  query BlogIndexPage {
    allPrismicBlogPost(
      limit: 5
      sort: { order: DESC, fields: data___publish_date }
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
  }
`;

type TopicFilterMenuProps = {
  topics: string[];
};
const TopicFilterMenu = ({ topics }: TopicFilterMenuProps) => {
  return (
    <ul>
      <li>All Topics</li>
      {topics.map((topic) => (
        <li>{topic}</li>
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

export default ({ data }: PageProps<GatsbyTypes.BlogIndexPageQuery>) => {
  const topics = [
    "ShelterConnect",
    "SF Service Guide",
    "Volunteer Spotlights",
    "Community Stories",
  ];
  const posts = data.allPrismicBlogPost.nodes.map((post) => ({
    title: post.data?.title?.text,
    topic: "PLACEHOLDER TOPIC",
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
      <TopicFilterMenu topics={topics} />
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
