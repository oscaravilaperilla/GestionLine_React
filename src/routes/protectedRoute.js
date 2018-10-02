import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute
    = ({ isAllowed, ...props }) =>
    {
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


export default ProtectedRoute;