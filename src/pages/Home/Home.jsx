import React, { useContext } from 'react';
import Reel from '../../components/Reel/Reel';
import Intro from '../../components/Intro/Intro';
import InstaFeed from '../../components/InstaFeed/InstaFeed';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';

function Home({ children }) {
  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];

  return (
    <section className="home--container">
      {/* <Menu /> */}
      <main>
        <h1>{text.home.introduction}</h1>
        <Reel />
        <Intro />
        <InstaFeed />
        {/* <Footer /> */}
      </main>
    </section>
  )
};

export default Home;
