import * as types from '../actions/actionTypes';

const initialState = {
  currentUser: null,
  employee: null,
  studies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_FULFILLED':
      return Object.assign({}, state, {
        currentUser: action.payload
      });
    case 'LOGOUT_USER_FULFILLED':
      return Object.assign({}, state, {
        currentUser: null
      });
    case 'QUERY_EMPLOYEE_FULFILLED':
      return Object.assign({}, state, {
        employee: action.payload
      });
    case 'CHANGE_CHIEF_FULFILLED':
      return Object.assign({}, state, {
        employee: action.payload
      });
    case types.LOAD_STUDIES + '_FULFILLED':
      return Object.assign({}, state, {
        studies: action.payload
      });




    default:
      return state
  }
}