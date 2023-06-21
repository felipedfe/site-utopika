import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import LanguageBtn from '../../components/LanguageBtn/LanguageBtn';
import myContext from '../../context/myContext';

function MainPageLayout({ children }) {
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
      <header className={isLargeScreen && pathname === '/' ? null : 'menu-space'}>
        <Menu />
        {
          (isLargeScreen && pathname === '/') ?
            <LanguageBtn /> :
            null
        }
      </header>
      <main className="page-content">
        {children}
      </main>
      <Footer />
    </>
  )
};

export default MainPageLayout;
