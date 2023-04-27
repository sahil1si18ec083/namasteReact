import React from "react";
import { imageUrl } from "./Utility/Constant";
const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo-container">
          <img src={imageUrl} alt="Loading" style={{ width: "100%" }} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us </li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
