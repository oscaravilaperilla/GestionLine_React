import firebase from 'firebase';
import moment from 'moment'

class commonApi {

    static async searchEmployyesByName(name) {
        try {
            let db = firebase.firestore();
            const settings = { timestampsInSnapshots: true };
            db.settings(settings);
            let employeesByName = db.collection("employees");
            let employees = await employeesByName.get();
            let x = 1;
            console.log(x);
            return employees.docs.map((doc,i) => 
                doc.data()
            ) ;
        }
        catch (e) {
            console.log(e);
        }
    }
}

export default commonApi;