import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Dashboard } from "../src/Dashboard/Dashboard";
import GetGeoLocation from "../src/Common/Geolocation";

const Home = () => {
  const router = useRouter();
  const innerRef = useRef();

  const getLocation = () => {
    innerRef.current && innerRef.current.getLocation();
  };

  useEffect(() => {
    let isAuth = localStorage.getItem("isAuth");
    if (!isAuth) {
      router.push("/login");
    } else if (isAuth) {
      getLocation();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Ride Share</title>
        <link rel="icon" href="/icons8-carpool-26.png" />
      </Head>
      <Dashboard />
      <GetGeoLocation onError={(error) => console.log(error)} ref={innerRef} />
    </>
  );
};

export default Home;
