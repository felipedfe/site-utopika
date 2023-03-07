import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import olho from '../../assets/GIF_teste_1.gif';
import './intro.css';

function Intro() {
  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];

  return (
    <section className="intro--container">
      <div className="intro--content">
        <div className="intro--gif-and-text-wrapper">
          <section className="intro--gif-wrapper">
            <img className="intro--gif" src={olho} alt="olho" />
          </section>
          <section className="intro--text-and-btn">
            <p>{text.introduction.introPt1}</p>
            <p>{text.introduction.introPt2}</p>
            <button type="button">Saiba +</button>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Intro;
