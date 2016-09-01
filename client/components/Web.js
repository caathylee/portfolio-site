import React, { Component } from 'react';
import NavBar from './NavBar';

class Web extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="web-work">
        <NavBar />
        <div className="portfolio-navbar">
          <ul className="portfolio-navbar">
            <li className="unselected"><a href="/portfolio">HOME</a></li>
            <li className="current-subcategory"><a href="/web">WEB</a></li>
            <li className="unselected"><a href="/socialmedia">SOCIAL MEDIA</a></li>
            <li className="unselected"><a href="/print">PRINT</a></li>
            <li className="unselected"><a href="/codingprojects">CODING PROJECTS</a></li>
          </ul>
        </div>

        <h1>THIS IS WEBWORK SECTION</h1>
      </div>
    );
  }
}

export default Web;
