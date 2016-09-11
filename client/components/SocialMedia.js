import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class SocialMedia extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="social-media">
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
            <li className="yellow-background"><a href="/portfolio">HOME</a></li>
            <li className="yellow-background"><a href="/web">WEB</a></li>
            <li className="current-subcategory"><a href="/socialmedia">SOCIAL MEDIA</a></li>
            <li className="yellow-background"><a href="/print">PRINT</a></li>
            <li className="yellow-background"><a href="/codingprojects">CODING PROJECTS</a></li>
          </ul>
        </div>
        <div id="social-media-content">
          <h1 className="social-media-header">Social Media</h1>
          <p className="social-media-headline">I was in charge of managing multiple social media platforms when I was at Digital Media Wire as a Marketing & Events Assistant. I simultaneously managed 2 Facebook pages, a LinkedIn group, and 3 Twitter accounts. I posted to promote our events, newsletter content, and event updates on our social media accounts on a daily basis. I also created and edited images for posts.</p>

          <p className="social-media-headline last-paragraph">Here's a little backstory. I rescued Pudge after I graduated from college. I always wanted my own dog and couldn't help falling for corgis and their stumpy legs. I was following corgis on Instagram a couple years before I got him and loved how there was a corgi community out there. Of course, once I got Pudge I couldn't help creating him his own Instagram! I then wanted to see what worked and didn't in getting new followers. It's been fun experimenting with different types of pictures, captions, and hashtags. Also, it's a great place to post pictures of my dog! Go follow Pudge on Instagram or Facebook! I think he's pretty darn cute, although I may be a little biased ;).</p>  

          <h3 className="social-media-category">Instagram</h3>
          <p className="social-media-url"><a className="social-media-url" href="https://www.instagram.com/pudgethemightycorgi/">@pudgethemightycorgi</a></p>
          <div>
            <a href="https://www.instagram.com/pudgethemightycorgi/">
              <img className="social-media-mockup" src="assets/images/pudge-instagram-mockup.png" />
            </a>
          </div>
          <h3 className="social-media-category">Facebook</h3>
          <p className="social-media-url"><a className="social-media-url" href="https://www.facebook.com/pudgethemightycorgi">facebook.com/pudgethemightycorgi</a></p>
          <div>
            <a href="https://www.facebook.com/pudgethemightycorgi">
              <img className="social-media-mockup facebook-mockup" src="assets/images/pudge-facebook-mockup.png" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
