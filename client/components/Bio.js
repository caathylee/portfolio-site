import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class Bio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="bio-page">
        <div id="bio">
          <NavBar />
          <div className="row">
            <div className="col-md-6 center">
              <img id="bio-pic" src="assets/images/cathy.png"/>
            </div>
            <div className="col-md-6" id="bio-content">
              <h3>Hello! My name is Cathy Lee.</h3>
              <p className="bio-paragraph">I am a user-driven web developer that is passionate about creating seamless UI/UX with a robust and modular application design. I work well autonomously, but also thrive in team environments.</p>
              <p className="bio-paragraph">I'm a UC San Diego alumni with a bachelors in International Studies - Economics & Communications, as well as a minor in Chinese Studies. I have various marketing experience including creating email blasts along with ads and posters, social media marketing, Facebook advertising, and more. My passion for web development began when I was a student and taught myself HTML/CSS and WordPress during a digital marketing internship towards the end of my college career. I realized I loved it and decided to learn how to build websites from scratch after graduation. Since then I have designed and created many sites including this one!</p>
              <p className="bio-paragraph">Outside of career, my personal interests include cooking, spin class, playing video games & board games, hiking with my dog, <a className="orange-red about-link"href="https://www.instagram.com/pudgethemightycorgi/">@pudgethemightcorgi</a>, attending the occasional nerdy convention, and traveling.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Bio;
