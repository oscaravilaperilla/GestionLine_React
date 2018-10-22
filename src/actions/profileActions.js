import * as types from './actionTypes';
import UserApi from '../api/UserApi';
import {toastr} from 'react-redux-toastr';


export const cancelChangeChief = () => ({
    type: types.CANCEL_CHANGE_CHIEF,
})

export const changeChief = (id,newChief, EmployeeEdit) => ({
    type: types.CHANGE_CHIEF,
    async payload() {
        let employee = await  UserApi.updateProfile(id,newChief,EmployeeEdit);
        toastr.success('Success', 'Save Sucessfully');
        return employee;
    },
})



export const selectSearchEmployee = (employee) => ({
    type: types.SELECT_SEARCH_EMPLOYEE,
    payload: employee
})
