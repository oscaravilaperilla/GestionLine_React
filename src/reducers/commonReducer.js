/*
 src/reducers/userReducer.js
*/

const initialState = {
    searchEmployees: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_EMPLOYEES_FULFILLED':
        return Object.assign({}, state, {
            searchEmployees: action.payload
        });
      default:
        return state
    }
  }