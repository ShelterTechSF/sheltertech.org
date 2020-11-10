import PropTypes from "prop-types";
import React from "react";

import s from "./StatsBlock.module.css";
const StatCard = ({ number, statement }) => (
  <div>
    <div className={s.number}>{number}</div>
    <div className={s.statement}>{statement}</div>
  </div>
)

const StatsBlock = ({ title, numberAndStatement }) => (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <div className={s.allTextWrap}>
            <h1 className={s.title}>{title}</h1>
            <div className={s.gridAreaBottom}>
              {numberAndStatement.map((obj) => (
                <div key={obj.number}>
                  <StatCard number={obj.number} statement={obj.statement}/>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );

const numberAndStatement = PropTypes.shape({
  number: PropTypes.string.isRequired,
  statement: PropTypes.string.isRequired,
});
StatsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  numberAndStatement: PropTypes.arrayOf(numberAndStatement).isRequired,
};

export default StatsBlock;
