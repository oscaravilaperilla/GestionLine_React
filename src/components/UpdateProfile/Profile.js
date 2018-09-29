import PersonalData from './PersonalData';
import React from 'react';
const Profile = ({Employee, ...props}) => {
    return (
        <div>
            <PersonalData Employee={Employee} ></PersonalData>
        </div>
    );
}

export default Profile;     