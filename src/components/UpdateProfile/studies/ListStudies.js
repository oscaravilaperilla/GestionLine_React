import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const ListStudies = ({ studies,editStudy, ...props }) => {

    const columns = [
        {
            dataField: 'level1',
            text: '',
            formatter: buttonFormatterEdit,
            align : 'left',
            headerStyle: (colum, colIndex) => {
                return { width: '10%', textAlign: 'left' };
              }
        },
        {
            dataField: 'level2',
            text: '',
            align : 'left',
            formatter: buttonFormatterDelete,
            headerStyle: (colum, colIndex) => {
                return { width: '10%', textAlign: 'left' };
              }
        },
        {
            dataField: 'level',
            text: 'Level',
            align : 'left',
            headerStyle: (colum, colIndex) => {
                return { width: '30%', textAlign: 'left' };
              }
        }, {
            dataField: 'career',
            text: 'Career',
            align : 'left',
            headerStyle: (colum, colIndex) => {
                return { width: '50%', textAlign: 'left' };
              }
        }
    ];

    function buttonFormatterEdit(cell, row) {
        return (
            <button  onClick={(e) => editStudy(e,row)} trade={row} className="btn btn-link">Edit</button>
        );
    }

    function buttonFormatterDelete(cell, row) {
        return (
            <button className="btn btn-link">Delete</button>
        );
    }

    return (
        <div>
            <BootstrapTable bordered={ false } bootstrap4={true} keyField='id' data={studies} columns={columns} />
        </div>

    );
}

export default ListStudies;