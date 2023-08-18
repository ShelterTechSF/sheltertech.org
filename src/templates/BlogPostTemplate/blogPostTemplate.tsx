import React from "react";
import { Helmet } from "react-helmet";
import ButtonBlock from "../../components/blog/ButtonBlock";
import ImageBlock from "../../components/blog/ImageBlock";
import LogoSeparator from "../../components/blog/LogoSeparator";
import QuoteBlock from "../../components/blog/QuoteBlock";
import StatsBlock from "../../components/blog/StatsBlock";
import TextBlock from "../../components/blog/TextBlock";
import TitleBlock from "../../components/blog/TitleBlock";
import Spacer from "../../components/grid-aware/Spacer";
import Layout from "../../components/layout";

type BlogPostTemplateProps = {
  // The URL to this page, excluding the domain name. Should start with a
  // leading "/".
  pageUrl: string;
  topic?: string;
  title?: string;
  author?: string;
  date?: string;
  headerImgAlt?: string;
  headerImgUrl?: string;
  slices?: readonly any[];
};

/** The JSX template we render for each blog post. */
const BlogPostTemplate = ({
  pageUrl,
  topic,
  title,
  author,
  date,
  headerImgUrl,
  headerImgAlt,
  slices,
}: BlogPostTemplateProps) => {
  const formattedDate =
    date &&
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  // date or author, or if both exist, "date - author"
  const dateAuthorString = [formattedDate, author].filter((x) => x).join(" - ");

  const getBlockComponent = (slice: any): React.ReactNode => {
    /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return */
    switch (slice.slice_type) {
      case "text_block":
        return <TextBlock rawText={slice.primary.body_text.richText} />;
      case "file_download_block":
        return (
          <ButtonBlock
            header={slice.primary.file_download_header.text}
            url={slice.primary.file.url}
            buttonText={slice.primary.button_text.text}
            isExternalLink
          />
        );
      case "quote_block":
        return (
          <QuoteBlock
            quote={slice.primary.quote.text}
            attributee={slice.primary.attributee.text}
          />
        );
      case "stats_block":
        return (
          <StatsBlock
            statistic={slice.primary.statistic.text}
            statisticText={slice.primary.statistic_text.text}
          />
        );
      case "image_with_caption":
        return (
          slice.primary.image.url &&
          slice.primary.caption.text && (
            <ImageBlock
              url={slice.primary.image.url}
              caption={slice.primary.caption.text}
            />
          )
        );
      case "cta_block":
        return (
          <ButtonBlock
            header={slice.primary.header.text}
            url={slice.primary.button_link.url}
            buttonText={slice.primary.button_text.text}
          />
        );
      case "separator":
        return (
          <>
            <Spacer heightDesktop="30px" heightMobile="30px" />
            <LogoSeparator />
            <Spacer heightDesktop="30px" heightMobile="30px" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Helmet>
        {title && <title>{title} | ShelterTech</title>}
        {title && <meta property="og:title" content={title} />}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://sheltertech.org${pageUrl}`} />
        <meta
          name="twitter:card"
          content={headerImgUrl ? "summary_large_image" : "summary"}
        />
        {headerImgUrl && <meta property="og:image" content={headerImgUrl} />}
      </Helmet>
      <Spacer heightDesktop="80px" heightMobile="50px" />
      <TitleBlock
        topic={topic}
        title={title}
        dateAuthorString={dateAuthorString}
      />
      {headerImgUrl && headerImgAlt && (
        <>
          <Spacer heightDesktop="50px" heightMobile="30px" />
          <ImageBlock url={headerImgUrl} caption={headerImgAlt} />
        </>
      )}
      {/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return */}
      {slices &&
        slices.length > 0 &&
        slices.map((slice) => {
          return (
            <>
              <Spacer heightDesktop="50px" heightMobile="30px" />
              {getBlockComponent(slice)}
            </>
          );
        })}
      <Spacer heightDesktop="50px" heightMobile="30px" />
    </Layout>
  );
};

export default BlogPostTemplate;
