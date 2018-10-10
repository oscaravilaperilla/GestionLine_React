import commonApi from '../api/commonApi';
import * as types from './actionTypes';
import UserApi from '../api/UserApi';


export const cancelChangeChief = () => ({
    type: types.CANCEL_CHANGE_CHIEF,
})

export const changeChief = (id,newChief) => ({
    type: types.CHANGE_CHIEF,
    async payload() {
        let employee = await  UserApi.updateProfile(id,newChief);
        return employee;
    },
})



export const selectSearchEmployee = (employee) => ({
    type: types.SELECT_SEARCH_EMPLOYEE,
    payload: employee
})
