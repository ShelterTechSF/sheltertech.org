import PropTypes from "prop-types";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import React from "react";

import "pure-react-carousel/dist/react-carousel.es.css";
import s from "./BlockQuoteBlock.module.css";

const CarouselPropType = PropTypes.shape({
  quote: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
});

const SlideQuote = ({ quote, attribution }) => (
  <figure className={s.slideQuote}>
    <blockquote className={s.quote}>&ldquo;{quote}&rdquo;</blockquote>
    <figcaption className={s.attribution}>&mdash;{attribution}</figcaption>
  </figure>
);

SlideQuote.propTypes = {
  quote: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
};

const BlockQuoteBlock = ({ quotes }) => (
  <div className={s.bleedWrapper}>
    <div className={s.carouselWrapper}>
      <CarouselProvider totalSlides={quotes.length} isIntrinsicHeight isPlaying={true} interval="10000">
        <Slider>
          {quotes.map(({ quote, attribution }, index) => (
            <Slide index={index} key={quote}>
              <SlideQuote quote={quote} attribution={attribution} />
            </Slide>
          ))}
        </Slider>
        <DotGroup className={s.dots} />
      </CarouselProvider>
    </div>
  </div>
);

BlockQuoteBlock.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape(SlideQuote.propTypes)).isRequired,
};

export default BlockQuoteBlock;
