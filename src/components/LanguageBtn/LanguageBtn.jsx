import React, { useContext } from 'react';
import { textLanguages as textOptions } from '../../data/languages';
import myContext from '../../context/myContext';
import './language-btn.css';

function LanguageBtn(props) {
  const { textLanguage, setTextLanguage } = useContext(myContext);

  const handleText = () => {
    // console.log(textLanguage);
    if (textLanguage === 'pt') {
      setTextLanguage('en');
    };
    if (textLanguage === 'en') {
      setTextLanguage('pt')
    };
  };

  return <button
    className="menu--lang-btn"
    onClick={handleText}
  >
    PT | EN
    <span
      className={`menu--lang-btn-line ${textLanguage === 'pt' ? 'pt-selected' : 'en-selected'}`}
    >
    </span>
  </button>
};

export default LanguageBtn;
