import studyApi from '../api/studyApi';
import * as types from './actionTypes';

export function addStudy(stydy, userId) {
    return function (dispatch) {
        studyApi.addStudy(stydy).then(() => {
            dispatch(LoadStudies(userId))
        })
    }
};

export function LoadedStudies(studies) {
    return {
        type: types.LOAD_STUDIES + '_FULFILLED',
        payload: studies
    }
};

/* export function LoadStudies(userId) {
    return function (dispatch) {
        studyApi.LoadStudies(userId).then((studies) => {
            dispatch(LoadedStudies(studies));
        })
    }
} */

export function LoadStudies(userId) {
    return {
        type: types.LOAD_STUDIES,
        async payload() {
            let studies = await studyApi.LoadStudies(userId);
            return studies;
        },
    }
}