import React from 'react';
import {Link} from 'react-router-dom';
import NavBarApp from '../containers/NavBar';
export default class About extends React.Component {
 render () {
   return (
     <div>
       <NavBarApp />
       About
       <Link to="/">
        <button>Go Home</button>
       </Link>
     </div>
   )
 }
}