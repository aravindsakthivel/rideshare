import React, { useState } from "react";

const AddNewVehicle = () => {
  let preVehicleinfo = {
    type: "",
    name: "",
    number: "",
    "r/cBookNumber": "",
    insuranceNo: "",
    licenseNo: "",
  };
  const [vehicleInfo, addvehicleInfo] = useState(preVehicleinfo);
  const handleChange = (e) => {
    addvehicleInfo({ ...vehicleInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(vehicleInfo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row d-flex flex-row justify-content-around m-2 flex-wrap">
        <div className="form-group col-md-3 m-2">
          <select
            id="vehicleType"
            name="type"
            className="form-control"
            onChange={handleChange}
            required
          >
            <option>Vehicle Type</option>
            <option value="mini">Mini</option>
            <option value="sedan">Sedan</option>
            <option value="suv">Suv</option>
          </select>
        </div>
        <div className="form-group col-md-3 m-2" onChange={handleChange}>
          <input
            type="text"
            className="form-control"
            id="vehicleName"
            name="name"
            placeholder="Vehicle Name"
            required
          />
        </div>
        <div className="form-group col-md-3 m-2" onChange={handleChange}>
          <input
            type="text"
            className="form-control"
            id="licenseNumber"
            name="number"
            placeholder="License plate Number"
            required
          />
        </div>
        <div className="form-group col-md-3 m-2" onChange={handleChange}>
          <input
            type="text"
            className="form-control"
            id="r/cbooknumber"
            name="r/cBookNumber"
            placeholder="R/C Book No"
            required
          />
        </div>
        <div className="form-group col-md-3 m-2" onChange={handleChange}>
          <input
            type="text"
            className="form-control"
            id="insuranceNo"
            name="insuranceNo"
            placeholder="Insurance No"
            required
          />
        </div>
        <div className="form-group col-md-3 m-2" onChange={handleChange}>
          <input
            type="text"
            className="form-control"
            id="licenseNo"
            name="licenseNo"
            placeholder="Driving License No"
            required
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
};

export { AddNewVehicle };
