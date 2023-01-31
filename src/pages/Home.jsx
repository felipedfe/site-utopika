import React from 'react';
import Reel from '../components/Reel/Reel';
import Intro from '../components/Intro/Intro';
import Menu from '../components/Menu/Menu';

function Home({children}) {
  return (
    <section className="home--container">
      {children}
      <main>
        {/* <Reel />
        <Intro /> */}
      </main>
    </section>
  )
};

export default Home;
