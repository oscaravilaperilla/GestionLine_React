import React from 'react';
import { Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const Menu = ({ user, ...props }) => {
    return (
        <div>
            <Image className="User-image" src={user.photoURL} />

            <Link to="/updatedata">
                <button className="btn btn-link float-left btn-sm">Información Laboral</button>
            </Link>
            <Link to="/updatedata/studies">
                <button className="btn btn-link float-left btn-sm">Estudios Realizados</button>
            </Link>
            <Link to="/updatedata/family">
                <button className="btn btn-link float-left btn-sm">Family</button>
            </Link>
        </div>

    )
}

export default Menu