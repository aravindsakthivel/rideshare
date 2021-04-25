import React, { useState, useEffect } from "react";
import Axios from "axios";

const TripInfo = () => {
  const [tripInfo, addTripInfo] = useState({
    currentLocation: "",
    destination: "",
    price_per_km: "",
  });
  const handleChange = (e) => {
    addTripInfo({ ...tripInfo, [e.target.name]: e.target.value });
  };
  const [selectedVehicle, addSelected] = useState({
    state: false,
    name: "",
    number: "",
    chooseImg: "",
  });
  useEffect(() => {
    let getSel = JSON.parse(localStorage.getItem("selectedCar"));
    let chooseImg =
      getSel.type === "MINI"
        ? "/mini.png"
        : getSel.type === "SEDAN"
        ? "/sedan.png"
        : "/suv.png";
    addSelected({
      state: true,
      name: getSel.name,
      number: getSel.model,
      chooseImg: chooseImg,
    });
  }, []);

  const submitRide = async (e) => {
    e.preventDefault();
    let userInfo = JSON.stringify(localStorage.getItem("user"));
    let { _id: user_id } = userInfo;
    const config = {
      method: "post",
      url: "http://localhost:3333/api/ride_by",
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...tripInfo, user_id },
    };
    try {
      const response = await Axios(config);
      alert("Ride added");
      router.push("/");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <form
        className="d-flex flex-row mt-3 justify-content-around"
        onSubmit={submitRide}
      >
        <div className="col-3">
          <div className="form-group col-md-12 m-2" onChange={handleChange}>
            <input
              type="text"
              className="form-control"
              id="from"
              name="currentLocation"
              placeholder="From"
              required
            />
          </div>
          <div className="form-group col-md-12 m-2" onChange={handleChange}>
            <input
              type="text"
              className="form-control"
              id="to"
              name="destination"
              placeholder="To"
              required
            />
          </div>
          <div className="form-group col-md-12 m-2" onChange={handleChange}>
            <input
              type="number"
              className="form-control"
              id="charges"
              name="price_per_km"
              placeholder="Charges"
              required
            />
          </div>
        </div>
        {selectedVehicle.state && (
          <div>
            <div
              className="card m-2 shadow bg-white rounded"
              style={{ width: "18rem" }}
            >
              <div className="card-body d-flex justify-content-around">
                <div className="m-2">
                  <img
                    src={selectedVehicle.chooseImg}
                    alt="Card image cap"
                    style={{ width: "5rem" }}
                  />
                </div>
                <div className="m-2">
                  <p>{selectedVehicle.name}</p>
                  <p>{selectedVehicle.number}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Ride Info</h5>
              <p className="card-text">
                You can make {tripInfo.charges} from this trip, but be safe
              </p>
              <button type="submit" className="btn btn-primary">
                Offer Ride
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { TripInfo };
