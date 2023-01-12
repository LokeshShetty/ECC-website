import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Ethic Craft Club
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn btnJoin1"
            style={{
              "--bs-btn-padding-y": ".35rem",
              "--bs-btn-padding-x": ".7rem",
              "--bs-btn-font-size": ".90rem",
              borderRadius: "20px",
            }}
            data-bs-toggle="tooltip"
            title="Become a member!"
          >
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
