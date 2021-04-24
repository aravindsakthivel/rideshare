import React, { useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 12.8340321,
    lng: 80.1383116,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD99O8Y3NXQcTKhtaMMyBZJfs_rGTJaE7w">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export { MapContainer };
