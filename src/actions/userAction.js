import UserApi from '../api/UserApi';
import firebase from 'firebase';
import * as types from './actionTypes';

export function loginUser(email, pass) {
    return async  dispatch => {
        let user = await UserApi.signInWithEmailAndPassword(email, pass);
        dispatch(loginUserSuccess(user));
    }
}

export const login =  (email,pass) => ({
    type: types.LOGIN_USER,
    async payload() { 
        let user = UserApi.signInWithEmailAndPassword(email, pass);
        return user; 
    },
  })

 export function verifyAuth() {
    return function (dispatch) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(loginUserSuccess(user));
            } else {
                dispatch(loginUserFail());
            }
        });
    }
}

export const loginUserSuccess = (resp) => {
    return {
        type: 'LOGIN_USER_SUCCESS',
        payload: resp,
    }
}

export const loginUserFail = (error) => {
    return {
        type: 'LOGIN_USER_FAIL',
        error
    }
}
