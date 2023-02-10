import React from 'react';
import olho from '../../assets/olho-placeholder.png';
import './intro.css';

function Intro() {
  return (
    <section className="intro--container">
      <div className="intro--content">
        <section className="intro--gif-wrapper">
            <img className="intro--gif" src={olho} alt="olho" />
        </section>
        <section className="intro--text-and-btn">
          <p>
            A Utópika é sobre juntar forças, trabalhar com gente legal em projetos que acreditamos. É sobre ser divertido e sobre ser sério, comunicar com transparência achando o tom de cada situação. É sobre explicar e entender.
          </p>
          <h4>
            Acreditamos muito no poder da comunicação para a transformação da realidade e queremos estar junto na construção de projetos que trazem soluções, imaginação e propósito.
          </h4>
          <p>
            Queremos trabalhar em parceria com organizações que, como nós, querem ver a mudança acontecendo agora.
          </p>
          <button type="button">Saiba +</button>
        </section>
      </div>
    </section>
  )
}

export default Intro;
