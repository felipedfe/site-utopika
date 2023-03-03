import React, { useState, useContext, useEffect } from 'react';
import NavButton from '../NavButton/NavButton';
// import i18n from '../../translate/i18n';
import { textLanguages as textOptions } from '../../data/languages';
import myContext from '../../context/myContext';
// import menuIcon from '../../assets/UTOPIKA_icone.svg'
import MenuLogo from '../MenuLogo';
import './menu.css';

function Menu() {
  const [isMenuDisabled, setIsMenuDisabled] = useState(true);

  const { textLanguage, setTextLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];

  // useEffect(() => {
  //   text = textOptions[textLanguage];
  // }, [textLanguage])

  const showNavigation = () => setIsMenuDisabled((prevState) => !prevState);

  // A 'i18nextLng' é criada pelo i18n, ela quem regula a língua do site
  const handleChange = ({ target }) => {
    // console.log(target.value);
    const { value } = target;
    localStorage.setItem('i18nextLng', value);
    window.location.reload();
  }

  const handleText = () => {
    // console.log(textLanguage);
    if (textLanguage === 'pt') {
      setTextLanguage('en');
    };
    if (textLanguage === 'en') {
      setTextLanguage('pt')
    };
  };

  return (
    <>
      <section className="menu--container">
        <button
          type="button"
          className="menu--show-navigation-btn"
          onClick={showNavigation}
        >
          <MenuLogo fill={"white"} />
        </button>
        <button
          className="menu--lang-btn"
          onClick={handleText}>PT | EN
          <span className={`menu--lang-btn-line ${textLanguage === 'pt' ? 'pt-selected' : 'en-selected'}`}></span>
        </button>
      </section>
      <nav style={isMenuDisabled ? { display: 'none' } : { display: 'flex' }}>
        <ul className="menu--nav-links">
          <li>
            <NavButton
              btnPath="/"
              buttonInnerText={text.menu.home}
            />
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Menu;