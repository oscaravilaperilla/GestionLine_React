/*
 src/reducers/userReducer.js
*/
import * as types from '../actions/actionTypes';

const initialState = {
    searchEmployees: [],
    selectedEmployee: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_EMPLOYEES_FULFILLED':
        return Object.assign({}, state, {
            searchEmployees: action.payload
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