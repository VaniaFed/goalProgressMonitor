import React from 'react'
import css from './control.module.sass'

const Control = () => {
  return (
    <div className={css.control}>
      <button className="btn btn-light">+</button>
      <input className={css.inputValue} type="number" />
      <button className="btn btn-light">-</button>
    </div>
  )
}

export default Control
