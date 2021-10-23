import React from "react";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header>
      <div className="container__header">
        <div className="wrapper__title">
          <h1>Healthy Food</h1>
        </div>
          <Navbar />
      </div>
    </header>
  );
}

export default Header;
