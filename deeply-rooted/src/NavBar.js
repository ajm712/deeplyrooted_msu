import React, { Component } from 'react';
import './NavBar.css';

//Code for navigation bar
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
