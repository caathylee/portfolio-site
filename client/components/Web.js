import React, { Component } from 'react';
import NavBar from './NavBar';

class Web extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="web-work">
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
                <li><a className="current-page" href="/portfolio">PORTFOLIO</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/resume">RESUME</a></li>
                <li><a href="/contact">CONTACT</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio-navbar">
          <ul className="portfolio-navbar">
            <li className="blue-background"><a href="/portfolio">HOME</a></li>
            <li className="current-subcategory"><a href="/web">WEB</a></li>
            <li className="blue-background"><a href="/socialmedia">SOCIAL MEDIA</a></li>
            <li className="blue-background"><a href="/print">PRINT</a></li>
            <li className="blue-background"><a href="/codingprojects">CODING PROJECTS</a></li>
          </ul>
        </div>
        <div id="web-content">
          <h1 className="web-header">Web Work</h1>
          <p className="web-headline">Below is a showcase of my past work experience with creating websites, email campaigns, icons, and logos. I also designed, created all the icons, and coded this site, <a className="web-url" href="http://www.cathyhsianglee.com/">cathyhsianglee.com</a>, using React framework and Webpack. You can see more websites I worked on in the <a className="web-url" href="http://cathyhsianglee.com/codingprojects">coding projects section</a> of my site.</p>

          <div className="web-work-section">
            <h3 className="web-work-sub-category">Website</h3>
            <h4 className="web-work-header">PolyVirtual Corporation</h4>
            <p className="web-work-headline">I worked as a Marketing and Web Contractor for <a className="web-url" href="http://www.prnewswire.com/news-releases/polyvirtual-announces-the-industrys-first-data-capture-platform-for-100-gigabit-networks-300113017.html">PolyVirtual</a> and designed/developed their site before they were acquired by <a className="web-url" href="https://toyotechus.com/media-alert-synesis20/">ToyoTech</a>.</p>
            <p className="web-work-headline">PolyVirtual Corporation is a global provider of open Network Management Systems supporting traditional, cloud, virtualized, and software defined networks.</p>

            <iframe className="grey-border" src="assets/images/polyvirtual-screenshot.png" height="500" width="70%"></iframe>
          </div>

          <div className="web-work-section">
            <h3 className="web-work-sub-category">Email Campaigns</h3>
            <p>Below are a few email blasts I created for webinars, press releases, and events.
            </p>
            <img className="email-image" src="assets/images/dew-email.jpg" />
            <img className="email-image" src="assets/images/lagc-email.jpg" />
            <img className="email-image" src="assets/images/limelight-email.jpg" />
            <img className="email-image" src="assets/images/pvc-email.jpg" />
          </div>

          <div className="web-work-section">
            <h3 className="logos-icons-sub-category">Logos and Icons</h3>
            <p className="web-sub-category-headline">Below are logos and icons I created for my projects.</p>

            <div className="row logos-and-icons">
          
              <div className="col-md-6 logo-icon">
                <img className="pvc-icons" src="assets/images/cloud_icon.png" />
              </div>
              <div className="col-md-6 logo-icon">
                <img className="pvc-icons" src="assets/images/join_us_icon.png" />
              </div>
            </div>

            <div className="row logos-and-icons">
              <div className="col-md-6 logo-icon">
                <img className="logo-work sharecrow-logo" src="assets/images/sharecrow-clear-bg.png" />
              </div>
              <div className="col-md-6 logo-icon">
                <img className="logo-work readwithme-logo" src="assets/images/readwithme-logo.png" />
              </div>
            </div>

            <div className="row logos-and-icons">
              <div className="col-xs-6 col-sm-3 logo-icon">
                <img className="website-icons" src="assets/images/web-icon.png" />
              </div>
              <div className="col-xs-6 col-sm-3 logo-icon">
                <img className="website-icons" src="assets/images/print-icon.png" />
              </div>

              <div className="clearfix visible-xs-block"></div>

              <div className="col-xs-6 col-sm-3 logo-icon">
              <img className="website-icons" src="assets/images/social-media-icon.png" /></div>
              <div className="col-xs-6 col-sm-3 logo-icon">
                <img className="website-icons" src="assets/images/coding-icon.png" />
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
}

export default Web;
