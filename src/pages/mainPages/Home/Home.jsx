import React from 'react';
import { Link } from 'react-router-dom';
import Reel from '../../../components/Reel/Reel';
import Intro from '../../../components/Intro/Intro';
import InstaFeed from '../../../components/InstaFeed/InstaFeed';
import logo from '../../../assets/LOGO UTOPIKA_OK.png';
import HomeLinks from '../../../components/HomeLinks/HomeLinks';
import './home.css';

function Home() {
  return (
    <section className="home--container">
      <main>
        <Reel />
        <div className="home--info-logo-wrapper">
          <div className="home--info-container">
            <img className="mobile-logo" src={logo} alt="logo utopika"></img>
            <HomeLinks />
          </div>
        </div>
        <section className="home--mobile-reel-wrapper">
          <div className="home--video-wrapper">
            <iframe
              className="home--mobile-reel"
              title="mobile-reel"
              src="https://player.vimeo.com/video/828350102?autoplay=1&title=0&byline=0&portrait=0&controls=0&loop=1&muted=1&autopause=0"
            />
          </div>
        </section>

        <section className="home--intro-instafeed-wrapper">
          <Intro />
          <InstaFeed />
        </section>
      </main>
    </section>
  )
};

export default Home;
