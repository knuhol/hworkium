import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import createPersistentStore from './store';
import App from './App';

import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

const { store, persistor } = createPersistentStore();

ReactDOM.render(
  <Suspense fallback="Loading...">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
