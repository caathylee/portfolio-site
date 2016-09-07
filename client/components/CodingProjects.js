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
        <NavBar />
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
              <img className="project-screenshots" src="assets/images/sharecrow-landing.png" />
              <img className="project-screenshots" src="assets/images/sharecrow-marketplace.png" />
            </div>
            <div className="coding-project-section">
              <h3 className="project-name">Memowise</h3>
              <h4 className="project-url"><a className="project-url" href="http://memowise.xyz/">memowise.xyz</a></h4>
              <p className="portfolio-project-description">A customizable gamified flash card application.</p>
              <p className="technologies">Technologies: React, Redux, Node, Express, Postgres</p>
              <img className="project-screenshots grey-border" src="assets/images/memowise.png" />

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
        <Footer />
      </div>
    );
  }
}

export default CodingProjects;

