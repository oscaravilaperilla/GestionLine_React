import PersonalData from './PersonalData';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as profileActions from '../../actions/profileActions';

class Profile extends Component {
    constructor(props, context){
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

    setChangeChief(event) {
        event.preventDefault();
        this.setState({
            cambiarJefe: false
        });
        this.props.actions.changeChief(this.props.Employee.id,this.props.newChief);
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
                <PersonalData setChangeChief = {this.setChangeChief} cancelChangeChief={this.cancelChangeChief}  changeChief={this.changeChief} cambiarJefe={this.state.cambiarJefe} Employee={this.props.Employee} user={this.props.user} /> : null
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        Employee: state.user.employee,
        user: state.user.currentUser,
        newChief: state.common.selectedEmployee,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(profileActions, dispatch),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Profile);


