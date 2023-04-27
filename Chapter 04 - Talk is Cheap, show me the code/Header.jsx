import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo-container">
          <img
            src="https://raw.githubusercontent.com/chetannada/Namaste-React/main/Chapter%2004%20-%20Talk%20is%20Cheap%2C%20show%20me%20the%20code/Images/Food%20Fire%20Logo.png"
            alt=""
            style={{ width: "100%" }}
          />
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
