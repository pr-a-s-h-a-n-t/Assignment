import React from "react";
import "./SocialLogin.css";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";

function SocialLogin() {
  return (
    <div className="socialLogin-container">
      <span>or login with</span>
      <div className="socialLogin-icon">
        <FaGoogle />
        <FaFacebook />
        <FaTwitter />

      </div>

      <div>
        <span>Don’t have an account?</span>
        <span className="red"> Create new now!</span>
      </div>
      <div className="tnc">
        <span>By signing up, you are agree with our </span>
        <span className="red">Terms & Conditions</span>
      </div>
    </div>
  );
}

export default SocialLogin;
