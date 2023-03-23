import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';
import MenuLanguageBtn from '../MenuLanguageBtn/MenuLanguageBtn';
import { textLanguages as textOptions } from '../../data/languages';
import myContext from '../../context/myContext';
import MenuLogo from '../MenuLogo';
import { RxMagnifyingGlass as SearchIcon } from 'react-icons/rx';
import './menu.css';

function Menu() {
  const [isMenuDisabled, setIsMenuDisabled] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const { pathname } = useLocation();

  const { textLanguage } = useContext(myContext);
  const text = textOptions[textLanguage];

  const showNavigation = () => setIsMenuDisabled((prevState) => !prevState);

  const selectedLanguage = () => textLanguage === 'pt' ? 'ENGLISH' : 'PORTUGUÊS';

  useEffect(() => {
    // Quando o componente começa a montar é feita a checagem do tamanho da tela
    // para saber que tipo de menu será renderizado
    const checkForLargeScreen = () => window.innerWidth <= 1024 ? false : true;

    setIsLargeScreen(checkForLargeScreen);
  }, [isMenuDisabled]);

  useEffect(() => {
    const closeMenu = (e) => {
      console.log(e.srcElement.className)
      // O menu só vai fechar se ele não for disparado pelo botão do menu
      // if (e.srcElement.id !== 'menu--logo') setIsMenuDisabled(true);
      if (e.srcElement.id === 'menu--logo' || 
        e.srcElement.className ==='menu--show-navigation-btn') {
          setIsMenuDisabled(false);
        } else {
          setIsMenuDisabled(true);
        }
    }

    document.body.addEventListener('touchend', closeMenu);
    document.body.addEventListener('click', closeMenu);

    return () => {
      document.body.removeEventListener('touchend', closeMenu);
      document.body.removeEventListener('click', closeMenu);
    }
  }, []);



  return (
    <section className="menu--container">
      {
        pathname === "/projetos" &&
        <button
          type="button"
          className="menu--search-btn"
        >
          <i className="menu--search-icon"><SearchIcon /></i>
          {/* <div className="menu__btn-touch-area" /> */}
        </button>
      }
      <button
        type="button"
        className="menu--show-navigation-btn"
        onClick={showNavigation}
      >
        <MenuLogo fill={"white"} />
        {/* <div className="menu__btn-touch-area" /> */}
      </button>
      <nav
        style={isLargeScreen && isMenuDisabled ? { display: 'none' } : { display: 'flex' }}
        className={isMenuDisabled ? "menu--disabled" : "menu--enabled"}
      >
        <ul className="menu--nav-links">
          <li>
            <NavButton
              btnPath="/"
              buttonInnerText={text.menu.home}
              setIsMenuDisabled={setIsMenuDisabled}
            />
          </li>
          <li>
            <NavButton
              btnPath="/projetos"
              buttonInnerText={text.menu.projects}
              setIsMenuDisabled={setIsMenuDisabled}
            />
          </li>
          <li>
            <NavButton
              btnPath="/sobre"
              buttonInnerText={text.menu.about}
              setIsMenuDisabled={setIsMenuDisabled}
            />
          </li>
          <li>
            {
              pathname !== "/" &&
              <MenuLanguageBtn btnInnerText={selectedLanguage()} />
            }
          </li>
          {
            !isLargeScreen &&
            <li>
              <button
                type="button"
                onClick={() => setIsMenuDisabled(true)}
              >
                Fechar
              </button>
            </li>
          }

        </ul>
      </nav>
    </section>
  )
};

export default Menu;
