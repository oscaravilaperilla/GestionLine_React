import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Image } from 'react-bootstrap';
const PersonalData = ({ Employee, user, ...props }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Image className="User-image" src={user.photoURL} rounded />
                </div>
                <div className="col-10">
                    <div className="card border-right-0 border-left-0 border-top-0 ">
                        <div className="text-left bg-white">
                            <h5>Personal Info</h5>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <div className="row">
                                    <label className="col-sm-3 col-form-label" >Name</label>
                                    <div className="col-sm-9">
                                        <input className="form-control form-control-sm" id="ex1" value={Employee.name + " " + Employee.lastName + " " + (Employee.secondLastName ? Employee.secondLastName : "")} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <div className="row">
                                    <label className="col-sm-3 col-form-label" for="ex1">Position</label>
                                    <div className="col-sm-9">
                                        <input className="form-control form-control-sm" id="ex1" value={Employee.position.description} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <div className="row">
                                    <label className="col-sm-3 col-form-label" for="ex1">Position</label>
                                    <div className="col-sm-9">
                                        <input className="form-control form-control-sm" id="ex1" value={Employee.position.description} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <div className="row">
                                    <label className="col-sm-3 col-form-label" >Name</label>
                                    <div className="col-sm-9">
                                        <input className="form-control form-control-sm" id="ex1" value={Employee.name + " " + Employee.lastName + " " + (Employee.secondLastName ? Employee.secondLastName : "")} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <div className="row">
                                    <label className="col-sm-3 col-form-label" for="ex1">Position</label>
                                    <div className="col-sm-9">
                                        <input className="form-control form-control-sm" id="ex1" value={Employee.position.description} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <div className="row">
                                    <label className="col-sm-3 col-form-label" for="ex1">Position</label>
                                    <div className="col-sm-9">
                                        <input className="form-control form-control-sm" id="ex1" value={Employee.position.description} type="text" placeholder="Readonly input here…" readOnly></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalData;