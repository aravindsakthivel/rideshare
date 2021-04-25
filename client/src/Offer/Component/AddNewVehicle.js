import React, { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";

const AddNewVehicle = ({ user }) => {
  const router = useRouter()
  let preVehicleinfo = {
    type: "",
    name: "",
    model: "",
  };
  const [vehicleInfo, addvehicleInfo] = useState(preVehicleinfo);
  const handleChange = (e) => {
    addvehicleInfo({ ...vehicleInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let { userId } = user;
    const config = {
      method: "post",
      url: "http://localhost:3333/api/cars",
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...vehicleInfo, user_id: userId },
    };
    try {
      const response = await Axios(config);
      localStorage.setItem("selectedCar", JSON.stringify(vehicleInfo));
      router.push("/offerRide/newTrip");
    } catch (err) {
      alert("Something went wrong");
    }
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
            <option value="MINI">Mini</option>
            <option value="SEDAN">Sedan</option>
            <option value="SUV">Suv</option>
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
            id="model"
            name="model"
            placeholder="Year model"
            required
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Add Vehicle
        </button>
      </div>
    </form>
  );
};

export { AddNewVehicle };
