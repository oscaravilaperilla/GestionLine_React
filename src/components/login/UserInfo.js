import React from 'react'
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import  SignOut  from './SignOut';

const UserInfo = ({ user }) => {
    return (
        user ?
            <div className="Grid-user">
                <div className="row">
                    <Image className="User-profile-image" src={user.photoURL} rounded />
                </div>
                <div className="Grid-user">
                    <h5><span className="badge badge-secondary">{user.displayName}</span></h5>
                    <h6><span className="badge badge-secondary">Developer</span></h6>
                    <SignOut></SignOut>
                </div>
            </div> :
            <span>user</span>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user.currentUser,
    };
}

export default connect(mapStateToProps)(UserInfo);