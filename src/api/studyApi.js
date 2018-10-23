import firebase from 'firebase';

class studyApy {

    static async addStudy(study) {
        try {
            let db = firebase.firestore();
            const settings = { timestampsInSnapshots: true };
            db.settings(settings);
            await db.collection("studiesEmployee").doc().set(study);
        }
        catch (e) {
            console.log(e);
        }
    }

    static async LoadStudies(UserId) {
        try {
            let db = firebase.firestore();
            const settings = { timestampsInSnapshots: true };
            db.settings(settings);
            let result = await db.collection("studiesEmployee").where("userId", "==", UserId).get();
            return result.docs.map(doc => {
                return {
                    level: doc.data().level,
                    id: doc.id,
                    career : doc.data().career
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }




}

export default studyApy;