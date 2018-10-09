import PersonalData from './PersonalData';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userAction';

class Profile extends Component {
    constructor(props, context){
        super(props, context);
        this.state = { cambiarJefe: false }
        this.changeChief = this.changeChief.bind(this);
    }
    

    changeChief(event) {
        event.preventDefault();
        this.setState({
            cambiarJefe: !this.state.cambiarJefe
        })
    }

    render() {
        return (
            this.props.Employee ?
                <PersonalData changeChief={this.changeChief} cambiarJefe={this.state.cambiarJefe} Employee={this.props.Employee} user={this.props.user} /> : null
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        Employee: state.user.employee,
        user: state.user.currentUser,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(userActions, dispatch),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Profile);


