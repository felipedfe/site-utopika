import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import './menu-language-btn.css';

function MenuLanguageBtn(props) {
  const { btnInnerText, setIsNavMenuDisabled } = props;
  const { textLanguage, setTextLanguage } = useContext(myContext);

  const handleText = () => {
    if (textLanguage === 'pt') {
      setTextLanguage('en');
      setIsNavMenuDisabled(true);
    };
    if (textLanguage === 'en') {
      setTextLanguage('pt');
      setIsNavMenuDisabled(true);
    };
  };

  return <button
    type="button"
    className="menu-lang-btn"
    onClick={handleText}
  >
    {btnInnerText}
  </button>
};

export default MenuLanguageBtn;
