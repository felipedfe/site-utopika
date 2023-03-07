import React from 'react';
import Reel from '../../components/Reel/Reel';
import Intro from '../../components/Intro/Intro';
import InstaFeed from '../../components/InstaFeed/InstaFeed';
import LanguageBtn from '../../components/LanguageBtn/LanguageBtn';

function Home() {
  return (
    <section className="home--container">
      <main>
        <LanguageBtn />
        <Reel />
        <Intro />
        <InstaFeed />
      </main>
    </section>
  )
};

export default Home;
