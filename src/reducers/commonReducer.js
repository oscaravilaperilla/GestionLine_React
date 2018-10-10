/*
 src/reducers/userReducer.js
*/
import * as types from '../actions/actionTypes';

const initialState = {
    searchEmployees: [],
    selectedEmployee: null,
    departments : []
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