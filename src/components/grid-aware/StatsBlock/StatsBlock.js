import PropTypes from "prop-types";
import React from "react";

import s from "./StatsBlock.module.css";

const StatsBlock = ({ title, numberAndStatement }) => {
  const Title = () => <h1 className={s.title}>{title}</h1>;

  const NumberAndStatement = () => (
    <div className={s.gridAreaBottom}>
      {numberAndStatement.map((obj) => (
        <div>
          <div className={s.number}>{obj.number}</div>
          <div className={s.statement}>{obj.statement}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <div className={s.allTextWrap}>
            <Title />
            <NumberAndStatement />
          </div>
        </section>
      </div>
    </div>
  );
};

const numberAndStatement = PropTypes.shape({
  number: PropTypes.string.isRequired,
  statement: PropTypes.string.isRequired,
});
StatsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  numberAndStatement: PropTypes.arrayOf(numberAndStatement).isRequired,
};

export default StatsBlock;