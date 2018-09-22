import firebase from 'firebase';

export function loginUser(email, pass) { 
   return  dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((resp) => {
            return dispatch(loginUserSuccess(resp));
        })
        .catch((error) => { dispatch(loginUserFail)});
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
