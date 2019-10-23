import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Suspense fallback="Loading...">
    <App />
  </Suspense>,
  document.getElementById('root')
);
