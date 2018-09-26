/*
 src/reducers/simpleReducer.js
*/

const initialState = {
  result : 'initial',
  text : 'initial 22'
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
     default:
      return state
    }
   }