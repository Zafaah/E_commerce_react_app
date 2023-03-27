import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import welcomeimg from "./welcomeback.svg";
import "./Login.scss";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [info, setInfo] = useState(null);

  const [message, setMessage] = useState("");

  const infoData = () => {
    fetch(`http://localhost:3100/Users?email=${email}&&password=${password}`)
      .then((response) => response.json())
      .then((Users) => setInfo(Users))
      .catch((error) => {
        console.log(error);
      });
  };
  const nav = useNavigate();
  const check = () => {
    if (info) {
      nav("/");
    } else setMessage("Incorrect username or password");
  };
  const handlesubmitt = (event) => {
    event.preventDefault();
    infoData(email, password);
    check();
  };
  return (
    <div className="main-login">
      <div className="login-contain">
        <div className="left-side">
          <form onSubmit={handlesubmitt}>
            {message && (
              <div className="aler alert-danger rounded p-2 m-auto mb-3 mt-0 text-center">
                {message}
              </div>
            )}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email1"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your pass.."
              id="pass1"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button
              type="submit"
              id="sub_butt"
              style={{ display: "block", margin: "auto", width: "70%" }}
            >
              Sign In
            </button>
          </form>
          <div className="footer">
            <p className="text-center mt-4">
              Don't have account?
              <Link className="link" to={"/Register"}>
                register Now.
              </Link>
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="welcomeNote">
            <h3>Welcome Back!</h3>
          </div>
          <div className="welcomeImg">
            <img src={welcomeimg} id="wel-img-id" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
