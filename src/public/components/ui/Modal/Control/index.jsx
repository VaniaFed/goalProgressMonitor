import React from 'react';
import PropTypes from 'prop-types';

import css from './control.module.sass';

const Control = ({ currentValue, onIncrease, onDecrease }) => (
  <div className={css.control}>
    <button type="button" className="btn btn-light" onClick={onIncrease}>+</button>
    <input className={css.inputValue} type="number" defaultValue={currentValue} />
    <button type="button" className="btn btn-light" onClick={onDecrease}>-</button>
  </div>
);
Control.propTypes = {
  currentValue: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default Control;
