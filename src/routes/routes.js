import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import About from '../containers/About';
import Login from '../components/login/Login';
import ProtectedRoute from './protectedRoute';


export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <ProtectedRoute path='/about' component={About} />
                <ProtectedRoute exact path='/' component={App} />
                <ProtectedRoute path="/" component={App} />
            </Switch>
        </BrowserRouter>
    )
}