import React from 'react';
import Reel from '../../../components/Reel/Reel';
import Intro from '../../../components/Intro/Intro';
import InstaFeed from '../../../components/InstaFeed/InstaFeed';
import MobileReel from '../../../components/VideoContainer/VideoContainer';
import './home.css';

function Home() {
  return (
    <section className="home--container">
      <main>
        <Reel />
        <section className="home--mobile-reel-wrapper">
          <MobileReel
            url="https://player.vimeo.com/video/778199725?"
            autoPlay='1'
            muted='1'
            loop='1'
          />
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
