import React from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userAction';
import { bindActionCreators } from 'redux';

class SignOut extends React.Component {
        
    signOut = (event) => {
        this.props.actions.signOut();

    }
    render() {
        return (
            <button onClick={this.signOut} className="btn btn-link">Sign out</button>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user.currentUser,
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      actions: bindActionCreators(userActions, dispatch),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)