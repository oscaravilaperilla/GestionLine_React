/*
 src/reducers/userReducer.js
*/

const initialState = {
  currentUser: null,
  employee: null,
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
    default:
      return state
  }
}