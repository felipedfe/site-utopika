import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import eyeGif from '../../assets/GIF_teste_1.gif';
import './intro.css';

function Intro() {
  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];

  const navigate = useNavigate();

  return (
    <section className="intro--container">
      <div className="intro--content">
        <div className="intro--gif-and-text-wrapper">
          <section className="intro--gif-wrapper">
            <img className="intro--gif" src={eyeGif} alt="gif de um olho" />
          </section>
          <section className="intro--text-and-btn">
            <p>{text.introduction.introPt1}</p>
            <p>{text.introduction.introPt2}</p>
            <button
              type="button"
              className="intro--btn"
              onClick={() => navigate('/sobre')}
            >
              <span>{text.introduction.button}</span>
            </button>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Intro;
