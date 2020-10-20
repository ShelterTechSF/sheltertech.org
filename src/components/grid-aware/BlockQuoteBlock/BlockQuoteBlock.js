import PropTypes from "prop-types";
import React from "react";
import s from "./BlockQuoteBlock.module.css";

const BlockQuoteBlock = ({ quote, author }) => {
  const GridAreaMiddle = () => (
    <div className={s.gridAreaMiddle}>
      <div className={s.quote}>{quote}</div>
      <br />
      <div className={s.author}>{author}</div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <GridAreaMiddle />
      </div>
    </div>
  );
};

BlockQuoteBlock.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BlockQuoteBlock;
