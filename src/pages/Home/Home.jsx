import React from 'react';
import Reel from '../../components/Reel/Reel';
import Intro from '../../components/Intro/Intro';
import InstaFeed from '../../components/InstaFeed/InstaFeed';
import LanguageBtn from '../../components/LanguageBtn/LanguageBtn';
import MobileReel from '../../components/VideoContainer/VideoContainer';
import './home.css';

function Home() {
  return (
    <section className="home--container">
      <main>
        <LanguageBtn />
        <Reel />
        <section className="home--mobile-reel-wrapper">
          <MobileReel
          url="https://player.vimeo.com/video/778199725?"
          autoPlay='1'
          muted='1'
          loop='1'
          />
        </section>
        <Intro />
        <InstaFeed />
      </main>
    </section>
  )
};

export default Home;
