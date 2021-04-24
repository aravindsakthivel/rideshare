import Head from "next/head";
import { Login } from "../src/Authentication/Component/LoginCard";
import { withIronSession } from "next-iron-session";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Ride Share | Login</title>
        <link rel="icon" href="/icons8-carpool-26.png" />
      </Head>
      <Login />
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

export default LoginPage;
