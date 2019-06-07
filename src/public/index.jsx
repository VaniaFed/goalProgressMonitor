import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import GoalManagerModel from './models/goalManagerModel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../stylesheet/based.sass';

const store = new GoalManagerModel();
render(
  <App store={store} />,
  document.querySelector('#app'),
);
