import * as React from "react";
import * as s from "./TitleBlock.module.css";

type TitleBlockProps = {
  topic?: string;
  title?: string;
  dateAuthorString?: string;
};

const TitleBlock = ({ topic, title, dateAuthorString }: TitleBlockProps) => (
  <div className={s.wrapper}>
    {topic && <div className={s.topic}>{topic}</div>}
    {title && <h1 className={s.title}>{title}</h1>}
    {dateAuthorString && <div className={s.dateAuthor}>{dateAuthorString}</div>}
  </div>
);

export default TitleBlock;
