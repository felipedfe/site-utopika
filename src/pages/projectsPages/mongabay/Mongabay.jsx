import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import Credits from '../../../components/Credits/Credits';
import myContext from '../../../context/myContext';
import { textLanguages as textOptions } from '../../../data/languages';
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import './mongabay.css';

function Mongabay({ projectData }) {
  // const { textLanguage } = useContext(myContext);

  // const { pathname } = useLocation();

  // const projectId = pathname.split('/').pop();

  // const { projectsPage } = textOptions[textLanguage];

  // const {
  //   title,
  //   paragraph1,
  //   paragraph2,
  //   paragraph3,
  //   introduction,
  //   credits,
  //   tags } = projectsPage[projectId];

  const {
    title,
    introduction,
    paragraph1,
    paragraph2,
    paragraph3,
    credits,
    tags } = projectData;

  return (
    <section className="project--container menu-space">
      <VideoContainer
        url="https://player.vimeo.com/video/803576468?h=c1d00cc6da"
        controls="1"
      />
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
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
              {paragraph1}
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
              allowfullscreen
            >
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>

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
              {paragraph2}
            </p>
          </div>
        </div>
        {/* https://player.vimeo.com/video/804882847 */}

        {/* Manual */}
        <div className="project--img-wrapper">
          <img
            className="project--img users-guide"
            alt="Users Guide"
            src="/images/projects/mongabay/users-guide.jpg"
          />
        </div>

        {/* Celular */}
        <div className="project--img-wrapper-half-l half-grid">
          <div className="project--text-wrapper">
            <hr className="project--divider" />
            <p className="project--text-l">
              {paragraph3}
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


      </section>



      <Credits credits={credits} />
    </section>
  )
};

export default Mongabay;
