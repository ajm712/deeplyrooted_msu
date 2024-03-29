import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import logo from '../../Images/deeply-rooted-logo-05.png';
import '../styles/Header.css';

//Creates the image header 
class Header extends Component {
  render() {
    return ( //uses Jumbotron from react-bootstrap
      <Jumbotron bsClass="header"> 
        <img src={logo} className="header-logo" alt="Deeply Rooted Logo" />
        <h1><b>Deeply Rooted @ MSU Library</b></h1>
      </Jumbotron>
    );
  }
}

export default Header;
