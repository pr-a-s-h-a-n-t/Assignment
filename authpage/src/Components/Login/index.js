import React from "react";
import "./Login.css";
import SocialLogin from "../SocicalLogin/index"
function LoginForm() {
  return (
    <>
      <div className="login-input-container">
        <input type="text" id="email" placeholder="Email Address" />
        <input type="Password" id="password" placeholder="Password" />
      </div>
      <div>
        <button
          id="login-btn"
          onClick={() => {
            console.log("Login");
          }}
        >
          LOGIN
        </button>
      </div>
      <div>
        <span>
          <h4>Forgot Password</h4>
        </span>
      </div>
      <div className="SocialLogin-container">
      <SocialLogin />
      </div>
    </>
  );
}

export default LoginForm;
