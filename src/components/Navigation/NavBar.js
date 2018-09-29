import React from 'react';
import NavItem from './NavItem';
import NavDropdown from './NavDropdown';
import {PageHeader} from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (



       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand" >Gestion Line</span>    
      </nav> 
    )
  }
}

export default NavBar;