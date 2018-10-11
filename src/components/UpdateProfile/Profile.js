import PersonalData from './PersonalData';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as profileActions from '../../actions/profileActions';
import * as commonActions from '../../actions/commonActions';
import LocationWork from './LocationWork';
import Menu from './Menu';

class Profile extends Component {
    constructor(props, context) {
        
        super(props, context);
        this.state = {
            valueDepto : null,
            cities: [],
            valueCity : null
          };
        this.state = { cambiarJefe: false }
        this.changeChief = this.changeChief.bind(this);
        this.cancelChangeChief = this.cancelChangeChief.bind(this);
        this.setChangeChief = this.setChangeChief.bind(this);
        this.onChangeDeptos = this.onChangeDeptos.bind(this);
        this.onChangeCities = this.onChangeCities.bind(this);
        
        
    }


    changeChief(event) {
        event.preventDefault();
        this.setState({
            cambiarJefe: !this.state.cambiarJefe
        });
    }

    componentWillMount() {
        this.props.commonActions.loadDepartments(this.props.user.uid);
    }


    setChangeChief(event) {
        event.preventDefault();
        this.setState({
            cambiarJefe: false
        });
        this.props.actions.changeChief(this.props.Employee.id, this.props.newChief);
    }

    cancelChangeChief(event) {
        event.preventDefault();
        this.setState({
            cambiarJefe: false
        });
        this.props.actions.cancelChangeChief();
    }

    onChangeDeptos(value){
        
        this.setState({
            valueDepto: value,
            cities: value.cities,
            valueCity:null
        });
    }

    async onChangeCities(value){
        await this.setStateAsync({ valueCity:value })
        

        console.log(this.state.valueDepto, this.state.valueCity);

        
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
          this.setState(state, resolve)
        });
    }




    render() {
        return (
            this.props.Employee ?
                <div className="container-fluid">
                    <div className="row">
                        <Menu user={this.props.user} />
                        <PersonalData departments={this.props.departments} setChangeChief={this.setChangeChief} cancelChangeChief={this.cancelChangeChief} changeChief={this.changeChief} cambiarJefe={this.state.cambiarJefe} Employee={this.props.Employee} user={this.props.user} />
                    </div>
                    <LocationWork valueDepto={this.state.valueDepto} valueCity={this.state.valueCity} onChangeCities={this.onChangeCities} onChangeDeptos={this.onChangeDeptos} departments={this.props.departments} cities={this.state.cities} />
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


