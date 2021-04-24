import React from "react";
import styles from "../Styles/offerRequest.module.css";
import { useRouter } from "next/router";

const OfferRequestBlock = () => {
  const router = useRouter()
  return (
    <div>
      <img src="/coverMap.png" alt="coverImg" style={{ width: "100%" }} />
      <div className={styles.entBlock}>
        <button
          type="button"
          className="btn btn-secondary shadow p-3 mb-5 rounded"
          onClick={() => router.push("/offerRide")}
        >
          Offer Ride
        </button>
        <button
          type="button"
          className="btn btn-secondary shadow p-3 mb-5 rounded"
          onClick={() => router.push("/requestRide")}
        >
          Request Ride
        </button>
      </div>
    </div>
  );
};

export { OfferRequestBlock };
