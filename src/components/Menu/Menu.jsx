import React, { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';
import Tags from '../Tags/Tags';
import MenuLanguageBtn from '../MenuLanguageBtn/MenuLanguageBtn';
import { textLanguages as textOptions } from '../../data/languages';
import myContext from '../../context/myContext';
import MenuLogo from '../MenuLogo';
import { RxMagnifyingGlass as SearchIcon } from 'react-icons/rx';
import CloseIcon from '../CloseIcon/CloseIcon';
import './menu.css';

function Menu() {
  const { pathname } = useLocation();

  const {
    textLanguage,
    isLargeScreen,
    setIsLargeScreen,
    isNavMenuDisabled,
    setIsNavMenuDisabled,
    isSearchMenuDisabled,
    setIsSearchMenuDisabled,
    largeScreenBreakPt } = useContext(myContext);

  const navMenuRef = useRef(null);
  const searchMenuRef = useRef(null);

  const text = textOptions[textLanguage];

  const closeAllMenus = () => {
    if (!isNavMenuDisabled) {
      setIsNavMenuDisabled(true);
    }
    if (!isSearchMenuDisabled) {
      setIsSearchMenuDisabled(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setIsNavMenuDisabled(true);
        event.stopPropagation();
      }
      if (searchMenuRef.current && !searchMenuRef.current.contains(event.target)) {
        setIsSearchMenuDisabled(true);
        event.stopPropagation();
      }
    };

    // Adicionar o listener quando o componente é montado
    document.addEventListener("mousedown", handleClickOutside);

    // Limpar o listener quando o componente é desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Pode ser necessário adicionar outras dependências se estados específicos forem usados dentro de handleClickOutside


  const toggleNavigationMenu = () => {
    if (!isSearchMenuDisabled) setIsSearchMenuDisabled((prevState) => !prevState);
    setIsNavMenuDisabled((prevState) => !prevState);
  };

  const toggleSearchMenu = () => {
    if (!isNavMenuDisabled) setIsNavMenuDisabled((prevState) => !prevState);
    setIsSearchMenuDisabled((prevState) => !prevState)
  };

  const selectedLanguage = () => textLanguage === 'pt' ? 'ENGLISH' : 'PORTUGUÊS';

  useEffect(() => {
    // Quando o componente começa a montar é feita a checagem do tamanho da tela
    // para saber que tipo de menu será renderizado
    const checkForLargeScreen = () => window.innerWidth <= largeScreenBreakPt ? false : true;

    setIsLargeScreen(checkForLargeScreen());
  }, [isNavMenuDisabled, isSearchMenuDisabled]);

  return (
    <section className="menu--container">
      {(!isNavMenuDisabled || !isSearchMenuDisabled) && (
        <div className="menu-overlay" onClick={closeAllMenus}></div>
      )}
      <button
        type="button"
        className="menu--show-navigation-btn"
        onClick={toggleNavigationMenu}
      >
        <MenuLogo fill={"white"} />
      </button>
      {!isLargeScreen && <span className="menu--utopika">Utópika</span>}
      <nav
        ref={navMenuRef}
        style={
          isLargeScreen && isNavMenuDisabled ?
            { display: 'none' } :
            { display: 'flex' }
        }
        className={isNavMenuDisabled ? "menu--disabled" : "menu--enabled"}
      >
        <ul className="menu--nav-links">
          <li>
            <NavButton
              btnPath="/"
              buttonInnerText={text.menu.home}
              setIsNavMenuDisabled={setIsNavMenuDisabled}
            />
          </li>
          <li>
            <NavButton
              btnPath="/projetos"
              buttonInnerText={text.menu.projects}
              setIsNavMenuDisabled={setIsNavMenuDisabled}
            />
          </li>
          <li>
            <NavButton
              btnPath="/sobre"
              buttonInnerText={text.menu.about}
              setIsNavMenuDisabled={setIsNavMenuDisabled}
            />
          </li>
          <li>
            {
              pathname === "/" && isLargeScreen ?
                null :
                <MenuLanguageBtn
                  setIsNavMenuDisabled={setIsNavMenuDisabled}
                  btnInnerText={selectedLanguage()}
                />
            }
          </li>
          {
            !isLargeScreen &&
            <li>
              <button
                className="menu--close-btn"
                type="button"
                onClick={() => setIsNavMenuDisabled(true)}
              >
                <div className="close-btn-pt1"></div>
                <div className="close-btn-pt2"></div>
              </button>
              <button
                type="button"
                onClick={() => setIsNavMenuDisabled(true)}
                className="menu--close-btn"
              >
                <CloseIcon />
              </button>
            </li>
          }
        </ul>
      </nav>
      {
        pathname === "/projetos" &&
        <>
          <button
            type="button"
            className="menu--search-btn"
            onClick={toggleSearchMenu}
          >
            <i className="menu--search-icon"><SearchIcon /></i>
          </button>
          <section
            ref={searchMenuRef}
            style={
              isLargeScreen && isSearchMenuDisabled ?
                { display: 'none' } :
                { display: 'flex' }
            }
            className={
              `menu--tags 
              ${isSearchMenuDisabled ?
                "menu--disabled" :
                "menu--enabled"}`
            }
          >
            <Tags />
            <button
              type="button"
              className="menu--close-btn"
              onClick={toggleSearchMenu}
            >
              <CloseIcon />
            </button>
          </section>
        </>
      }
    </section>
  )
};

export default Menu;
