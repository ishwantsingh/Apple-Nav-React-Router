import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SubNav.css";

class SubNav extends Component {
  render(props) {
    return (
      <div>
        {console.log(`${this.props.page.name}1`)}
        <nav className="sub-nav">
          <Link
            style={{ textDecoration: "none" }}
            className="sub-link"
            to={`${this.props.page.name}1`}
          >
            1
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="sub-link"
            to={`${this.props.page.name}2`}
          >
            2
          </Link>
        </nav>
      </div>
    );
  }
}

export default SubNav;
