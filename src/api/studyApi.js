import firebase from 'firebase';

class studyApy {

    static async addStudy(study) {
        try {
            let id = (study.id) ? study.id : '';
            let studyAdd = {
                career: study.career.label,
                graduate: study.graduate,
                level: study.level.label,
                numberSemester: study.numberSemester,
                title: study.title,
                university: study.university.label,
                userId: study.userId,
                year: study.year
            };
            let db = firebase.firestore();
            const settings = { timestampsInSnapshots: true };
            db.settings(settings);
            if (id)
                await db.collection("studiesEmployee").doc(id).set(studyAdd);
            else
                await db.collection("studiesEmployee").doc().set(studyAdd);
        }
        catch (e) {
            console.log(e);
        }
    }

    static async deleteStudy(id) {
        try {
            let db = firebase.firestore();
            const settings = { timestampsInSnapshots: true };
            db.settings(settings);
            await db.collection("studiesEmployee").doc(id).delete();
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
                    userId: doc.data().userId,
                    career: doc.data().career,
                    title: doc.data().title,
                    numberSemester: doc.data().numberSemester,
                    university: doc.data().university,
                    year: doc.data().year || 0,
                    graduate: doc.data().graduate
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }




}

export default studyApy;