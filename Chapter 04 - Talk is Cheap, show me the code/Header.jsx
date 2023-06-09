import React from "react";
import { imageUrl } from "./Utility/Constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  let [title, setTitle] = useState("Food Villa");
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo-container">
          <a href="/">
            <img
              src={imageUrl}
              alt="Loading"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </div>
        <div className="nav-items">
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>

            <Link to={"/about"}>
              <li>About us</li>
            </Link>

            <Link to={"/contact"}>
              <li>Contact us</li>
            </Link>
            <Link to={"/instaMart"}>
              <li>InstaMart</li>
            </Link>
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
