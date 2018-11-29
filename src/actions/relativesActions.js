import relativeApi from '../api/relativesApi';
import * as types from './actionTypes';
import {toastr} from 'react-redux-toastr';

export function LoadedRelatives(relatives) {
    return {
        type: types.LOAD_RELATIVES + '_FULFILLED',
        payload: relatives
    }
};

 export function LoadRelatives(userId) {
    return function (dispatch) {
        relativeApi.LoadRelatives(userId).then((relatives) => {
            dispatch(LoadedRelatives(relatives));
        }).catch( (e) => {throw  e} );
    }
} 