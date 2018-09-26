import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const ProtectedRoute
    = ({ isAllowed, ...props }) =>
    {
        console.log(props);
        return(    
        isAllowed
            ? <Route {...props} />
        : <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />);
            
    }

function mapStateToProps(state) {
    return {
        isAllowed: state.user.currentUser,
    };
}

export default connect(mapStateToProps)(ProtectedRoute);