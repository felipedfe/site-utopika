import React, { useEffect, useContext, useCallback } from 'react';
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
    largeScreenBreakPt,
  } = useContext(myContext);
  const { pathname } = useLocation();

  const isDesktop = useCallback(
    () => window.innerWidth > largeScreenBreakPt,
    [largeScreenBreakPt],
  );

  const shouldOpenNavOnDesktop = useCallback(
    () => pathname.startsWith('/project-overview') && isDesktop(),
    [pathname, isDesktop],
  );

  useEffect(() => {
    const checkForLargeScreen = () =>
      window.innerWidth <= largeScreenBreakPt ? false : true;

    setIsLargeScreen(checkForLargeScreen());

    if (shouldOpenNavOnDesktop()) {
      setIsNavMenuDisabled(false);
    } else {
      setIsNavMenuDisabled(true);
    }
  }, [
    pathname,
    largeScreenBreakPt,
    setIsLargeScreen,
    setIsNavMenuDisabled,
    shouldOpenNavOnDesktop,
  ]);

  useEffect(() => {
    const handleResize = () => {
      const large = window.innerWidth > largeScreenBreakPt;
      setIsLargeScreen(large);
      if (large) {
        setIsSearchMenuDisabled(true);
        setIsNavMenuDisabled(
          pathname.startsWith('/project-overview') ? false : true,
        );
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [
    pathname,
    largeScreenBreakPt,
    setIsLargeScreen,
    setIsNavMenuDisabled,
    setIsSearchMenuDisabled,
  ]);

  return (
    <>
      <header className={isLargeScreen && pathname === '/' ? null : 'menu-space'}>
        <Menu />
        {isLargeScreen && pathname === '/' ? <LanguageBtn /> : null}
      </header>
      <main className="page-content">{children}</main>
      <Footer />
    </>
  );
}

export default MainPageLayout;
