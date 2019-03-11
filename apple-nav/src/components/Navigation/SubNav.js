import React, { Component } from "react";
import { Link } from "react-router-dom";

class SubNav extends Component {
  render(props) {
    return (
      <div>
        {console.log(`${this.props.page.name}1`)}
        <nav>
          <Link to={`${this.props.page.name}1`} replace>
            1
          </Link>
          <Link to={`${this.props.page.name}2`} replace>
            2
          </Link>
          <Link to={`${this.props.page.name}3`} replace>
            3
          </Link>
        </nav>
      </div>
    );
  }
}

export default SubNav;
