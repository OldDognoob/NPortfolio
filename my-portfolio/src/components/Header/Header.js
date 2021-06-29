import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileAlt,
  faHome,
  faProjectDiagram,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand w-25" href="#">
                <img className="w-75" src="icons/logo.png" alt="" />
              </a>
              <button
                class="navbar-toggler bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-babel="Toggle navigation"
              >
                <span className="navbar-toggler-icon bg-white"></span>
              </button>
              <div
                class="myHeaderStyle collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul class="navbar-nav my-nav-style">
                  <li class="nav-item ms-1">
                    <NavLink
                      to="/"
                      exact={true}
                      className="nav-link text-white"
                      activeClassName="active"
                    >
                      <span>
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                      </span>{" "}
                      Home
                    </NavLink>
                  </li>
                  <li class="nav-item ms-1">
                    <NavLink
                      to="/about"
                      className="nav-link text-white"
                      activeClassName="active"
                    >
                      <span>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                      </span>{" "}
                      About Me
                    </NavLink>
                  </li>
                  {/* <li class="nav-item ms-1">
                    <NavLink
                      to="/resume"
                      className="nav-link text-white"
                      activeClassName="active"
                    >
                    </NavLink>
                  </li> */}
                  <li class="nav-item ms-1">
                    <NavLink
                      to="/projects"
                      className="nav-link text-white"
                      activeClassName="active"
                    >
                      <span>
                        <FontAwesomeIcon
                          icon={faProjectDiagram}
                        ></FontAwesomeIcon>
                      </span>{" "}
                      Projects
                    </NavLink>
                  </li>
                  <li class="nav-item ms-1">
                    <NavLink
                      to="/contact"
                      className="nav-link text-white"
                      activeClassName="active"
                    >
                      <span>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      </span>{" "}
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
