import { Link } from "gatsby";
import React from "react";

import * as s from "./BlogPostSummaryCard.module.css";

type BlogPostSummaryCardProps = {
  url?: string;
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
  url,
  title,
  topic,
  body,
  date,
  author,
  image,
}: BlogPostSummaryCardProps) => {
  const formattedDate =
    date &&
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  const authorDate = [formattedDate, author].filter((x) => x).join(" - ");
  return (
    <div className={s.bleedWrapper}>
      <div className={s.gridParent}>
        <div className={s.gridAreaTopSpacing} />
        <div className={s.gridAreaImage}>
          <div className={s.imageWrapper}>
            {/*
              There's a bug in eslint-plugin-jsx-a11y that causes the ?. syntax to be
              treated like a string, so we silence this false positive. See
              https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/755
            */}
            {image?.url /* eslint-disable-next-line jsx-a11y/img-redundant-alt */ && (
              <img className={s.image} src={image.url} alt={image?.alt} />
            )}
          </div>
        </div>
        <div className={s.gridAreaText}>
          <div className={s.topic}>{topic}</div>
          <Link className={s.title} to={url ?? ""}>
            {title}
          </Link>
          <p className={s.body}>{body}</p>
          <div className={s.authorDate}>{authorDate}</div>
        </div>
        <div className={s.gridAreaBottomSpacing} />
      </div>
    </div>
  );
};
export default BlogPostSummaryCard;
