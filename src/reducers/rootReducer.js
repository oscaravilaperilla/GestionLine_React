/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
import userReducer from './userReducer';
import commonReducer from './commonReducer';
import {reducer as burgerMenu} from 'redux-burger-menu';
import {reducer as toastrReducer} from 'react-redux-toastr';

export default combineReducers({
 simpleReducer,
 user: userReducer,
 common: commonReducer,
 loadingBar: loadingBarReducer,
 burgerMenu,
 toastr: toastrReducer,

});