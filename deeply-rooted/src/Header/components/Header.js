import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import logo from '../../Images/deeply-rooted-logo-05.png';
import '../styles/Header.css';

//Creates the image header 
class Header extends Component {
  render() {
    return (
      <Jumbotron bsClass="header">
        <img src={logo} className="header-logo" alt="logo" />
        <h1><b>Deeply Rooted @ MSU Library</b></h1>
      </Jumbotron>
    );
  }
}

export default Header;
