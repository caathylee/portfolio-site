import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="contact">
        <NavBar />
        <div id="contact-content" className="row">
          <div className="col-md-2">cathyhsianglee@gmail.com</div>
          <div className="col-md-2">(510) 557-9791</div>
          <div className="col-md-2">caathylee</div>
          <div className="col-md-2">linkedin cathyhsianglee</div>
          <div className="col-md-2">Facebook @pudgethemightycorgi</div>
          <div className="col-md-2">Instagram @pudgethemightycorgi</div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
