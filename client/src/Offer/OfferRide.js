import React, { useEffect, useState } from "react";
import { AddedVehicle } from "./Component/AddedVehicle";
import { AddNewVehicle } from "./Component/AddNewVehicle";
import Axios from "axios";

const OfferRide = ({ user }) => {
  let [addedVehicle, toggleAdded] = useState({ state: false, cars: [] });
  useEffect(async () => {
    let { userId } = user;
    const config = {
      method: "get",
      url: `http://localhost:3333/api/cars/by_user/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await Axios(config);
      toggleAdded({ state: true, cars: response.data.data.cars });
    } catch (err) {
      alert("Something went wrong");
    }
  }, []);

  return (
    <>
      {" "}
      <div className="d-flex justify-content-center">
        {" "}
        <h2>Available Vehicle</h2>
      </div>
      <div className="d-flex justify-content-around m-2">
        {addedVehicle.state ? (
          addedVehicle.cars.map((car, ind) => (
            <AddedVehicle key={ind} car={car}/>
          ))
        ) : (
          <p>....isLoading</p>
        )}
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        {" "}
        <h2>Add New Vehicle</h2>
      </div>
      <AddNewVehicle user={user} />
    </>
  );
};

export { OfferRide };
