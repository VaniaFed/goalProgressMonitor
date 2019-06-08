import React from 'react';

import DarkBackground from '../DarkBackground/DarkBackground';
import css from './modalContainer.module.sass';

const ModalContainer = ({ children }) => (
  <div>
    <DarkBackground />
    <div className={css.container}>
      {children}
    </div>
  </div>
);

export default ModalContainer;
