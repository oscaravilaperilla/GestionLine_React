import React from 'react';

const EmployeeItem = ({employee}) => (
  <div>
    <img
      alt={employee.active}
      src={employee.name}
      style={{
        height: '24px',
        marginRight: '10px',
        width: '24px',
      }}
    />
    <span>{employee.lastName}</span>
  </div>
);



export default EmployeeItem;