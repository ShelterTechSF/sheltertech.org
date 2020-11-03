import Carousel from "nuka-carousel";
import PropTypes from "prop-types";
import React from "react";
import s from "./BlockQuoteBlock.module.css";

const BlockQuoteBlock = ({ quotes }) => {
  const quote = quotes.map(quote =>  
    <div className={s.bleedWrapper}>
    <div className={s.bleedMainContent}>
      <div className={s.gridAreaMiddle}>
        <figure>
          <blockquote >{quote.quote}</blockquote>
          <figcaption >
            &mdash;{quote.attribution}
          </figcaption>
        </figure>
      </div>
    </div>
  </div>   
)
  return (
    <Carousel
      renderCenterLeftControls={null}
      renderCenterRightControls={null}
    >
    {quote}
    </Carousel>
  );
};

const carouselData = PropTypes.shape({
  quote: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
});
BlockQuoteBlock.propTypes = {
  quotes: PropTypes.arrayOf(carouselData).isRequired,
};

export default BlockQuoteBlock;
