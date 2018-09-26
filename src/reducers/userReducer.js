/*
 src/reducers/userReducer.js
*/

const initialState = {
  currentUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_FULFILLED':
      return Object.assign({}, state, {
        currentUser: action.payload
      });
    default:
      return state
  }
}