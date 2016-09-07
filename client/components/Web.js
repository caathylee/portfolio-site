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
            <li className="blue-background"><a href="/portfolio">HOME</a></li>
            <li className="current-subcategory"><a href="/web">WEB</a></li>
            <li className="blue-background"><a href="/socialmedia">SOCIAL MEDIA</a></li>
            <li className="blue-background"><a href="/print">PRINT</a></li>
            <li className="blue-background"><a href="/codingprojects">CODING PROJECTS</a></li>
          </ul>
        </div>
        <div id="web-content">
          <h1 className="web-header">Web</h1>
          <p>Below are past experience with creating websites, email campaigns, icons, logos, and banners.</p>
        </div>
      </div>
    );
  }
}

export default Web;
