import React from "react";
import { OfferRequestBlock } from "./Component/OfferRequestBlock";
import { PastTravelInfo } from "./Component/PastTravelTable";

const Dashboard = () => {
  return (
    <>
      <OfferRequestBlock />
      <PastTravelInfo />
    </>
  );
};

export { Dashboard };
