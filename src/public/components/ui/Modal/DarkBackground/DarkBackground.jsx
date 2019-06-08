import React from 'react';

import css from './darkBackground.module.sass';

const DarkBackground = ({ children }) => (
  <div className={css.darkBackground}>{children}</div>
);

export default DarkBackground;
