import React from 'react';
import Select from 'react-select';

const LocationWork = ({ departments, ...props }) => {
    return (
        <div className="col-10">
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
                                    options={departments}
                                    isSearchable={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationWork;