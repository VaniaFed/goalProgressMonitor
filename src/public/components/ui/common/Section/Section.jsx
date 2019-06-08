import React from 'react';
import css from './section.module.sass';

const Section = ({ children }) => (
  <section className={css.section}>{children}</section>
);

export default Section;
