import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/mac/">Mac</Link>
          <Link to="/ipad/">Ipad</Link>
          <Link to="/iphone/">Iphone</Link>
          <Link to="/watch/">Watch</Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
