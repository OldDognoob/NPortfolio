import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faEnvelope,
  faFileArt,
  faHome,
  faProjectDiagram,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
    return(
        <div>
            <header className="sticky-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand w-25" href="#">
                                <img className="w-75"src="icons/logo.png"  alt=""/>
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
                            
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Header;