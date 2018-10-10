import React from 'react';
import { Image } from 'react-bootstrap';

export const Menu = ({ user, ...props }) => {
    return (
        <div className="col-2">
            <Image className="User-image" src={user.photoURL} />
        </div>
    )
}

export default Menu