import React, { useState, useContext, useEffect } from 'react';
import NavButton from '../NavButton/NavButton';
// import i18n from '../../translate/i18n';
import { textLanguages as textOptions } from '../../data/languages';
import myContext from '../../context/myContext';
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
    <section className="menu--container">
      <button
        type="button"
        className="menu--show-navigation-btn"
        onClick={showNavigation}
      >
        Menu Icon
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
              //buttonInnerText={i18n.t('menu.about')}
              buttonInnerText={text.menu.about}
            />
          </li>
        </ul>
        {/* <select onChange={(e) => handleChange(e)}>
          <option>selecione o idioma</option>
          <option value="pt-BR">PT</option>
          <option value="en-EN">EN</option>
        </select> */}
        <button style={{"marginLeft": "500px"}}onClick={handleText}>Muda língua</button>
      </nav>
    </section>
  )
};

export default Menu;
