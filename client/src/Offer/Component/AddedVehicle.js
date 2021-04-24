import React from "react";

const AddedVehicle = () => {
  return (
    <div className="card m-2 shadow bg-white rounded">
      <div className="card-body d-flex justify-content-around">
        <div className="m-2">
          <img src="/mini.png" alt="Card image cap" style={{ width: "5rem" }} />
        </div>
        <div className="m-2">
          <p>Name</p>
          <p>Number</p>
        </div>
      </div>
    </div>
  );
};

export { AddedVehicle };
