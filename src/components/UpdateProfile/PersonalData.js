import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const PersonalData = ({ Employee, ...props }) => {
    return (
        <div>
            <div class="form-group row">
                <div class="col-3 form-inline">
                    <label className="form-control-sm" for="ex1">Name</label>
                    <input className="form-control form-control-sm" id="ex1" value={Employee.Name + " " + Employee.LastName + " " + (Employee.SecondLastName ? Employee.SecondLastName : "")} type="text" placeholder="Readonly input here…" readOnly></input>
                </div>
                <div class="col-3 form-inline">
                    <label className="form-control-sm" for="ex2">Position</label>
                    <input className="form-control form-control-sm" id="ex2" value={Employee.Position} type="text" placeholder="Readonly input here…" readOnly></input>
                </div>
            </div>
        </div>

    );
}

export default PersonalData;