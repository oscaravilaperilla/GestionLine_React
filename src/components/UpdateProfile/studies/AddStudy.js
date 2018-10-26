import React from 'react';
import Modal from 'react-bootstrap4-modal';
import Select from 'react-select';
import { TextInput, ValidationForm, Checkbox } from 'react-bootstrap4-form-validation';
const AddStudy = ({ itemStudy, universities, handleChangeGraduated, onChangeUniversities, visible, careers, onChangeSemester, levelStudies, onChangeTitle, levels, onChangeLevels, onChangeCareer, handleSubmit, handleErrorSubmit, cancelClick, ...props }) => {
  return (
    <ValidationForm onSubmit={handleSubmit} onErrorSubmit={handleErrorSubmit}>
      <Modal dialogClassName="modal-lg" visible={visible} >
        <div className="modal-header">
          <h5 className="modal-title">Edit Study</h5>
        </div>
        <div className="modal-body">
          <div className="form-group col-md-12">
            <div className="row">
              <label className="col-sm-4 col-form-label text-left" >Level</label>
              <div className="col-sm-8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  name="levels"
                  options={levelStudies}
                  isSearchable={true}
                  onChange={onChangeLevels}
                  value={itemStudy.level}
                />
                {(itemStudy && itemStudy.level) ? null : <small className="text-danger">Is required</small>}
              </div>
            </div>
            <p />
            <div className="row">
              <label className="col-sm-4 col-form-label text-left" >Career</label>
              <div className="col-sm-8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  name="career"
                  options={careers}
                  isSearchable={true}
                  onChange={onChangeCareer}
                  value={itemStudy.career}
                />
                {(itemStudy && itemStudy.career) ? null : <small className="text-danger">Is required</small>}
              </div>
            </div>
            <p />
            <div className="row">
              <label className="col-sm-4 col-form-label text-left">Semester</label>
              <div className="col-sm-8">
                {
                  (itemStudy) ?
                    <TextInput
                      className="form-control form-control-md"
                      errorMessage="is required"
                      name="numberSemester"
                      type="number"
                      value={itemStudy.numberSemester}
                      placeholder="Enter text"
                      onChange={onChangeSemester}
                      required
                    />
                    : null
                }
              </div>
            </div>
            <p />
            <div className="row">
              <label className="col-sm-4 col-form-label text-left" >University</label>
              <div className="col-sm-8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  name="university"
                  options={universities}
                  isSearchable={true}
                  onChange={onChangeUniversities}
                  value={itemStudy.university}
                />
                {(itemStudy.university) ? null : <small className="text-danger">Is required</small>}
              </div>
            </div>
            <p />
            <div className="row">
              <label className="col-sm-4 col-form-label text-left">Year Finish</label>
              <div className="col-sm-8">
                {
                  (itemStudy) ?
                    <TextInput
                      className="form-control form-control-md"
                      errorMessage="is required"
                      name="year"
                      type="number"
                      value={itemStudy.year}
                      placeholder="Enter text"
                      onChange={onChangeSemester}
                      required
                    />
                    : null
                }
              </div>
            </div>
            <p />
            <div className="row">
              <label className="col-sm-4 col-form-label text-left">Graduate</label>
              <div className="col-sm-8">

                {
                  (itemStudy) ?
                    <div className="to-left">
                      <Checkbox name="graduate" id="graduate"
                        value={itemStudy.graduate}
                        onChange={handleChangeGraduated}
                      />
                    </div>
                    : null

                }
              </div>
            </div>

            <div className="row">
              <label className="col-sm-4 col-form-label text-left">Title</label>
              <div className="col-sm-8">
                {
                  (itemStudy) ?
                    <TextInput
                      className="form-control form-control-md"
                      name="title"
                      type="text"
                      value={itemStudy.title}
                      placeholder="Enter text"
                      onChange={onChangeTitle}
                    />
                    : null
                }
              </div>
            </div>

          </div>

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary btn-md modal-button" onClick={cancelClick}>
            Cancel
            </button>
          <button type="button" onClick={handleSubmit} className="btn btn-primary btn-md modal-button">
            Ok
            </button>
        </div>
      </Modal>
    </ValidationForm>

  );
}

export default AddStudy;