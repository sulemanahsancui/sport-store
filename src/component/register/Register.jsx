import React, { useState } from "react";
const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onhandlechange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const formData = JSON.stringify(data);
    localStorage.setItem("user", formData);
  };
  const { username, email, password } = data;
  return (
    <>
      <div className="container">
        <h1>Register</h1>
        <form>
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form3Example1" class="form-control" />
                <label class="form-label" for="form3Example1">
                  First name
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form3Example2" class="form-control" />
                <label class="form-label" for="form3Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control" />
            <label class="form-label" for="form3Example3">
              Email address
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="password" id="form3Example4" class="form-control" />
            <label class="form-label" for="form3Example4">
              Password
            </label>
          </div>
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
