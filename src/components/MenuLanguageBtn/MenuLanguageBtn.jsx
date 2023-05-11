import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import './menu-language-btn.css';

function MenuLanguageBtn(props) {
  const { btnInnerText } = props;
  const { textLanguage, setTextLanguage } = useContext(myContext);

  const handleText = () => {
    if (textLanguage === 'pt') {
      setTextLanguage('en');
    };
    if (textLanguage === 'en') {
      setTextLanguage('pt')
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
