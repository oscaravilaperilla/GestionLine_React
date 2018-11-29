import * as types from '../actions/actionTypes';

const initialState = {
    relatives: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_RELATIVES + '_FULFILLED':
            return Object.assign({}, state, {
                relatives: action.payload
            });
        default:
            return state
    }
}