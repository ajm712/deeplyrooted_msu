import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    if (this.props.page != "adv_search"){
    return (
      <div className="Footer2">
        <div>
        <strong ><br/>For questions about contributing or technical issues with the website – Julie Shedd, Coordinator of Digital Initiatives and Web Services, MSU Libraries, jshedd@library.msstate.edu</strong><br/>
        </div>
      </div>
    );
  }

  else if (this.props.page == "adv_search") {
    return (
      <div className="Footer">
        <div >
        <strong ><br/>For questions about the project, its scope and purpose – John Burger, Executive Director of the Association of Southeastern Research Libraries, jburger@aserl.org”</strong><br/>
        </div>
      </div>
    );
  }
  }
}


export default Footer;
