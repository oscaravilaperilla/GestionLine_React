import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppRoutes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <Provider store={configureStore()}>
   <AppRoutes />
  </Provider>,
  document.getElementById('root')
)
