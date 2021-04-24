import React, { useState, useEffect } from "react";
import { MapContainer } from "../../src/Offer/Component/GoogleMap";
import { TripInfo } from "../../src/Offer/Component/TripInfo";

const NewTrip = () => {
  return (
    <>
      <MapContainer />
      <TripInfo />
    </>
  );
};

export default NewTrip;
