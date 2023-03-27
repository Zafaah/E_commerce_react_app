import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "./registerPng.svg";
import Login from "../Login/Login";
function Register() {
  const [contact, setContact] = useState({
    fName: "",
    phone: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const nav = useNavigate();
  const { fName, phone, email, password, confirmPass } = contact;

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:3100/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    nav("/login");
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });

    if (confirmPass != password) {
      console.log("wrong");
    }
  }
  return (
    <div className="main-Register">
      <div className="right-side">
        <div className="body-right p-2">
          <div className="container p-3">
            <h3 className="m-2 text-center mb-4">Create Account!</h3>
            <form className="form" onSubmit={submitHandler}>
              <div className="input-group mb-3 ">
                <h5>Full Name</h5>
                <input
                  // className="form-control"
                  type="text"
                  onChange={handleChange}
                  name="fName"
                  value={fName}
                  placeholder="Enter First Name"
                />
              </div>

              <div className="input-group mb-3">
                <h5> Phone</h5>
                <input
                  // className="form-control"
                  onChange={handleChange}
                  name="phone"
                  value={phone}
                  placeholder="Enter your phone"
                />
              </div>
              <div className="input-group mb-3">
                <h5> Email</h5>
                <input
                  // className="form-control"
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={email}
                  placeholder="Enter your Email"
                />
              </div>

              <div className="input-group mb-3">
                <h5> Password</h5>
                <input
                  // className="form-control mx-auto mb-2 mb-lg-0"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Enter your Password"
                />
              </div>
              <div className="input-group mb-3">
                <h5> confirmPassword</h5>
                <input
                  // className="form-control"
                  onChange={handleChange}
                  name="confirmPass"
                  type="password"
                  value={confirmPass}
                  placeholder="Enter confirm Password"
                />
              </div>
              <button
                type="submit"
                id="sbtn"
                className="btn btn-secondary d-block m-auto mb-4"
              >
                Submitt
              </button>
            </form>
            <p className="text-center">
              Already have an Account?
              <Link id="Links-signin" to="/login">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
