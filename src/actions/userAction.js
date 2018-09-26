import UserApi from '../api/UserApi';
import * as types from './actionTypes';
import firebase from 'firebase';



export const signInWithEmailAndPassword = (email, pass) => ({
    type: types.LOGIN_USER,
    async payload() {
        let user = UserApi.signInWithEmailAndPassword(email, pass);

        return user;
    },
})

export const loginUserSuccess = (user) => ({
    type: types.LOGIN_USER_FULFILLED,
    payload: user
})

export function verifyAuth() {
    return function (dispatch) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(loginUserSuccess(user));
            } 
        });
    }
}
