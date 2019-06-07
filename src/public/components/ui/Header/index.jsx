import React from 'react';

import Nav from './Nav/Nav';
import css from './header.module.sass';

const Header = () => (
  <div className={css.header}>
    <div className={`container ${css.headerInner}`}>
      <h1 className={css.logo}><a href="/main">Aims and Goals</a></h1>
      <Nav />
    </div>
  </div>
);

export default Header;
