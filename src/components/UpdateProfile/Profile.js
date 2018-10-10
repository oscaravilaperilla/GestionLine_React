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
        this.state = { cambiarJefe: false }
        this.changeChief = this.changeChief.bind(this);
        this.cancelChangeChief = this.cancelChangeChief.bind(this);
        this.setChangeChief = this.setChangeChief.bind(this);
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



    render() {
        return (
            this.props.Employee ?
                <div className="container-fluid">
                    <div className="row">
                        <Menu user={this.props.user}/>
                        <PersonalData departments={this.props.departments} setChangeChief={this.setChangeChief} cancelChangeChief={this.cancelChangeChief} changeChief={this.changeChief} cambiarJefe={this.state.cambiarJefe} Employee={this.props.Employee} user={this.props.user} />
                        <LocationWork departments={this.props.departments}  />
                    </div>
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


