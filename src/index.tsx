import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers/App';

import 'sanitize.css';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('js-root') as HTMLElement,
);
