import React from 'react';
import Select from 'react-select';
import { TextInput, ValidationForm } from 'react-bootstrap4-form-validation';

const LocationWork = ({ Employee, EmployeeEdit, handleSubmit, handleErrorSubmit, getValidationState, departments, onChangeDeptos, locations, onChangePhone, cities, onChangeCities, ...props }) => {
    return (

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
                                    options={locations}
                                    isSearchable={true}
                                    onChange={onChangeDeptos}
                                    value={(EmployeeEdit) ? EmployeeEdit.valueLocation : null}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="row">
                            <label className="col-sm-4 col-form-label text-left">Telefono</label>
                            <div className="col-sm-8">
                                <ValidationForm onSubmit={handleSubmit} onErrorSubmit={handleErrorSubmit}>
                                    <TextInput
                                        className="form-control form-control-sm"
                                        errorMessage="Phone Number is required"
                                        name="phone"
                                        type="text"
                                        value={(EmployeeEdit) ? EmployeeEdit.phone || '' : ''}
                                        placeholder="Enter text"
                                        onChange={onChangePhone}
                                        required
                                    />
                                </ValidationForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LocationWork;