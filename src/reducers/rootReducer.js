/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
import userReducer from './userReducer';
import relativeReducer from './relativeReducer';
import commonReducer from './commonReducer';
import {reducer as burgerMenu} from 'redux-burger-menu';
import {reducer as toastrReducer} from 'react-redux-toastr';

export default combineReducers({
 simpleReducer,
 user: userReducer,
 relatives: relativeReducer,
 common: commonReducer,
 loadingBar: loadingBarReducer,
 burgerMenu,
 toastr: toastrReducer,

});