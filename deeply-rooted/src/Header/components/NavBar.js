import React, { Component } from 'react';
import '../styles/NavBar.css';

import Hamburger from './Hamburger.js';
import SearchBar from './SearchBar.js';


//Code for navigation bar
class NavBar extends Component {
  render() {
    return ( //uses hamburger and SearchBar
      <div className="NavBar"> 
            <div className="alignLeft"><Hamburger /></div>
            <div className="alignRight"><SearchBar /></div>
      </div>
    );
  }
}

export default NavBar;
