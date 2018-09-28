import React from 'react';
import NavItem from './NavItem';
import NavDropdown from './NavDropdown';
import {PageHeader} from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (



       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div>
            <span>test</span>
            <span className="navbar-toggler-icon, ">test</span>
          </div>
        </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
           
          </ul>
          <div className="div-inline my-2 my-lg-0">
            <span className="navbar-brand" >Gestion Line</span>    
          </div>
        </div> 
      </nav> 
    )
  }
}

export default NavBar;