import PersonalData from './PersonalData';
import React from 'react';
const Profile = ({Employee, user,  ...props}) => {
    return (
        <div>
            <PersonalData Employee={Employee} user={user} ></PersonalData>
        </div>
    );
}

export default Profile;     