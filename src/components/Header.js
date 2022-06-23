import React from "react";
import dish from "../images/dish.png";
import "./style.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-black bg-black  ">
        <div class="container ">
          <a class="navbar-brand m-2" href="/">
            <img
              src={dish}
              height="36"
              alt="logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
            <small className="white mx-2 ">Kin Kao | Just eat</small>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <NavLink className="nav-link white" to="/homepage">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link white" to="/aboutuspage">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link white" to="/contactpage">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="btn btn-success white" to="/loginpage">
                  Login/Registration
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
