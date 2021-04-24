import React from "react";
import { AddedVehicle } from "./Component/AddedVehicle";
import { AddNewVehicle } from "./Component/AddNewVehicle";

const OfferRide = () => {
  return (
    <>
      {" "}
      <div className="d-flex justify-content-center">
        {" "}
        <h2>Available Vehicle</h2>
      </div>
      <div className="d-flex justify-content-around m-2">
        {[0, 1, 2, 3].map((val) => (
          <AddedVehicle key={val} />
        ))}
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        {" "}
        <h2>Add New Vehicle</h2>
      </div>
      <AddNewVehicle />
    </>
  );
};

export { OfferRide };
