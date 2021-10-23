import React from "react";

function Navbar() {
  return (
    <div className="wrapper__navbar">
      <ul className="list__navbar">
        <li className="list__navbar-item">HEALTHY RECIPES</li>
        <li className="list__navbar-item">BLOG</li>
        <li className="list__navbar-item">JOIN</li>
        <li className="list__navbar-btn">
          <button className="register">REGISTER</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
