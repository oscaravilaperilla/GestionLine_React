import commonApi from '../api/commonApi';
import * as types from './actionTypes';


export const searchEmployees = (name) => ({
    type: types.SEARCH_EMPLOYEES,
    async payload() {
        let employees = await  commonApi.searchEmployyesByName(name);
        return employees;
    },
})

