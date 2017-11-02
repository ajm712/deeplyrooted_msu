import React, { Component } from 'react';
import logo from './deeply-rooted-logo-05.png';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div>
          <div className="homepage">
            <h2>Deeply Rooted</h2>
            <img src={logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
    );
  }
}

export default Home;
