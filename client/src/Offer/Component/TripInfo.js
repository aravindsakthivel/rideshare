import React, { useState } from "react";

const TripInfo = () => {
  const [tripInfo, addTripInfo] = useState({ from: "", to: "", charges: "" });
  const handleChange = (e) => {
    addTripInfo({ ...tripInfo, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form className="d-flex flex-row mt-3 justify-content-around">
        <div className="col-9">
          <div className="form-group col-md-4 m-2" onChange={handleChange}>
            <input
              type="text"
              className="form-control"
              id="from"
              name="from"
              placeholder="From"
              required
            />
          </div>
          <div className="form-group col-md-4 m-2" onChange={handleChange}>
            <input
              type="text"
              className="form-control"
              id="to"
              name="to"
              placeholder="To"
              required
            />
          </div>
          <div className="form-group col-md-4 m-2" onChange={handleChange}>
            <input
              type="number"
              className="form-control"
              id="charges"
              name="charges"
              placeholder="Charges"
              required
            />
          </div>
        </div>
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
