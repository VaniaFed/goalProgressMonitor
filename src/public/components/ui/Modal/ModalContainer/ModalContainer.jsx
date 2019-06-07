import React from 'react';
import DarkBackground from '../DarkBackground/DarkBackground';
import css from './modalContainer.module.sass';

const ModalContainer = ({ children }) => (
  <DarkBackground>
    <div className={css.container}>
      {children}
    </div>
  </DarkBackground>
);

export default ModalContainer;
