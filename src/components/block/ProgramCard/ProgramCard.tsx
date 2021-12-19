import * as React from "react";
import * as s from "./ProgramCard.module.css";

export type ProgramCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};

const ProgramCard = ({
  image,
  imageAlt,
  title,
  description,
}: ProgramCardProps) => (
  <div className={s.programCardContainer}>
    <div>
      <img className={s.img} src={image} alt={imageAlt} />
    </div>
    <div className={s.title}>{title}</div>
    <div className={s.description}>{description}</div>
  </div>
);

export default ProgramCard;
