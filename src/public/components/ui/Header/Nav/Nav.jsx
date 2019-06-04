import React from 'react'
import css from './nav.module.sass'

const Nav = () => {
  return (
    <nav className={css.nav}>
      <li className={css.item}><a href="#">Тесты</a></li>
      <li className={css.item}><a href="#">Новый тест</a></li>
      <li className={css.item}><a href="#">FAQ</a></li>
    </nav>
  )
}

export default Nav
