import Head from "next/head";
import { OTP } from "../src/Authentication/Component/OtpCard";
import { withIronSession } from "next-iron-session";

const OtpPage = () => {
  return (
    <>
      <Head>
        <title>Ride Share | OTP</title>
        <link rel="icon" href="/icons8-carpool-26.png" />
      </Head>
      <OTP />
    </>
  );
};

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");

    if (user) {
      res.statusCode = 404;
      res.end();
      return { props: {} };
    }

    return {
      props: { error: false },
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

export default OtpPage;
