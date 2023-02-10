import React from 'react';
import Reel from '../../components/Reel/Reel';
import Intro from '../../components/Intro/Intro';
import { useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data';

function Home({ children }) {
  const { test, textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];
  console.log(textLanguage);

  return (
    <section className="home--container">
      {children}
      <main>
        <h1>{text.home.introduction}</h1>
        <Reel />
        <Intro />
      </main>
    </section>
  )
};

export default Home;
