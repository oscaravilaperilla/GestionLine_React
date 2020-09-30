import firebase from 'firebase';

class commonApi {

    static async searchEmployyesByName(name) {
        try {
            let db = firebase.firestore();
//             const settings = { timestampsInSnapshots: true };
//             db.settings(settings);
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
//             const settings = { timestampsInSnapshots: true };
//             db.settings(settings);
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
                    location: (doc.data().ubicacionLaboral) ? doc.data().ubicacionLaboral.map((t,i) => {
                        return {
                            value: i,
                            label: t
                        }
                    } ) : null,
                }
            }
            );
        }
        catch (e) {
            console.log(e);
        }
    }

    static async loadLevelsStudy() {
        try {
            let db = firebase.firestore();
//             const settings = { timestampsInSnapshots: true };
//             db.settings(settings);
            let ref = db.collection("studyLevel");
            let levels = await ref.get();
            return levels.docs.map((doc, i) => {
                return  {
                    value: doc.id,
                    label: doc.data().description,
                    type: doc.data().type
                }
            }
            );
        }
        catch (e) {
            console.log(e);
        }
    }

    static async loadCareers() {
        try {
            let db = firebase.firestore();
//             const settings = { timestampsInSnapshots: true };
//             db.settings(settings);
            let ref = db.collection("career");
            let levels = await ref.get();
            return levels.docs.map((doc, i) => {
                return  {
                    value: doc.id,
                    label: doc.data().description
                }
            }
            );
        }
        catch (e) {
            console.log(e);
        }
    }

    static async loadUniversities() {
        try {
            let db = firebase.firestore();
//             const settings = { timestampsInSnapshots: true };
//             db.settings(settings);
            let ref = db.collection("universities");
            let levels = await ref.get();
            return levels.docs.map((doc, i) => {
                return  {
                    value: doc.id,
                    label: doc.data().description
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
