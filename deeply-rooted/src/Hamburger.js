import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';
import './Hamburger.css';
import About from './About.js';
import {ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap'


class Hamburger extends Component {
    constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  // showSettings (event) {
  //   event.preventDefault();
  // }
  // _onButtonClick(destination) {
  //     if (destination === 'about') {
  //         ReactDOM.render(<About />, document.getElementById('root'));
  //     }
  //     if (destination === 'home') {
  //         ReactDOM.render(<About />, document.getElementById('root'));
  //     }
  // }
  //
  render () {
    return (
    <div className="Hamburger">
      <Menu>
            <Button onClick={this._onButtonClick}>Home</Button>
            {this.state.showComponent ? <About /> : null}
            <Button onClick={this._onButtonClick}>Advanced Search</Button>
            <Button onClick={this._onButtonClick}>About</Button>
            <Button onClick={this._onButtonClick}>Contact</Button>
      </Menu>
     </div>
    );
  }


}

export default Hamburger;
