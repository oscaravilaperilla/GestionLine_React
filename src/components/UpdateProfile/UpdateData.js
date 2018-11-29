import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import * as userActions from '../../actions/userAction';
import Profile from './Profile';
import Menu from './Menu';
import Studies from '../../containers/Studies'
import Family from '../../containers/Family'

class UpdateData extends Component {
    render() {
        return (
            this.props.Employee ?
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <Menu user={this.props.user} />
                        </div>
                        <div className="col-10">
                            <Switch>
                                {/* para pasar propiedades 
                                <Route exact path='/updatedata'  render={(props) => <Profile {...props} Employee={this.props.Employee} user={this.props.user} />} />*/}
                                <Route exact path='/updatedata' component={Profile} />
                                <Route path='/updatedata/studies' component={Studies} />
                                <Route path='/updatedata/family' component={Family} />
                            </Switch>
                        </div>
                    </div>
                </div>
                : null


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



export default connect(mapStateToProps, mapDispatchToProps)(UpdateData);