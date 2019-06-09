import React from 'react';

import css from './darkBackground.module.sass';

const DarkBackground = ({ onClose, children }) => (
  <div className={css.bg} onClick={onClose}>{children}</div>
);

export default DarkBackground;
