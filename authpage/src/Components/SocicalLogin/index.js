import React from "react";
import "./SocialLogin.css";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";

function SocialLogin() {
  return (
    <div className="socialLogin-container">
      <span id="login-with">or login with</span>
      <div className="socialLogin-icon-container">
        <FaGoogle style={{ color: "#f14336" }} />
        <FaFacebook style={{ color: "#3b5998 " }} />
        <FaTwitter style={{ color: "#38a1f3 " }} />
      </div>

      <div id="acct-container">
        <span>Don’t have an account?</span>
        <span className="red"> Create new now!</span>
      </div>
      <div id="tnc">
        <span>By signing up, you are agree with our</span>
        <span className="red" id="tnc-line"> &nbsp;Terms & Conditions</span>
      </div>
    </div>
  );
}

export default SocialLogin;
