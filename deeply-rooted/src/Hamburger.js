import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';
import './Hamburger.css';
import About from './About.js';
import Home from './Home.js';
import {ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap'
import Form from './Form.js';
import TextBox from './TextBox.js';


class Hamburger extends Component {
  about() {
      ReactDOM.render(<About />, document.getElementById('root'));
  }

  home() {
      ReactDOM.render(<Home />, document.getElementById('root'));
  }

  adv_search() {
      ReactDOM.render(<Form />, document.getElementById('dropbox'));
      ReactDOM.render(<TextBox selection="Subject"/>, document.getElementById('text-box'));
  }

  contact() {
      ReactDOM.render(<About />, document.getElementById('root'));
  }

  render () {
    return (
    <div className="Hamburger">
      <Menu>
            <Button className="btn_burger" onClick={this.home}>Home</Button>
            <Button className="btn_burger" onClick={this.adv_search}>Advanced Search</Button>
            <Button className="btn_burger" onClick={this.about}>About</Button>
            <Button className="btn_burger" onClick={this.contact}>Contact</Button>
      </Menu>
     </div>
    );
  }

}

export default Hamburger;
