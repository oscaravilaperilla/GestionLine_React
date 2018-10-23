import React from 'react';
import Select from 'react-select';
import { TextInput, ValidationForm } from 'react-bootstrap4-form-validation';

const LocationWork = ({ Employee, EmployeeEdit, handleSubmit, handleErrorSubmit, getValidationState, departments, onChangeDeptos, locations, onChangePhone,onChangeLocations, cities, onChangeCities, ...props }) => {
    return (
        <ValidationForm onSubmit={handleSubmit} onErrorSubmit={handleErrorSubmit}>
            <div>
                <div className="card border-right-0 border-left-0 border-top-0 ">
                    <div className="text-left bg-white">
                        <h5>Location Work</h5>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <div className="row">
                                <label className="col-sm-4 col-form-label text-left" >Departamento</label>
                                <div className="col-sm-8">

                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        name="color"
                                        options={departments}
                                        isSearchable={true}
                                        onChange={onChangeDeptos}
                                        value={(EmployeeEdit) ? EmployeeEdit.valueDepto : null}
                                    />
                                    {(EmployeeEdit && EmployeeEdit.valueDepto) ? null :  <small className="text-danger">Is required</small>}
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="row">
                                <label className="col-sm-4 col-form-label text-left">Ciudad</label>
                                <div className="col-sm-8">

                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        name="color"
                                        options={cities}
                                        onChange={onChangeCities}
                                        isSearchable={true}
                                        value={(EmployeeEdit) ? EmployeeEdit.valueCity : null}
                                    />
                                    {(EmployeeEdit && EmployeeEdit.valueCity) ? null :  <small className="text-danger">Is required</small>}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <div className="row">
                                <label className="col-sm-4 col-form-label text-left" >Ubicación</label>
                                <div className="col-sm-8">
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        name="color"
                                        options={locations || []}
                                        isSearchable={true}
                                        onChange={onChangeLocations}
                                        value={(EmployeeEdit) ? EmployeeEdit.valueLocation : null}
                                    />
                                    {(EmployeeEdit && EmployeeEdit.valueLocation) ? null :  <small className="text-danger">Is required</small>}
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="row">
                                <label className="col-sm-4 col-form-label text-left">Telefono</label>
                                <div className="col-sm-8">
                                    {
                                        (EmployeeEdit) ?
                                            <TextInput
                                                className="form-control form-control-sm"
                                                errorMessage="Phone Number is required"
                                                name="phone"
                                                type="text"
                                                value={EmployeeEdit.phone}
                                                placeholder="Enter text"
                                                onChange={onChangePhone}
                                                required
                                            />

                                            : null
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button className="btn btn-primary float-right">Guardar</button>
                    </div>
                </div>
            </div>
        </ValidationForm>
    );
}

export default LocationWork;