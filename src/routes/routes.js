import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import About from '../containers/About';
import Login from '../components/login/Login';
import UpdateData from '../components/UpdateProfile/UpdateData';
import ProtectedRoute from './protectedRoute';
import NavBarApp from '../components/Navigation/NavBar';
import SideBar from '../components/Navigation/sideBar';
import { connect } from 'react-redux'


const AppRoutes = ({isAllowed, ...props}) => {
    return (
        <BrowserRouter>
            <div className="App">

                {isAllowed ?  <NavBarApp/> : null}
                {isAllowed ?   <SideBar/> : null}
                <Switch>
                    <Route path='/login' component={Login} />
                    <ProtectedRoute isAllowed={isAllowed} path='/about' component={About} />
                    <ProtectedRoute isAllowed={isAllowed} exact path='/' component={App} />
                    <ProtectedRoute isAllowed={isAllowed} path='/updatedata' component={UpdateData} />
                    <ProtectedRoute isAllowed={isAllowed} path="/" component={App} />
                    
                </Switch>
            </div>
        </BrowserRouter>
    )
}

function mapStateToProps(state) {
    return {
        isAllowed: state.user.currentUser,
    };
}

export default connect(mapStateToProps)(AppRoutes);