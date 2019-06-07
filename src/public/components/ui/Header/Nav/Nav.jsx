import React from 'react';

import css from './nav.module.sass';

const Nav = () => (
  <nav className={css.nav}>
    <li className={css.item}>
      <a href="/main">Main</a>
    </li>
  </nav>
);

export default Nav;
