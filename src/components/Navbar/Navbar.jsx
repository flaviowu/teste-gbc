import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="wrapper__navbar">
        <ul className="list__navbar">
          <li className="list__navbar-item">HEALTHY RECIPES</li>
          <li className="list__navbar-item">BLOG</li>
          <li className="list__navbar-item">JOIN</li>
        </ul>
      </div>
      <div className="button__register">
        <Link to="/signUp">
          <button className="register">REGISTER</button>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
