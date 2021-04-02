import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import * as React from "react";

import "pure-react-carousel/dist/react-carousel.es.css";
import s from "./BlockQuoteBlock.module.css";

type SlideQuoteProps = {
  quote: string;
  attribution: string;
};

const SlideQuote = ({ quote, attribution }: SlideQuoteProps) => (
  <figure className={s.slideQuote}>
    <blockquote className={s.quote}>&ldquo;{quote}&rdquo;</blockquote>
    <figcaption className={s.attribution}>&mdash;{attribution}</figcaption>
  </figure>
);

type BlockQuoteBlockProps = {
  quotes: SlideQuoteProps[];
};

const BlockQuoteBlock = ({ quotes }: BlockQuoteBlockProps) => (
  <div className={s.bleedWrapper}>
    <div className={s.carouselWrapper}>
      <CarouselProvider
        totalSlides={quotes.length}
        isIntrinsicHeight
        isPlaying
        interval={10000}
        naturalSlideHeight={0}
        naturalSlideWidth={0}
      >
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

export default BlockQuoteBlock;
