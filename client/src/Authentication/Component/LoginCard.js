import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    name: "",
    mobile: "",
  });

  const handleInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = loginData.name;
    const mobile = loginData.mobile;
    try {
      return router.push("/otp");
      // const response = await fetch("http://localhost:3000/api/auth/session", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name, mobile }),
      // });
      // console.log(response);
      // if (response.ok) {

      // }
    } catch (err) {
      alert("Something went wrong");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5 shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" onSubmit={handleSubmit}>
                  <div className="form-label-group">
                    <input
                      style={{ marginBottom: 15 }}
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      autoFocus
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-label-group">
                    <input
                      style={{ marginBottom: 15 }}
                      name="mobile"
                      type="number"
                      id="number"
                      className="form-control"
                      placeholder="Mobile"
                      required
                      onChange={handleInput}
                    />
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    LOG IN
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

export { Login };
