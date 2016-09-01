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
          <div className="col-md-2 contact-icon-titles">
            <a href="mailto:cathyhsianglee@gmail.com?Subject=cathyhsianglee.com Information Inquiry"><img className="contact-icons" src="assets/images/email-icon.png" /></a>
            <p>cathyhsianglee@gmail.com</p>
          </div>
          <div className="col-md-2 contact-icon-titles">
            <a href="tel:1-510-557-9791"><img className="contact-icons" src="assets/images/mobile-icon.png" /></a>
            <p>(510) 557-9791</p>
          </div>
          <div className="col-md-2 contact-icon-titles">
            <a href="https://github.com/caathylee"><img className="contact-icons" src="assets/images/github-icon.png" /></a>
            <p>caathylee</p>
          </div>
          <div className="col-md-2 contact-icon-titles">
            <a href="https://www.linkedin.com/in/cathyhsianglee"><img className="contact-icons" src="assets/images/linkedin-icon.png" /></a>
            <p>cathyhsianglee</p>
          </div>
          <div className="col-md-2 contact-icon-titles">
            <a href="https://www.facebook.com/pudgethemightycorgi"><img className="contact-icons" src="assets/images/facebook-icon.png" /></a>
            <p>@pudgethemightycorgi</p>
          </div>
          <div className="col-md-2 contact-icon-titles">
            <a href="https://www.instagram.com/pudgethemightycorgi/"><img className="contact-icons" src="assets/images/instagram-icon.png" /></a>
            <p>@pudgethemightycorgi</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
