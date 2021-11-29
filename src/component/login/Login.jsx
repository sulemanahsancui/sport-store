import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./login.scss";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const naviagte = useNavigate();
  const onhandlechange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user", []));

    if (userData.email !== email) {
      setError(true);
    } else if (userData.password !== password) {
      setError(true);
    } else {
      naviagte("/");
      setError(false);
    }
  };
  const { email, password } = data;
  return (
    <div className="container mb-6">
      <h1>Sign in </h1>
      <form>
        <div class="form-outline mb-4 ">
          <input type="email" id="form1Example1" class="form-control" />
          <label class="form-label" for="form1Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form1Example2" class="form-control" />
          <label class="form-label" for="form1Example2">
            Password
          </label>
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
                checked
              />
              <label class="form-check-label" for="form1Example3">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-block">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default Login;
