import React, { Component } from 'react';
import './Footer.css';

//Code for footer page information
class Footer extends Component {
  render() {
    //Advanced search requires different CSS properties than the other pages
    if (this.props.page !== "adv_search"){
    return (
      <div className="Footer2">
        <div>
        <strong ><br/>For questions about contributing or technical issues with the website – Julie Shedd, Coordinator of Digital Initiatives and Web Services, MSU Libraries, jshedd@library.msstate.edu</strong><br/>
        </div>
      </div>
    );
  }

  //Everything else can use the default CSS properties
  else if (this.props.page === "adv_search") {
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
