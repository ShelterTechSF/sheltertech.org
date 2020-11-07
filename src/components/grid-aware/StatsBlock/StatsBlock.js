import PropTypes from "prop-types";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import React from "react";

import "pure-react-carousel/dist/react-carousel.es.css";
import s from "./StatsBlock.module.css";

const StatsBlock = ({ title, percentAndStatement }) => {
  const Title = () => (
      <h1 className={s.title}>{title}</h1>

  )

  const PercentAndStatement = () => (
    <div className={s.gridAreaBottom}>
       {percentAndStatement.map((obj) => (
        <div>
          <div className={s.percent}>{obj.percent}</div>
          <div className={s.statement}>{obj.statement}</div>
        </div>
        ))}
    </div>
  )

  return (
    <div className={s.bleedWrapper}>
    <div className={s.bleedMainContent}>
      <section className={s.gridParent}>
        <div className={s.allTextWrap}>
          <Title/>
          <PercentAndStatement/>
        </div>
      </section>
    </div>
  </div>
  );
};

const percentAndStatement = PropTypes.shape({
  percent: PropTypes.string.isRequired,
  statement: PropTypes.string.isRequired,
});
StatsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  percentAndStatement: PropTypes.arrayOf(percentAndStatement).isRequired,
};

export default StatsBlock;

