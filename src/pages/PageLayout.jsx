import React from 'react';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';

function PageLayout({ children }) {
  return (
    <header>
      <Menu />
      {children}
      <Footer />
    </header>
  )
};

export default PageLayout;
