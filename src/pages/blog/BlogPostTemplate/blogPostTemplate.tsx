import React from "react";

type BlogPostTemplateProps = {
  title: String;
  author: String;
};

/** The JSX template we render for each blog post. */
const BlogPostTemplate = ({ title, author }: BlogPostTemplateProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
    </div>
  );
};

export default BlogPostTemplate;
