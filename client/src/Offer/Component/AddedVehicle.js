import React from "react";
import { useRouter } from "next/router";


const AddedVehicle = ({ car }) => {
  const router = useRouter();
  let chooseImg =
    car.type === "MINI"
      ? "/mini.png"
      : car.type === "SEDAN"
      ? "/sedan.png"
      : "/suv.png";
  const selectVehicle = () => {
    let selectedCar = localStorage.setItem("selectedCar", JSON.stringify(car))
    router.push("/offerRide/newTrip");
  };
  return (
    <div className="card m-2 shadow bg-white rounded">
      <div className="card-body d-flex justify-content-around">
        <div className="m-2">
          <img src={chooseImg} alt="Card image cap" style={{ width: "5rem" }} />
        </div>
        <div className="m-2">
          <p>{car.name}</p>
          <p>{car.model}</p>
          <button className="btn btn-primary" onClick={selectVehicle}>Select</button>
        </div>
      </div>
    </div>
  );
};

export { AddedVehicle };
