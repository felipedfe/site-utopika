import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import './language-btn.css';

function LanguageBtn() {
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
