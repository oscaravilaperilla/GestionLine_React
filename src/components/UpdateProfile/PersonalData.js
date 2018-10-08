import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import SearchEmployees from '../common/SearchEmployees';
import { searchEmployees } from '../../actions/commonActions';
const PersonalData = ({ Employee, user, ...props }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Image className="User-image" src={user.photoURL} />
                </div>
                <div className="col-10">
                    <div className="card border-right-0 border-left-0 border-top-0 ">
                        <div className="text-left bg-white">
                            <h5>Personal Info</h5>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left" >Name</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.name + " " + Employee.lastName + " " + (Employee.secondLastName ? Employee.secondLastName : "")} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">Company</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.estructura.empresa} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">Vice Presidency</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.estructura.vicepresidencia} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left" >Gerencia Nacional</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.estructura.gerenciaNacional} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">Gerencia</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.estructura.gerencia} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">Departamento</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.estructura.departamento} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">Regional</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.regional.description} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">No Centro Costo</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.area.id} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">Centro Costo</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.area.description} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">Cargo</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.position.description} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">Fecha cargo</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.position.dateLastPosition} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">Cargo Homologado</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.position.homologated} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">Fecha Ingreso</label>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-sm" value={Employee.admissionDate} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="row">
                                    <label className="col-sm-4 col-form-label text-left">Jefe</label>
                                    <div className="col-sm-8">
                                        <SearchEmployees/>
                                        <input className="form-control form-control-sm" value={Employee.chief.description} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PersonalData;