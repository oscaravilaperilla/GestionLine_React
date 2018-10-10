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
            return employees.docs.map((doc, i) => {
                return  {
                    id: doc.id,
                    fullName: doc.data().fullName,
                    photoUrl: doc.data().photoUrl,
                }
            }
            );
        }
        catch (e) {
            console.log(e);
        }
    }

    static async loadDepartaments() {
        try {
            let db = firebase.firestore();
            const settings = { timestampsInSnapshots: true };
            db.settings(settings);
            let deptosref = db.collection("Departamentos");
            let deptos = await deptosref.get();
            return deptos.docs.map((doc, i) => {
                return  {
                    value: doc.id,
                    label: doc.data().departamento,
                    cities: doc.data().ciudades.map((t,i) => {
                        return {
                            value: i,
                            label: t
                        }
                    } ),
                }
            }
            );
        }
        catch (e) {
            console.log(e);
        }
    }



}

export default commonApi;