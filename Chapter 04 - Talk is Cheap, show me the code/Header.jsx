import React from "react";
import { imageUrl } from "./Utility/Constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import UserContext from "../Chapter 10- Jo dikhta hai vo bikta hai/utils/userContext";
import UserContext from "../Chapter 10- Jo dikhta hai vo bikta hai/utils/userContext";
import FoodifyIcon from "./Utility/FoodifyIcon";
const Header = () => {
  const userObj = useContext(UserContext);

  let [title, setTitle] = useState("Food Villa");
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <React.Fragment>
      <div className="flex justify-between margin mt-2 mb-2 ml-4 mr-4 items-center">
        <div className="logo-container">
          <a href="/">
            <FoodifyIcon className="h-20" />
          </a>
        </div>
        {/* <div className="nav-items flex">
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
          </ul>

          <div>
            {" "}
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{userObj.userObj.name}</span>
          </div>

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
        </div> */}
        <div>
          <ul className="flex py-4 px-4 text-black">
            <li className="px-2 hover:text-orange-400 text-l font-medium">
              <Link to="/cart" data-testid="cart">
                Cart 🛒 (0)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
