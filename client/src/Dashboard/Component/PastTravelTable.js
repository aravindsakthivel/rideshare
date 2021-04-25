import React, { useEffect, useState } from "react";
import Axios from "axios";

const PastTravelInfo = () => {
  const [status, changeStaus] = useState({ state: false, rides: "" });
  const [choosen, changeChoosen] = useState("off");
  useEffect(async () => {
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
      changeStaus({ state: true, rides: response.data.rides });
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
          {status.state && (
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Whom</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Distance</th>
                  <th scope="col">Cost</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <th scope="row">1</th>
                  <td>10/11</td>
                  <td>Otto</td>
                  <td>abc</td>
                  <td>kdr</td>
                  <td>7km</td>
                  <td>56</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>jut</td>
                  <td>ble</td>
                  <td>5km</td>
                  <td>45</td>
                </tr> */}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export { PastTravelInfo };
