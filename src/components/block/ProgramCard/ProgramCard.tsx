import * as React from "react";
import * as s from "./ProgramCard.module.css";

type ProgramCardProps = {
  theme: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};

const ProgramCard = ({
  theme,
  image,
  imageAlt,
  title,
  description,
}: ProgramCardProps) => (
  <div
    className={`${s.programCardContainer} 
    ${theme === "light" ? s.light : s.dark}`}
  >
    <div>
      <img className={s.img} src={image} alt={imageAlt} />
    </div>
    <div className={s.title}>{title}</div>
    <div className={s.description}>{description}</div>
  </div>
);

export default ProgramCard;
