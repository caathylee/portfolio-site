import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class CodingProjects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="coding-projects">
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
              <li className="blue-background"><a href="/web">WEB</a></li>
              <li className="blue-background"><a href="/socialmedia">SOCIAL MEDIA</a></li>
              <li className="blue-background"><a href="/print">PRINT</a></li>
              <li className="current-subcategory"><a href="/codingprojects">CODING PROJECTS</a></li>
            </ul>
          </div>
          <div id="projects-content">
            <h1 className="projects-header">Projects</h1>
            <p className="projects-headline">Below are some programming projects I recently worked on.</p>
            <div className="coding-project-section">
              <h3 className="project-name">ShareCrow</h3>
              <h4 className="project-url"><a className="project-url" href="http://sharecrow.org/">sharecrow.org</a></h4>
              <p className="portfolio-project-description">Digital marketplace for users to rent and lend out items with payment security.</p>
              <p className="technologies">Technologies: React, Redux, Webpack, Node, Express, Postgres, Redis, AWS S3, Google Maps API, Google Geolocation API, Twilio API, Stripe API, SASS</p>
              <a href="http://sharecrow.org/">
                <img className="project-screenshots" src="assets/images/sharecrow-landing.png" />
              </a>
              <a href="http://sharecrow.org/marketplace">
                <img className="project-screenshots" src="assets/images/sharecrow-marketplace.png" />
              </a>
            </div>
            <div className="coding-project-section">
              <h3 className="project-name">Memowise</h3>
              <h4 className="project-url"><a className="project-url" href="http://memowise.xyz/">memowise.xyz</a></h4>
              <p className="portfolio-project-description">A customizable gamified flash card application.</p>
              <p className="technologies">Technologies: React, Redux, Node, Express, Postgres</p>
              <a href="http://memowise.xyz/">
                <img className="project-screenshots grey-border" src="assets/images/memowise.png" />
              </a>
            </div>
            <div className="coding-project-section">
              <h3 className="project-name">Read With Me</h3>
              <p className="portfolio-project-description">Application that enables parents to read interactively with children remotely.</p>
              <p className="technologies">Technologies: React, Webpack, Node, Express, Twilio, MongoDB</p>
              <img className="project-screenshots" src="assets/images/read-with-me.png" />
            </div>
            <div className="coding-project-section">
              <h3 className="project-name">TsumTsum Typing</h3>
              <p className="portfolio-project-description">Application that delivers a playful approach to typing practice.</p>
              <p className="technologies">Technologies: Angular, Node, Express, MongoDB</p>
              <img className="project-screenshots grey-border" src="assets/images/tsumtsumtyping.png" />
            </div>
          </div>
      </div>
    );
  }
}

export default CodingProjects;

