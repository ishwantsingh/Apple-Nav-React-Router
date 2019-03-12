import React, { Component } from "react";
import { Link } from "react-router-dom";

class SubNav extends Component {
  render(props) {
    return (
      <div>
        {console.log(`${this.props.page.name}1`)}
        <nav>
          <Link to={`${this.props.page.name}1`}>1</Link>
          <Link to={`${this.props.page.name}2`}>2</Link>
        </nav>
      </div>
    );
  }
}

export default SubNav;
