import React from 'react';
import Section from './common/Section/Section';

const ControlButtons = ({ showModalCreateCategory, showModalCreateTopic }) => (
  <Section>
    <div className="container">
      <h2 className="title1">Управление</h2>
      <button type="button" onClick={showModalCreateCategory} className="buttonDefault btn btn-light">Add category</button>
      <button type="button" onClick={showModalCreateTopic} className="buttonDefault btn btn-light">Add topic</button>
    </div>
  </Section>
);

export default ControlButtons;
