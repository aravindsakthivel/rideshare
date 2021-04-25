import React, { useState, useEffect } from "react";
import { MapContainer } from "../../src/Offer/Component/GoogleMap";
import { TripInfo } from "../../src/Offer/Component/TripInfo";
import { withIronSession } from "next-iron-session";

const NewTrip = () => {
  return (
    <>
      <MapContainer />
      <TripInfo />
    </>
  );
};

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");

    if (!user) {
      res.statusCode = 404;
      res.end();
      return { props: {} };
    }

    return {
      props: { user },
    };
  },
  {
    cookieName: "rideshare_session_cookie",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: process.env.APPLICATION_SECRET,
  }
);

export default NewTrip;
