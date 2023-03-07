import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';
import MenuLanguageBtn from '../MenuLanguageBtn/MenuLanguageBtn';
import { textLanguages as textOptions } from '../../data/languages';
import myContext from '../../context/myContext';
import MenuLogo from '../MenuLogo';
import './menu.css';

function Menu() {
  const [isMenuDisabled, setIsMenuDisabled] = useState(true);

  const location = useLocation();

  const { textLanguage } = useContext(myContext);
  const text = textOptions[textLanguage];

  const showNavigation = () => setIsMenuDisabled((prevState) => !prevState);

  const selectedLanguage = () => {
    return textLanguage === 'pt' ? 'ENGLISH' : 'PORTUGUÊS';
  }

  return (
    <section className="menu--container">
      <button
        type="button"
        className="menu--show-navigation-btn"
        onClick={showNavigation}
      >
        <MenuLogo fill={"white"} />
      </button>
      <nav style={isMenuDisabled ? { display: 'none' } : { display: 'flex' }}>
        <ul className="menu--nav-links">
          <li>
            <NavButton
              btnPath="/"
              buttonInnerText={text.menu.home}
            />
          </li>
          <li>
            <NavButton
              btnPath="/projetos"
              buttonInnerText={text.menu.projects}
            />
          </li>
          <li>
            <NavButton
              btnPath="/sobre"
              buttonInnerText={text.menu.about}
            />
          </li>
          <li>
            {
              location.pathname !== "/" &&
              <MenuLanguageBtn btnInnerText={selectedLanguage()}/>
            }
          </li>
        </ul>
      </nav>
    </section>
  )
};

export default Menu;
