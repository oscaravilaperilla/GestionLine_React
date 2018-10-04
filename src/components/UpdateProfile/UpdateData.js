import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userAction';
import Profile from './Profile';

class UpdateData extends Component {
    state = {  }
    render() {
        return (
             this.props.Employee ? 
            <Profile Employee = {this.props.Employee} user = {this.props.user} /> : null
        );
    }

    componentWillMount() {
        this.props.actions.queryEmployee(this.props.user.uid);
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

 

export default connect(mapStateToProps,mapDispatchToProps)(UpdateData);