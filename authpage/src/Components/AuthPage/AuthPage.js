import React from "react";
import LoginForm from "../Login";
import "./AuthPage.css";
import logo from "../../logo.svg";

function AuthPage() {
  return (
    <div className="auth-container">
      <div className="logo-container"></div>
      <div className="auth-heading">
        {/* <h3> */}
        SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
        {/* </h3> */}
      </div>
      <div className="auth-form-container">
        <div className="login-signup">
          <span id="login">Login </span> <span id="signup"> Signup</span>
        </div>

        <div className="login">
          <LoginForm />
        </div>
        <div className="signup"></div>
      </div>
    </div>
  );
}

export default AuthPage;
