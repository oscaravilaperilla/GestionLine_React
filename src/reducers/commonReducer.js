/*
 src/reducers/userReducer.js
*/
import * as types from '../actions/actionTypes';

const initialState = {
  searchEmployees: [],
  selectedEmployee: null,
  departments: [],
  levelsStudies: [],
  careers: [],
  universities : [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_EMPLOYEES_FULFILLED':
      return Object.assign({}, state, {
        searchEmployees: action.payload
      });

    case 'LOAD_DEPARTMENTS_FULFILLED':
      return Object.assign({}, state, {
        departments: action.payload
      });

    case types.LOAD_LEVELS_STUDIES + '_FULFILLED':
      return Object.assign({}, state, {
        levelsStudies: action.payload
      });
    case types.LOAD_CAREERS + '_FULFILLED':
      return Object.assign({}, state, {
        careers: action.payload
      });
    case types.LOAD_UNIVERSITIES + '_FULFILLED':
      return Object.assign({}, state, {
        universities: action.payload
      });

    case types.SELECT_SEARCH_EMPLOYEE:
      return Object.assign({}, state, {
        selectedEmployee: action.payload
      });
    case types.CANCEL_CHANGE_CHIEF:
      return Object.assign({}, state, {
        selectedEmployee: null
      });


    default:
      return state
  }
}