import firebase from 'firebase';
import moment from 'moment'

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
    static async updateUser() {
        try {
            let user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: "Oscar Javier Avila",
                photoURL: "https://firebasestorage.googleapis.com/v0/b/employees-86ecc.appspot.com/o/IMG_20180511_221902.jpg?alt=media&token=bdc06eee-f905-4b61-a288-79444671477b"
            });
        }
        catch (e) {
            console.log(e);
        }
    }

    static async updateProfile(id, profile, EmployeeEdit) {
        try {
            let db = firebase.firestore();
            const settings = { timestampsInSnapshots: true };
            db.settings(settings);
            let doc = db.collection("employees").doc(id);
            if (profile)
                await doc.update({ 'chief.description': profile.fullName, 'chief.id': profile.id })
            if (EmployeeEdit)
                await doc.update({ 'phone.phone': EmployeeEdit.phone, 'ubicacionLaboral.ciudad': EmployeeEdit.valueCity.label, 'ubicacionLaboral.departamento': EmployeeEdit.valueDepto.label , 'ubicacionLaboral.ubicacionLaboral': EmployeeEdit.valueLocation.label })
            return this.queryEmployee(id);
        }
        catch (e) {
            console.log(e);
        }
    }



    static signOut() {
        firebase.auth().signOut();
    }

    static async queryEmployee(uid) {
        let db = firebase.firestore();
        const settings = { timestampsInSnapshots: true };
        db.settings(settings);
        let employeesref = db.collection("employees").doc(uid);
        let doc = await employeesref.get();
        //let t = await doc.data().estructuraRef.get();
        //console.log(t.parent);
        //console.log(t.data());
        let t = doc.data();
        t.id = doc.id;
        t.position.dateLastPosition = moment(t.position.dateLastPosition.toDate()).format('DD/MM/YYYY');
        t.admissionDate = moment(t.admissionDate.toDate()).format('DD/MM/YYYY');
        return t;
    }

    //
}
export default UserApi;