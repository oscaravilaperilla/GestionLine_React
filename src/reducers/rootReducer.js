/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
import userReducer from './userReducer';

export default combineReducers({
 simpleReducer,
 user: userReducer,
 loadingBar: loadingBarReducer,
});