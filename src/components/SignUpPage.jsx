import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const API_KEY = "https://65656875eb8bb4b70ef17eaa.mockapi.io/user";

  const [user, setuser] = useState({
    Username: "",
    email: "",
    password: "",
    mobile: "",
  });

  const navigate = useNavigate();

  const checkUserExists = async (username, password) => {
    const response = await axios.get(API_KEY);

    return response.data.some(
      (data) => data.Username == username && data.password == password
    );
  };

  const handleName = (e) => {
    setuser({ ...user, Username: e.target.value });
  };

  const handleEmail = (e) => {
    setuser({ ...user, email: e.target.value });
  };

  const handlePassword = (e) => {
    setuser({ ...user, password: e.target.value });
  };

  const handleMobile = (e) => {
    setuser({ ...user, mobile: e.target.value });
  };

  const checkEmpty = () => {
    if (
      user.Username !== "" &&
      user.email !== "" &&
      user.password !== "" &&
      user.mobile !== ""
    ) {
      return true;
    } else return false;
  };

  const handleSignUp = async () => {
    const isEmpty = checkEmpty();

    if (isEmpty) {
      const userExist = await checkUserExists(user.Username, user.password);

      if (userExist) {
        navigate("/login");
      } else {
        axios.post(API_KEY, user);
        navigate('/home')
      }
    } else {
      alert("please fill all the fields");
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="login-page-wrapper">
        <div className="logo-container"></div>
        <div id="login-form">
          <h2 className="title">SignUp to YTube</h2>
          <input
            className="input-field"
            type="text"
            placeholder="Username"
            onChange={handleName}
          />
          <input
            className="input-field"
            type="text"
            placeholder="email"
            onChange={handleEmail}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Mobile"
            onChange={handleMobile}
          />
          <button
            onClick={handleSignUp}
            className="submit-button"
            type="submit"
          >
            SignUp
          </button>
          <p style={{ color: "white", marginLeft: 300 }}>
            Already have an account ?{" "}
            <a
              target="_blank"
              style={{ color: "white", marginLeft: 10 }}
              onClick={goToLogin}
            >
              Login
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
