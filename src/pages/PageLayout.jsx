import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import LanguageBtn from '../components/LanguageBtn/LanguageBtn';
import myContext from '../context/myContext';

function PageLayout({ children }) {
  const { isLargeScreen } = useContext(myContext);
  const { pathname } = useLocation();

  return (
    <header>
      <Menu />
      {isLargeScreen && pathname === '/' ? <LanguageBtn /> : null}
      {children}
      <Footer />
    </header>
  )
};

export default PageLayout;
