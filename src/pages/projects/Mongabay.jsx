import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import placeholder from '../../assets/mongabay-placeholder.png';
import usersGuide from '../../assets/users-guide.jpg';
import Menu from '../../components/Menu/Menu';
import './mongabay.css';

function Mongabay() {

  const { textLanguage, setTextLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];

  return <main className="project--container">
    <Menu />

    <div className="project--img-wrapper-wide">
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
          src="https://player.vimeo.com/video/803576468?h=3de32b4d5b&title=0&byline=0&portrait=0&color=e54a38"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>

    <section className="project--title-tags-wrapper">
      <h2>{text.projects.mongabay.title}</h2>
      <hr className="project--divider" />
      <div className="project--tags">
        {text.projects.mongabay.tags.map((tag) => <span>{`#${tag} `}</span>)}
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

      {/* edit */}
      <div className="project--img-wrapper">
        <div className="project--iframe-wrapper">
          <iframe
            title="gfx-edit"
            className="project--iframe"
            src="https://player.vimeo.com/video/804624798?background=1&autopause=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>

      {/* essential graphics */}
      <div className="project--img-wrapper-half-l">
        <div className="project--text-wrapper">
          <hr className="project--divider" />
          <p className="project--text-l">
            {text.projects.mongabay.text2}
          </p>
        </div>
        {/* https://player.vimeo.com/video/804637137?h=5e8c037106 */}


        <div className="project--iframe-wrapper ratio">
          <iframe
            title="gfx-essential"
            className="project--iframe"
            // src="https://player.vimeo.com/video/804637137?h=c1d00cc6da&title=0&byline=0&portrait=0&controls=0&autoplay=1=1&loop=1&muted&background=1&autopause=0"
            src="https://player.vimeo.com/video/804637137?background=1&autopause=0"
            loading="lazy"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>

        <script src="https://player.vimeo.com/api/player.js"></script>

      </div>

      {/* <p className="project--text">
        Os gráficos são automatizados para se adaptar às informações que são colocadas através de expressões que
        controlam o tamanho das caixas de texto, quantidade de linhas e etc, fazendo com que o editor mexa no mínimo de
        propriedades possível.
      </p> */}

      {/* automatizacao? */}

      <div className="project--img-wrapper-half-r">
        <div className="project--iframe-wrapper ratio-code">
          <iframe
            title="gfx-essential"
            className="project--iframe"
            src="https://player.vimeo.com/video/804882847?background=1&autopause=0"
            loading="lazy"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div className="project--text-wrapper">
          <hr className="project--divider" />
          <p className="project--text-r">
            {text.projects.mongabay.text3}
          </p>
        </div>
      </div>
      {/* https://player.vimeo.com/video/804882847 */}

      {/* Manual */}
      <div className="project--img-wrapper bleed">
        <img className="project--img users-guide" alt=" " src={usersGuide} />
      </div>

      {/* Celular */}
      <div className="project--img-wrapper-half-l half-grid">
        <div className="project--text-wrapper">
          <hr className="project--divider" />
          <p className="project--text-l">
            {text.projects.mongabay.text4}
          </p>
        </div>

        <div className="project--iframe-wrapper ratio">
          <iframe
            title="gfx-essential"
            className="project--iframe"
            src="https://player.vimeo.com/video/804634415?background=1&autopause=0"
            loading="lazy"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>

        <script src="https://player.vimeo.com/api/player.js"></script>


      </div>

      {/* https://player.vimeo.com/video/804634415 */}

      <section className="project--credits-wrapper">
        <hr className="project--divider" />
        <h2>{text.projects.mongabay.credits.title}</h2>
        <p>{text.projects.mongabay.credits.julia} | Julia Lima</p>
        <p>{text.projects.mongabay.credits.carla} | Carla Dutra</p>
        <p>{text.projects.mongabay.credits.felipe} | Felipe Fernandes</p>
        <p>{text.projects.mongabay.credits.ana} | Ana Clara Korin</p>
      </section>
    </section>
  </main>
};

export default Mongabay;
