import PropTypes from "prop-types";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import React from "react";

import "pure-react-carousel/dist/react-carousel.es.css";
import s from "./BlockQuoteBlock.module.css";

const BlockQuoteBlock = ({ quotes }) => {
  const Carousel = () => (
    <CarouselProvider totalSlides={quotes.length} isIntrinsicHeight>
      <Slider>
        {quotes.map((dataObj, index) => (
          <Slide index={index} key={dataObj.quote}>
            <figure className={s.innerWrapper}>
              <blockquote className={s.quote}>
                &ldquo;{dataObj.quote}&rdquo;
              </blockquote>
              <figcaption className={s.attribution}>
                &mdash;{dataObj.attribution}
              </figcaption>
            </figure>
          </Slide>
        ))}
      </Slider>
      <DotGroup className={s.dots} />
    </CarouselProvider>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.gridParent}>
          <Carousel />
      </div>
    </div>
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
