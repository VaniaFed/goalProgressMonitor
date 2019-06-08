import React from 'react';

import DarkBackground from '../DarkBackground/DarkBackground';
import css from './modalContainer.module.sass';

const ModalContainer = ({ children, onClose }) => (
  <div>
    <DarkBackground />
    <div className={css.container}>
      <button type="button" className={css.close} onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 64 64">
          <path fill="#1D1D1B" d="M28.94 31.79L.61 60.1a2.01 2.01 0 1 0 2.85 2.85L32 34.42l28.54 28.54a2 2 0 0 0 2.85 0c.79-.78.79-2.06 0-2.85L35.06 31.8 63.41 3.44A2.01 2.01 0 1 0 60.56.59L32 29.15 3.44.59A2.01 2.01 0 0 0 .6 3.44l28.35 28.35z"/>
        </svg>
      </button>
      {children}
    </div>
  </div>
);

export default ModalContainer;
