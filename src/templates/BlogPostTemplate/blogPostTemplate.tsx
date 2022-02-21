import React from "react";
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

  return (
    <Layout>
      <Spacer heightDesktop="80px" heightMobile="80px" />
      <TitleBlock
        topic={topic}
        title={title}
        dateAuthorString={dateAuthorString}
      />
      {headerImgUrl && headerImgAlt && (
        <>
          <Spacer heightDesktop="50px" heightMobile="50px" />
          <ImageBlock url={headerImgUrl} caption={headerImgAlt} />
          <Spacer heightDesktop="50px" heightMobile="50px" />
        </>
      )}
      {/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return */}
      {slices &&
        slices.length > 0 &&
        slices.map((slice) => {
          switch (slice.slice_type) {
            case "text_block":
              return <TextBlock rawText={slice.primary.body_text.raw} />;
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
                <>
                  <Spacer heightDesktop="50px" heightMobile="50px" />
                  <QuoteBlock
                    quote={slice.primary.quote.text}
                    attributee={slice.primary.attributee.text}
                  />
                  <Spacer heightDesktop="50px" heightMobile="50px" />
                </>
              );
            case "stats_block":
              return (
                <>
                  <Spacer heightDesktop="50px" heightMobile="50px" />
                  <StatsBlock
                    statistic={slice.primary.statistic.text}
                    statisticText={slice.primary.statistic_text.text}
                  />
                  <Spacer heightDesktop="50px" heightMobile="50px" />
                </>
              );
            case "image_with_caption":
              return (
                slice.primary.image.url &&
                slice.primary.caption.text && (
                  <>
                    <Spacer heightDesktop="50px" heightMobile="50px" />
                    <ImageBlock
                      url={slice.primary.image.url}
                      caption={slice.primary.caption.text}
                    />
                    <Spacer heightDesktop="50px" heightMobile="50px" />
                  </>
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
                  <Spacer heightDesktop="80px" heightMobile="80px" />
                  <LogoSeparator />
                  <Spacer heightDesktop="80px" heightMobile="80px" />
                </>
              );
            default:
              return null;
          }
        })}
    </Layout>
  );
};

export default BlogPostTemplate;
