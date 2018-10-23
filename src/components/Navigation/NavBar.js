import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

class NavBar extends React.Component {
  render() {
    return (



      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <LoadingBar />
          <span className="navbar-brand" >Gestion Line</span>
        </div>
      </nav>
    )
  }
}

export default NavBar;