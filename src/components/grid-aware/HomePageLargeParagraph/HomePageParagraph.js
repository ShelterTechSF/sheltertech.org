import PropTypes from "prop-types";
import React from "react";

import s from "./HomePageParagraph.module.css";

const HomePageParagraphPropType = PropTypes.shape({
  text: PropTypes.string.isRequired
});

const HomePageParagraphBlock = ({ text }) => (
  <div>
    <p className={s.text}>{text}</p>
  </div>
)

HomePageParagraphBlock.propTypes = {
  text: PropTypes.string.isRequired,
};

const HomePageParagraph = ({
  text
}) => {

  const GridAreaMiddle = () => (
    <div className={s.gridAreaMiddle}>
        <HomePageParagraphBlock
          text={text}
        />
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridAreaMiddle />
        </section>
      </div>
    </div>
  );
};

HomePageParagraph.propTypes = {
  text: HomePageParagraphPropType.isRequired,
};

export default HomePageParagraph;

