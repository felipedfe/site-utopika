import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import placeholder from '../../assets/mongabay-placeholder.png'
import Menu from '../../components/Menu/Menu';
import './mongabay.css';

function Mongabay() {

  const { textLanguage, setTextLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];

  return <main className="project--container">
    <Menu />
    <section className="project--title-tags-wrapper">
      <h2>{text.projects.mongabay.title}</h2>
      <hr className="project--divider" />
      <div className="project--tags">
        <span>#animação</span>
        <span>#ilustração</span>
        <span>#diversidade</span>
        <span>#política</span>
      </div>
    </section>
    <section className="project--text-wrapper">
      <div className="project--text-align-r">
        <p>
          {text.projects.mongabay.text1}
        </p>
      </div>
    </section>

    <section className="project--img-text-container">
      <div className="project--img-wrapper">
        {/* <img className="project--img" alt=" " src={placeholder} /> */}
        {/* <iframe
          title="video-reel"
          src="https://player.vimeo.com/video/803576468?h=c1d00cc6da&title=0&byline=0&portrait=0&controls=1"
          width="640"
          height="360"
        >
        </iframe> */}
        <div className="project--iframe-wrapper">
          <iframe
            title="gfx-intro"
            className="project--iframe"
            src="https://player.vimeo.com/video/803576468?h=3de32b4d5b&title=0&byline=0&portrait=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>

      </div>

      <div className="project--img-wrapper-half-l">
        <p className="project--text-l">
          {text.projects.mongabay.text2}
        </p>
        <img className="project--img" alt=" " src={placeholder} />
      </div>

      {/* <p className="project--text">
        Os gráficos são automatizados para se adaptar às informações que são colocadas através de expressões que
        controlam o tamanho das caixas de texto, quantidade de linhas e etc, fazendo com que o editor mexa no mínimo de
        propriedades possível.
      </p> */}

      <div className="project--img-wrapper">
        <img className="project--img" alt=" " src={placeholder} />
      </div>

      <div className="project--img-wrapper-half-r">
        <img className="project--img" alt=" " src={placeholder} />
        <p className="project--text-r">
          {text.projects.mongabay.text3}
        </p>
      </div>

      <section className="project--credits-wrapper">
        <hr className="project--divider" />
        <h2>CRÉDITOS</h2>
        <p>Coordenação e motion design | Julia Lima</p>
        <p>Essential graphics | Carla Dutra</p>
        <p>Automação | Felipe Fernandes</p>
        <p>Estagiária | Ana Clara Korin</p>
      </section>
    </section>
  </main>
};

export default Mongabay;
