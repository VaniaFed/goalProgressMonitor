import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../stylesheet/based.sass'

render(
  <App />,
  document.querySelector('#app')
)
