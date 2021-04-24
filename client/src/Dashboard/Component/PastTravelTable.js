import React from "react";

const PastTravelInfo = () => {
  return (
    <>
      <div
        className="btn-group btn-group-toggle mt-2"
        data-toggle="buttons"
        style={{ float: "right" }}
      >
        <label className="btn btn-secondary active">
          <input
            type="radio"
            name="options"
            id="option1"
            autoComplete="off"
            defaultChecked
          />{" "}
          Offered
        </label>
        <label className="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off" />{" "}
          Taken
        </label>
      </div>
      <div className="card mt-5">
        <div className="card-body">
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
              <tr>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { PastTravelInfo };
