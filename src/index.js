import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppRoutes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as  userActions from './actions/userAction';

const store = configureStore();
store.dispatch(userActions.verifyAuth());


render(
  <Provider store={store}>
   <AppRoutes  />
  </Provider>,
  document.getElementById('root')
)
