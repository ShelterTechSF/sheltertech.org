import React from "react";
import ButtonBlock from "../../components/blog/ButtonBlock";
import ImageBlock from "../../components/blog/ImageBlock";
import QuoteBlock from "../../components/blog/QuoteBlock";
import StatsBlock from "../../components/blog/StatsBlock";
import TextBlock from "../../components/blog/TextBlock";
import LogoSeparator from "./LogoSeparator.svg";

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
  // returns either date or author, or if both are given "date - author"
  const getDateAuthorString = (): string | null => {
    if (!date && !author) {
      return null;
    }
    if (date) {
      const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return author ? `${formattedDate} - ${author}` : formattedDate;
    }
    return author || null;
  };

  const dateAuthorString = getDateAuthorString();

  return (
    <div>
      <div>
        {topic && <p>{topic}</p>}
        {title && <h1>{title}</h1>}
        {dateAuthorString && <p>{dateAuthorString}</p>}
      </div>
      {headerImgUrl && headerImgAlt && (
        <ImageBlock url={headerImgUrl} caption={headerImgAlt} isFullWidth />
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
                <img src={LogoSeparator} />
              );
            default:
              return null;
          }
        })}
    </div>
  );
};

export default BlogPostTemplate;
