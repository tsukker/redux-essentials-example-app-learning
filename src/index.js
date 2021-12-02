import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { worker } from './api/server';
import App from './App';
import store from './app/store';
import './index.css';

// Start our mock API server
worker.start({ onUnhandledRequest: 'bypass' });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
