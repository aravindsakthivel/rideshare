import React, { useState } from "react";
import { useRouter } from "next/router";

const OTP = () => {
  const router = useRouter();

  const [otp, setotp] = useState("");

  const handleInput = (e) => {
    setotp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "aravind", mobile: "124530", userId: 15 }),
      });
      // after got the data send and get data
      if (response.ok) {
        localStorage.setItem("isAuth", true)
        return router.push("/");
      }
    } catch (err) {
      console.log(err)
      alert("something went wrong");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5 shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <form className="form-signin" onSubmit={handleSubmit}>
                  <input
                    style={{ marginBottom: 15 }}
                    type="number"
                    id="otp"
                    name="otp"
                    className="form-control"
                    placeholder="OTP"
                    required
                    autoFocus
                    onChange={handleInput}
                  />
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Confirm
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OTP };
