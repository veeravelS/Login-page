import React, { useState } from "react";
import "./Loginform.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

export const Loginform = () => {
    const [visible,setvisible] = useState(false);

    const togglelock = ()=>{
      setvisible(!visible);
    }
  return (
    <div className="wrapper">
      <form action="">
        <h1>login</h1> 
        <div className="input-box">
          <input type="text" placeholder="Enter username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type={visible ? "text":"password"}  placeholder="Enter password"  required />
          <FaUnlock className="icon" onClick={togglelock} />
          {visible ? <FaUnlock className="icon" onClick={togglelock} /> : <FaLock className="icon" onClick={togglelock} />}
        </div>
        <div className="remember-forget">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">forget password ?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account <a href=" https://veeravels.github.io/Form-validation/">register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
