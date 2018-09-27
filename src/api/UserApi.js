import firebase from 'firebase';

class UserApi {

    static async signInWithEmailAndPassword(email, pass) {
        try {
            let userProperties = await firebase.auth().signInWithEmailAndPassword(email, pass);
            return userProperties.user;
        }
        catch (e) {
            console.log(e);
        }
    }
}
export default UserApi;