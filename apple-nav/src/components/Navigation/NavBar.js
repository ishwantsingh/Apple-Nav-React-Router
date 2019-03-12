import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import AppleLogo from "../Navigation/apple_logo_PNG19680.png";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <Link style={{ textDecoration: "none" }} className="nav-link" to="/">
            <img src={AppleLogo} className="logo" alt="Apple Logo" />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="nav-link"
            to="/mac/"
          >
            Mac
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="nav-link"
            to="/ipad/"
          >
            Ipad
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="nav-link"
            to="/iphone/"
          >
            Iphone
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="nav-link"
            to="/watch/"
          >
            Watch
          </Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
