/*
 src/reducers/simpleReducer.js
*/

const initialState = {
  result : 'initial',
  text : 'initial 22',
  user : {}
};


export default (state = initialState, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      
       return Object.assign({}, state, {
                result : action.payload
            });
      
      case 'SECOND_ACTION':
      return Object.assign({}, state, {
        text : action.payload
      });

      case 'LOGIN_USER_SUCCESS':
      return Object.assign({}, state, {
        user : action.payload
      });

      case 'LOGIN_USER_FAIL':
      return Object.assign({}, state, {
        text : action.error
      });

     default:
      return state
    }
   }