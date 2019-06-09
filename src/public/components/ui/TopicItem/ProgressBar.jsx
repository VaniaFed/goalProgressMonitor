import React from 'react';
import css from './topicItem.module.sass';

const ProgressBar = ({ current, finish, currentPercent }) => (
  <div className={css.progressContainer}>
    <div className={`progress ${css.progress}`}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${currentPercent}%` }}
        aria-valuenow={currentPercent}
        aria-valuemin="0"
        aria-valuemax="100"
      />
      <div className={css.info}>
        <h5 className={css.percent}>{`${currentPercent}%`}</h5>
        <p className={css.ratio}>
          {current}
          /
          {finish}
        </p>
      </div>
    </div>
  </div>
);

export default ProgressBar;
