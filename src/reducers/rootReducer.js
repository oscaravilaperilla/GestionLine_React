/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
 simpleReducer,
 loadingBar: loadingBarReducer,
});