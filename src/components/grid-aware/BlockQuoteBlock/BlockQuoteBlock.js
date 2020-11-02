import Carousel from "nuka-carousel";
import PropTypes from "prop-types";
import React from "react";
import s from "./BlockQuoteBlock.module.css";

const BlockQuoteBlock = ({ quote, attribution }) => {
  const quotes = [
    { quote: "ShelterTech, Welcomes You!", attribution: "Richard Xia" },
    { quote: "Please Donate!", attribution: "David Agustin" },
    { quote: "Happy Holidays", attribution: "Candy Wang" },
  ];

  return (
    <Carousel
      renderCenterLeftControls={function () {}}
      renderCenterRightControls={function () {}}
    >
      <div className={s.bleedWrapper}>
        <div className={s.bleedMainContent}>
          <div className={s.gridAreaMiddle}>
            <figure>
              <blockquote className={s.quote}>&quot;{quote}&quot;</blockquote>
              <figcaption className={s.attribution}>
                &mdash;{attribution}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className={s.bleedWrapper}>
        <div className={s.bleedMainContent}>
          <div className={s.gridAreaMiddle}>
            <figure>
              <blockquote className={s.quote}>&quot;{quotes[0].quote}&quot;</blockquote>
              <figcaption className={s.attribution}>
                &mdash;{quotes[0].attribution}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className={s.bleedWrapper}>
        <div className={s.bleedMainContent}>
          <div className={s.gridAreaMiddle}>
            <figure>
              <blockquote className={s.quote}>&quot;{quotes[1].quote}&quot;</blockquote>
              <figcaption className={s.attribution}>
                &mdash;{quotes[1].attribution}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className={s.bleedWrapper}>
        <div className={s.bleedMainContent}>
          <div className={s.gridAreaMiddle}>
            <figure>
              <blockquote className={s.quote}>&quot;{quotes[2].quote}&quot;</blockquote>
              <figcaption className={s.attribution}>
                &mdash;{quotes[2].attribution}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

BlockQuoteBlock.propTypes = {
  quote: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
};

export default BlockQuoteBlock;
