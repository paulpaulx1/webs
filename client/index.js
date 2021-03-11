import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './app';

import {createMemoryHistory, createBrowserHistory} from 'history'

const history =
  process.env.NODE_ENV === 'test'
    ? createMemoryHistory()
    : createBrowserHistory()

export default history

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
);
