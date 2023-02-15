import React, { useContext } from 'react';
import Reel from '../../components/Reel/Reel';
import Intro from '../../components/Intro/Intro';
import InstaFeed from '../../components/InstaFeed/InstaFeed';
import Footer from '../../components/Footer/Footer';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data';

function Home({ children }) {
  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];
  console.log(textLanguage);

  return (
    <section className="home--container">
      {children}
      <main>
        <h1>{text.home.introduction}</h1>
        <Reel />
        <Intro />
        <InstaFeed />
        <Footer />
      </main>
    </section>
  )
};

export default Home;
