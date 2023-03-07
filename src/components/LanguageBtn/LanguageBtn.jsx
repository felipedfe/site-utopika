import React, { useContext } from 'react';
import { textLanguages as textOptions } from '../../data/languages';
import myContext from '../../context/myContext';
import './language-btn.css';

function LanguageBtn(props) {
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
    className="lang-btn"
    onClick={handleText}
  >
    PT | EN
    <span
      className={`lang-btn--line ${textLanguage === 'pt' ? 'pt-selected' : 'en-selected'}`}
    >
    </span>
  </button>
};

export default LanguageBtn;
