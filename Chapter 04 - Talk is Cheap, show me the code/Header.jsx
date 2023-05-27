import React from "react";
import { imageUrl } from "./Utility/Constant";
import { useState } from "react";
const Header = () => {
  let [title, setTitle] = useState("Food Villa");
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo-container">
          <a href="/">
            <img src={imageUrl} alt="Loading" style={{ width: "100%" }} />
          </a>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us </li>
            <li>Contact us</li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <li>
              {isLoggedin === true ? (
                <button
                  className="logout-btn"
                  onClick={() => setIsLoggedin(false)}
                >
                  LogOut
                </button>
              ) : (
                <button
                  className="login-btn"
                  onClick={() => setIsLoggedin(true)}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
