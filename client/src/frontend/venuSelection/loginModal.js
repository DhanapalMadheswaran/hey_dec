import React, { useState } from "react";

function LoginModal({ handleSubmit, value }) {
  const [input, setInput] = useState({ type: "login" });
  const [data, setData] = useState({ type: "register" });
  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <div class="border-popup">
        <div class="row login-block">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="login-part">
              <h3>Login</h3>

              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="Enter Email id"
                onChange={inputChange}
                required
              />

              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={inputChange}
                required
              />

              <div class="login-btn">
                <button
                  className="tablinks btn btn-heyEvents"
                  onClick={(e) => handleSubmit(input)}
                >
                  Login
                </button>
              </div>

              <div class="row">
                <div class="other-option">
                  <p>Or</p>

                  <a href="#">
                    <p>Login with Social Media</p>
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 login-option">
                  <button
                    class="btn btn-heyEvents"
                    id="apply_coupon"
                    type="button"
                  >
                    <i class="fab fa-facebook"></i>Facebook
                  </button>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 login-option">
                  <button
                    class="btn btn-heyEvents"
                    id="apply_coupon"
                    type="button"
                  >
                    <i class="fab fa-google"></i>Google
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="register-part">
              <h3>Registration</h3>

              <div class="row">
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  id="username"
                  autoComplete="new-password"
                  onChange={onChange}
                  placeholder="Enter username"
                  required
                />

                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Email id"
                  name="email"
                  autoComplete="new-password"
                  onChange={onChange}
                  required
                />

                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onChange}
                  placeholder="Password"
                  required
                />

                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  id="phone"
                  autoComplete="new-password"
                  onChange={onChange}
                  placeholder="Enter Phone Number"
                  required
                />

                <div class="reg-btn">
                  <button
                    class="tablinks btn btn-heyEvents"
                    onClick={(e) => handleSubmit(data)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
