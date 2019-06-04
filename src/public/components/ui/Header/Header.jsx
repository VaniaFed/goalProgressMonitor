import React from 'react'
import Nav from './Nav/Nav'
import css from './header.module.sass'

const Header = () => {
  return (
    <div className={css.header}>
      <div className={`container ${css.headerInner}`}>
        <h1 className="logo">Test yourself</h1>
        <Nav />
      </div>
    </div>
  )
}

export default Header
