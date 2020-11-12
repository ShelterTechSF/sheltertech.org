import PropTypes from "prop-types";
import React from "react";

import s from "./StatsBlock.module.css";

const StatCard = ({ number, statement }) => (
  <div className={s.statCard}>
    <div className={s.number}>{number}</div>
    <div className={s.statement}>{statement}</div>
  </div>
);

StatCard.propTypes = {
  number: PropTypes.string.isRequired,
  statement: PropTypes.string.isRequired,
};

const StatsBlock = ({ title, statCards }) => (
  <div className={s.bleedWrapper}>
    <div className={s.bleedMainContent}>
      <section className={s.gridParent}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.gridAreaBottom}>
          {statCards.map(({ number, statement }) => (
            <StatCard key={statement} number={number} statement={statement} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

StatsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  statCards: PropTypes.arrayOf(PropTypes.shape(StatCard.propTypes))
    .isRequired,
};

export default StatsBlock;
