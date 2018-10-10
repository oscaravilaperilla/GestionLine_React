import commonApi from '../api/commonApi';
import * as types from './actionTypes';


export const searchEmployees = (name) => ({
    type: types.SEARCH_EMPLOYEES,
    async payload() {
        let employees = await  commonApi.searchEmployyesByName(name);
        return employees;
    },
})

export const loadDepartments = () => ({
    type: types.LOAD_DEPARTMENTS,
    async payload() {
        let depts = await  commonApi.loadDepartaments();
        return depts;
    },
})



export const selectSearchEmployee = (employee) => ({
    type: types.SELECT_SEARCH_EMPLOYEE,
    payload: employee
})
