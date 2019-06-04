import React from 'react'
import css from './control.module.sass'

const Control = ({ currentValue, onIncrease, onDecrease }) => {
  return (
    <div className={css.control}>
      <button className="btn btn-light" onClick={onIncrease}>+</button>
      <input className={css.inputValue} type="number" value={currentValue} defaultValue={currentValue} />
      <button className="btn btn-light" onClick={onDecrease}>-</button>
    </div>
  )
}

export default Control
