import React from "react";
import Navbar from "../component/Navbar";

function HeaderComponent() {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="navbar-brand" id="brand">
            Frontend Development Bootcamp
          </div>
          <Navbar />
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
