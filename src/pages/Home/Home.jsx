import React, { useEffect, useContext } from 'react';
import Reel from '../../components/Reel/Reel';
import Intro from '../../components/Intro/Intro';
import InstaFeed from '../../components/InstaFeed/InstaFeed';
import MobileReel from '../../components/VideoContainer/VideoContainer';
import myContext from '../../context/myContext';
import './home.css';

function Home() {
  const {
    setIsLargeScreen,
    setIsNavMenuDisabled,
    setIsSearchMenuDisabled,
    largeScreenBreakPt } = useContext(myContext);

  useEffect(() => {
    // Quando o componente começa a montar é feita a checagem do tamanho da tela
    // para saber que tipo de menu será renderizado
    const checkForLargeScreen = () => window.innerWidth <= largeScreenBreakPt ? false : true;

    setIsLargeScreen(checkForLargeScreen());
  }, []);


  window.addEventListener('resize', () => {
    if (window.innerWidth >= largeScreenBreakPt) {
      setIsLargeScreen(true)
      setIsNavMenuDisabled(true)
      setIsSearchMenuDisabled(true)
    } else {
      setIsLargeScreen(false)
    }
  });

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
        <Intro />
        <InstaFeed />
      </main>
    </section>
  )
};

export default Home;
