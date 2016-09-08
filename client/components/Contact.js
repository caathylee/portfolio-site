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
        <div className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div id="navbar-content" className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="http://cathyhsianglee.com/"><img id="logo" src="assets/images/cl-logo.png" /></a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a href="/portfolio">PORTFOLIO</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/resume">RESUME</a></li>
                <li><a className="current-page" href="/contact">CONTACT</a></li>
              </ul>
            </div>
          </div>
      </div>
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
      </div>
    );
  }
}

export default Contact;
