import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';

import '../styles/Footer.css';

//Code for footer page information
class Footer extends Component {
  render() { 
    return (
      <Jumbotron bsClass="Footer">
        <div>
          <strong ><br/>For questions about contributing or technical issues with the website – Julie Shedd, Coordinator of Digital Initiatives and Web Services, MSU Libraries, jshedd@library.msstate.edu</strong>
          <br/><br/>
        </div>
      </Jumbotron>
    );
  }
}

export default Footer;
