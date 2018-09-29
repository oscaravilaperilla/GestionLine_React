import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import * as userActions from '../../actions/userAction';
import { Redirect } from 'react-router-dom';
import "../../styles/login.css";




class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.signIn = this.signIn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
         this.setState({
          redirect: true
        })

    }
  }

  signIn = (event) => {
    this.props.actions.signInWithEmailAndPassword(this.state.email, this.state.password);

  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    if (this.state.redirect) {
      return <Redirect to={from} />;
    }

    return (
      
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.signIn}
          >
            Login
          </Button>
        </form>
      </div>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(Login)