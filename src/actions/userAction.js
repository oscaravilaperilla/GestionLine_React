import UserApi from '../api/UserApi';
import * as types from './actionTypes';
import firebase from 'firebase';



export const signInWithEmailAndPassword = (email, pass) => ({
    type: types.LOGIN_USER,
    async payload() {
        let user = await  UserApi.signInWithEmailAndPassword(email, pass);
        return user;
    },
})

export const signOut = () => ({
    type: types.LOGOUT_USER,
    async payload() {
        let user = await  UserApi.signOut();
        verifyAuth();
    },
})

export const updateUser = () => ({
    type: types.UPDATE_USER,
    async payload() {
        let user = await  UserApi.updateUser();
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
