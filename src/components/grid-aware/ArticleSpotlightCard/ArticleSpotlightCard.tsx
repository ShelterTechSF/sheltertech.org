import * as React from "react";

import Button, { ButtonProps } from "../../inline/Button";

import s from "./ArticleSpotlightCard.module.css";

type TextCardProps = {
  eyebrowText: string;
  title: string;
  subtitle?: string;
  description: string;
  button: ButtonProps;
};

const TextCard = ({
  eyebrowText,
  title,
  subtitle,
  description,
  button,
}: TextCardProps) => (
  <div className={s.textCard}>
    <div className={s.eyebrow}>{eyebrowText}</div>
    <div className={s.title}>{title}</div>
    {subtitle && <div className={s.subtitle}>{subtitle}</div>}
    <div className={s.description}>{description}</div>
    <div className={s.actionRow}>
      <Button
        text={button.text}
        internalLink={button.internalLink}
        externalLink={button.externalLink}
        onClick={button.onClick}
      />
    </div>
  </div>
);

type ArticleSpotlightCardProps = {
  eyebrowText: string;
  title: string;
  subtitle?: string;
  description: string;
  button: ButtonProps;
  backgroundImage: string;
};

const ArticleSpotlightCard = ({
  eyebrowText,
  title,
  subtitle,
  description,
  button,
  backgroundImage,
}: ArticleSpotlightCardProps) => (
  <div className={s.bleedWrapper}>
    <div
      className={s.bleedBackground}
      style={{
        background: `center / cover no-repeat url("${backgroundImage}")`,
      }}
    />
    <div className={s.bleedMainContent}>
      <div className={s.gridParent}>
        <div className={s.gridAreaCard}>
          <div className={s.textCardWrapper}>
            <TextCard
              eyebrowText={eyebrowText}
              title={title}
              subtitle={subtitle}
              description={description}
              button={button}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ArticleSpotlightCard;
