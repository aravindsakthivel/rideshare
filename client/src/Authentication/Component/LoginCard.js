import React, { useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";

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
    const mob = loginData.mobile;
    const data = { name, mob };
    const config = {
      method: "post",
      url: "http://localhost:3333/api/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await Axios(config);
      localStorage.setItem("user", JSON.stringify(response.data.data.user))
      router.push("/otp")
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
