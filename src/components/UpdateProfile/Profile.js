import PersonalData from './PersonalData';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as profileActions from '../../actions/profileActions';
import * as commonActions from '../../actions/commonActions';
import LocationWork from './LocationWork';


class Profile extends Component {
    constructor(props, context) {

        super(props, context);
        this.state = {
            EmployeeEdit: {
                valueDepto: null,
                valueLocation: null,
                phone: '',
                valueCity: null

            },        
            cities: [],
            locations: [],

        };
        this.state = { cambiarJefe: false }
        this.changeChief = this.changeChief.bind(this);
        this.cancelChangeChief = this.cancelChangeChief.bind(this);
        this.setChangeChief = this.setChangeChief.bind(this);
        this.onChangeDeptos = this.onChangeDeptos.bind(this);
        this.onChangeCities = this.onChangeCities.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrorSubmit = this.handleErrorSubmit.bind(this);





    }

    static getDerivedStateFromProps(props, state) {
        if (props.departments && props.departments.length > 0 && props.Employee) {
            let depto = props.departments.find((q) => { return q.label === props.Employee.ubicacionLaboral.departamento });
            return {
                EmployeeEdit : {
                    valueDepto: depto,
                    valueLocation: depto.location.find((q) => { return q.label === props.Employee.ubicacionLaboral.ubicacionLaboral }),
                    valueCity: depto.cities.find((q) => { return q.label === props.Employee.ubicacionLaboral.ciudad }),
                },
                cities: depto.cities,
                locations: depto.location,
                
            }
        }
        return null;

    }




    changeChief(event) {
        event.preventDefault();
        this.setState({
            cambiarJefe: !this.state.cambiarJefe
        });
    }

    componentDidMount() {
        this.props.commonActions.loadDepartments(this.props.user.uid);
    }


    setChangeChief(event) {
        event.preventDefault();
        this.setState({
            cambiarJefe: false
        });
        this.props.actions.changeChief(this.props.Employee.id, this.props.newChief);
    }

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
    }

    handleErrorSubmit = (e, formData, errorInputs) => {
        console.error(errorInputs)
    }

    cancelChangeChief(event) {
        event.preventDefault();
        this.setState({
            cambiarJefe: false
        });
        this.props.actions.cancelChangeChief();
    }

    onChangeDeptos(value) {
        this.setState(prevState => ({
            EmployeeEdit: {
                ...prevState.EmployeeEdit,
                valueDepto: value,
                valueCity: null
            },
            cities: value.cities,
        }));
    }

    onChangePhone(e) {
        this.setState(prevState => ({
            EmployeeEdit: {
                ...prevState.EmployeeEdit,
                phone: e.target.value,
            },
        }));
    }

    async onChangeCities(value) {
        this.setState(prevState => ({
            EmployeeEdit: {
                ...prevState.EmployeeEdit,
                valueCity: value,
            },
        }));

        /* await this.setStateAsync({ valueCity: value })
        console.log(this.state.valueDepto, this.state.valueCity); */
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    getValidationState() {
        const length = (this.state.phone) ? this.state.phone.length : 0;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }




    render() {
        return (
            this.props.Employee ?
                <div className="container-fluid">
                    <div className="row">
                        <PersonalData departments={this.props.departments} setChangeChief={this.setChangeChief} cancelChangeChief={this.cancelChangeChief} changeChief={this.changeChief} cambiarJefe={this.state.cambiarJefe} Employee={this.props.Employee} user={this.props.user} />
                    </div>
                    <LocationWork handleSubmit={this.handleSubmit} EmployeeEdit={this.state.EmployeeEdit} getValidationState={this.getValidationState} onChangePhone={this.onChangePhone} Employee={this.props.Employee}  onChangeCities={this.onChangeCities} onChangeDeptos={this.onChangeDeptos} departments={this.props.departments} cities={this.state.cities} locations={this.state.locations} />
                </div>
                : null
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        Employee: state.user.employee,
        user: state.user.currentUser,
        newChief: state.common.selectedEmployee,
        departments: state.common.departments,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(profileActions, dispatch),
        commonActions: bindActionCreators(commonActions, dispatch),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Profile);


