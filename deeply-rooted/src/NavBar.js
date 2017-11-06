import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default NavBar;
