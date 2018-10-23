import React from 'react';  
import Modal from 'react-bootstrap4-modal';
const AddStudy = ({itemStudy, visible,cancelClick, ...props}) => {
    return (
        <Modal visible={visible} >
          <div className="modal-header">
            <h5 className="modal-title">Edit Study</h5>
          </div>
          <div className="modal-body">
            <p>{(itemStudy) ? itemStudy.career : 'vacio'}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={cancelClick}>
              Panic
            </button>
            <button type="button" className="btn btn-primary" onClick={cancelClick}>
              Fire phasers
            </button>
          </div>
        </Modal>
        
    );
}

export default AddStudy;