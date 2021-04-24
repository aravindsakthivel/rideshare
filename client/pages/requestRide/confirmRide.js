import React from "react";
import { ConfirmBlock } from "../../src/Request/Component/confirmRide";
import { MapContainer } from "../../src/Request/Component/GoogleMap";
import { withIronSession } from "next-iron-session";

const Request = () => {
  return (
    <>
      <ConfirmBlock />
      <MapContainer />
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

export default Request;
