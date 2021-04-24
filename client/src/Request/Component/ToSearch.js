import React, { useState } from "react";
import { MapContainer } from "./GoogleMap";

const ToBlock = () => {
  const [searchTo, getSearchTo] = useState("");
  const handleChange = (e) => {
    getSearchTo(e.target.value);
  };
  return (
    <div className="d-flex justify-content-center">
      <div class="input-group mb-3 mt-3 w-75">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            To
          </span>
        </div>
        <input
          type="text"
          class="form-control border-dark"
          aria-label="to"
          aria-describedby="to"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export { ToBlock };
