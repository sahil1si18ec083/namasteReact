import React from "react";
import { imageUrl } from "./Utility/Constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import UserContext from "../Chapter 10- Jo dikhta hai vo bikta hai/utils/userContext";
import UserContext from "../Chapter 10- Jo dikhta hai vo bikta hai/utils/userContext";
const Header = () => {
  const userObj = useContext(UserContext);

  let [title, setTitle] = useState("Food Villa");
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <React.Fragment>
      <div className="flex justify-between">
        <div className="logo-container">
          <a href="/">
            <img src={imageUrl} alt="Loading" className="h-28 pl-2" />
          </a>
        </div>
        <div className="nav-items">
          <ul className="flex py-10 ">
            <Link to={"/"}>
              <li className="px-2">Home</li>
            </Link>

            <Link to={"/about"}>
              <li className="px-2">About us</li>
            </Link>

            <Link to={"/contact"}>
              <li className="px-2">Contact us</li>
            </Link>
            <Link to={"/InstaMartAccordian"}>
              <li className="px-2"> InstaMart</li>
            </Link>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <span>{userObj.userObj.name}</span>
            <li>
              {isLoggedin === true ? (
                <button
                  className="logout-btn bg-sky-500"
                  onClick={() => setIsLoggedin(false)}
                >
                  LogOut
                </button>
              ) : (
                <button
                  className="login-btn font-bold text-xl bg-sky-500"
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
