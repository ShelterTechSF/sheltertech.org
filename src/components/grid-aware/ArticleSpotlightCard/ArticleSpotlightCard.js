import PropTypes from "prop-types";
import React from "react";

import Button from "../../inline/Button";

import s from "./ArticleSpotlightCard.module.css";

const TextCard = ({ eyebrowText, title, description, button }) => (
  <div className={s.textCard}>
    <div className={s.eyebrow}>{eyebrowText}</div>
    <div className={s.title}>{title}</div>
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

TextCard.propTypes = {
  eyebrowText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape(Button.propTypes).isRequired,
};

const ArticleSpotlightCard = ({
  eyebrowText,
  title,
  description,
  button,
  backgroundImage,
}) => (
  <div className={s.bleedWrapper}>
    <div
      className={s.bleedBackground}
      style={{
        background: `bottom / cover no-repeat url("${backgroundImage}")`,
      }}
    />
    <div className={s.bleedMainContent}>
      <div className={s.gridParent}>
        <div className={s.gridAreaCard}>
          <div className={s.textCardWrapper}>
            <TextCard
              eyebrowText={eyebrowText}
              title={title}
              description={description}
              button={button}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

ArticleSpotlightCard.propTypes = {
  eyebrowText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape(Button.propTypes).isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default ArticleSpotlightCard;
