import React from 'react';

const EmployeeItem = ({employee}) => (
  <div>
    <img
      alt={employee.name}
      src={employee.photoUrl}
      style={{
        height: '24px',
        marginRight: '10px',
        width: '24px',
      }}
    />
    <span>{employee.fullName}</span>
  </div>
);



export default EmployeeItem;