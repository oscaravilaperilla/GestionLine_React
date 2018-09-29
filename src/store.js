
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import firebase from 'firebase';
import promiseMiddleware from 'redux-promise-middleware';
import { loadingBarMiddleware } from 'react-redux-loading-bar'

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCsz8Dj5RIHeISFRkWwJcKJSEgsgjMxyNY",
  authDomain: "employees-86ecc.firebaseapp.com",
  databaseURL: "https://employees-86ecc.firebaseio.com",
  projectId: "employees-86ecc",
  storageBucket: "employees-86ecc.appspot.com",
  messagingSenderId: "1016214655529",
  timestampsInSnapshots: true
}
firebase.initializeApp(firebaseConfig);

export default function configureStore(initialState = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk, promiseMiddleware(),loadingBarMiddleware(),
    )));
  return store;
}