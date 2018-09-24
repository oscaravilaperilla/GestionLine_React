import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './components/App';
import About from './containers/About';
import Login from './components/login/Login';
export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={App} />
                <Route path='/about' component={About} />
                <Route component={App}></Route>
            </Switch>
        </BrowserRouter>
    )
}