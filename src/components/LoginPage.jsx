import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const API_KEY = "https://65656875eb8bb4b70ef17eaa.mockapi.io/user";

  const [user, setuser] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const checkUserExists = async (username, password) => {
    const response = await axios.get(API_KEY);

    return response.data.some(
      (data) => data.Username == username && data.password == password
    );
  };

  const handleName = (e) => {
    setuser({ ...user, username: e.target.value });
  };

  const handlePassword = (e) => {
    setuser({ ...user, password: e.target.value });
  };

  const handleLogin = async () => {
    const userExist = await checkUserExists(user.username, user.password);

    if (userExist) {

      navigate("/home");
    } else {
      alert("User does not exists");
    }
  };

  const goToSignup = () => {
    navigate('/signup');
  }

  return (
    <>
      <div className="login-page-wrapper">
        <div className="logo-container"></div>
        <div id="login-form">
          <h2 className="title">Login to YTube</h2>
          <input
            className="input-field"
            type="text"
            placeholder="Username"
            onChange={handleName}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          <button onClick={handleLogin} className="submit-button" type="submit">
            Login
          </button>
          <p style={{ color: "white", marginLeft: 100 }}>
            Don't have a account ?{" "}
            <a
              onClick={goToSignup}
              target="_blank"
              style={{ color: "white", marginLeft: 10 }}
            >
              signUp
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
