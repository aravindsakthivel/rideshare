import React from "react";
import { OfferRide } from "../../src/Offer/OfferRide";
import { withIronSession } from "next-iron-session";

const Offer = ({ user }) => {
  return <OfferRide user={user} />;
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

export default Offer;
