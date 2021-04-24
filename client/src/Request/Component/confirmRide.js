import React, { useState } from "react";
import { AddedVehicle } from "../../Offer/Component/AddedVehicle";

const ConfirmBlock = () => {
  const [confirmInfo, setconfirmInfo] = useState("");
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="input-group mb-3 mt-3 w-75">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              To
            </span>
          </div>
          <input
            type="text"
            className="form-control border-dark"
            aria-label="to"
            aria-describedby="to"
            disabled
          />
        </div>
      </div>
      <div className="d-flex justify-content-around ">
        <AddedVehicle/>
        <div>
          <input
            className="form-control mt-2"
            onChange={(e) => setconfirmInfo(e.target.value)}
            placeholder="From"
          />
          <button className="btn btn-primary mb-2 mt-3 ">Request Ride</button>
        </div>
      </div>
    </>
  );
};

export { ConfirmBlock };
