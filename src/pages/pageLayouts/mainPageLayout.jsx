import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import LanguageBtn from '../../components/LanguageBtn/LanguageBtn';
import myContext from '../../context/myContext';
import styled from 'styled-components';

function MainPageLayout({ children }) {
  // const { isLargeScreen } = useContext(myContext);
  const {
    isLargeScreen,
    setIsLargeScreen,
    setIsNavMenuDisabled,
    setIsSearchMenuDisabled,
    largeScreenBreakPt } = useContext(myContext);
  const { pathname } = useLocation();

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
    <>
      <header>
        <Menu />
        {
          (isLargeScreen && pathname === '/')
            // ||
            //   (isLargeScreen && pathname.startsWith('/projetos/')) 
            ?
            <LanguageBtn /> :
            null
        }
      </header>
      {children}
      {/* <footer> */}
      <Footer />
      {/* </footer> */}
    </>
  )
};

export default MainPageLayout;
