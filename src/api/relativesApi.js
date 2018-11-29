import firebase from 'firebase';

export class relativeApi {

    static async LoadRelatives(UserId) {
        try {
            let db = firebase.firestore();
            const settings = { timestampsInSnapshots: true };
            db.settings(settings);
            let result = await db.collection("relatives").where("userId", "==", UserId).get();
            return result.docs.map(doc => {
                return {
                    birth: doc.data().birth,
                    identification: doc.data().identification,
                    userId: doc.data().userId,
                    lastName: doc.data().lastName,
                    name: doc.data().name,
                    relationship: doc.data().relationship,
                    id: doc.id,
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }


}

export default relativeApi;