import React, { useEffect, useState } from "react";
import Axios from "axios";

const PastTravelInfo = () => {
  const [rides, setRides] = useState([]);
  const [choosen, changeChoosen] = useState("off");
  useEffect(async () => {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    let { _id: user_id } = userInfo;
    const config = {
      method: "get",
      url: `http://localhost:3333/api/ride_by`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await Axios(config);
      console.log(response.data.data.rides)
      setRides(response.data.data.rides);
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  }, []);
  const viewRidesTaken = async (e) => {
    changeChoosen(e.target.value);
    let userInfo = JSON.parse(localStorage.getItem("user"));
    let { _id: user_id } = userInfo;
    const config = {
      method: "get",
      url: `http://localhost:3333/api/ride/previous/taken/${user_id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await Axios(config);
      changeStaus({ rides: response.data.rides });
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };
  const viewRidesBy = async (e) => {
    changeChoosen(e.target.value);
    let userInfo = JSON.parse(localStorage.getItem("user"));
    let { _id: user_id } = userInfo;
    const config = {
      method: "get",
      url: `http://localhost:3333/api/ride/previous/by/${user_id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await Axios(config);
      changeStaus({ state: true, rides: response.data.rides });
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };
  return (
    <>
      <div
        className="btn-group btn-group-toggle mt-2"
        data-toggle="buttons"
        style={{ float: "right" }}
      >
        <form>
          <label className="btn btn-secondary active">
            <input
              type="radio"
              name="offered"
              id="option1"
              value="off"
              checked={choosen === "off"}
              autoComplete="off"
              onChange={viewRidesBy}
            />{" "}
            Offered
          </label>
          <label className="btn btn-secondary">
            <input
              type="radio"
              name="taken"
              id="option2"
              value="tak"
              checked={choosen === "tak"}
              autoComplete="off"
              onChange={viewRidesTaken}
            />{" "}
            Taken
          </label>
        </form>
      </div>
      <div className="card mt-5">
        <div className="card-body">
          {rides && (
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  {/* <th scope="col">Date</th> */}
                  <th scope="col">Whom</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Take Ride</th>
                </tr>
              </thead>
              <tbody>
                {rides.map(ride =>
                  <tr>
                    <th scope="row">{ride._id}</th>
                    {/* <td>{new Date(ride.createdAt).toLocaleDateString() + "  " + new Date(ride.createdAt).toLocaleTimeString()}</td> */}
                    <td>{ride.user_id.name}</td>
                    <td>{ride.current_location}</td>
                    <td>{ride.destination}</td>
                    <td>{ride.price_per_km} / km</td>
                    <td>
                      <button >TAKE RIDE</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export { PastTravelInfo };
