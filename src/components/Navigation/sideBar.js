import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import { Link } from 'react-router-dom';
import UserInfo from '../login/UserInfo';


const sideBar = (props) => {
    return (
        <Menu >
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
        </Menu>
    )
}

export default reduxBurgerMenu(sideBar);

