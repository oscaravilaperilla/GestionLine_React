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

export const loadLevelsStudies = () => ({
    type: types.LOAD_LEVELS_STUDIES,
    async payload() {
        let levels = await  commonApi.loadLevelsStudy();
        return levels;
    },
})


export const loadCareers = () => ({
    type: types.LOAD_CAREERS,
    async payload() {
        let levels = await  commonApi.loadCareers();
        return levels;
    },
})

export const loadUniversities = () => ({
    type: types.LOAD_UNIVERSITIES,
    async payload() {
        let levels = await  commonApi.loadUniversities();
        return levels;
    },
})







export const selectSearchEmployee = (employee) => ({
    type: types.SELECT_SEARCH_EMPLOYEE,
    payload: employee
})
