import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import { Link } from 'react-router-dom';
import UserInfo from '../login/UserInfo';


const sideBar = (props) => {
    return (
        <Menu right>
            <UserInfo/>
            <Link to='/' >
                <span className="menu-item">
                    Home
                </span>
            </Link>

            <Link to='/about' >
                <span className="menu-item">
                    About
                </span>
            </Link>
            <Link to='/updatedata' >
                <span className="menu-item">
                    Update Profile
                </span>
            </Link>
        </Menu>
    )
}

export default reduxBurgerMenu(sideBar);

