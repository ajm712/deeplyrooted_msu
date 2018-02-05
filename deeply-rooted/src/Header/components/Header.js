import React, { Component } from 'react';
import logo from '../../Images/deeply-rooted-logo-05.png';
import '../styles/Header.css';

//Creates the image header 
class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Deeply Rooted @ MSU Library</h2>
        </div>
      </div>
    );
  }
}

export default Header;
