import React from "react";
import LoginForm from "../Login";
import "./AuthPage.css";
 

function AuthPage() {
  return (
    <div className="auth-container">
      <div className="logo-container"></div>
      <div className="auth-heading">
        SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
      </div>
      <div className="auth-form-container">
        <div className="login-signup">
          <span id="login">Login </span> <span id="signup"> Signup</span>
          <hr />
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
