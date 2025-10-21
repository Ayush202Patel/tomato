import React, { useState } from "react";
import "./LoginPopUp.css";
const LoginPopUp = () => {
  const [currState, setCurrState] = useState("SignUp");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
        </div>
      </form>
    </div>
  );
};

export default LoginPopUp;
