import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  height: 100%;
  margin-bottom: 2rem;
  
  img {
    width: 100%;
  }
`

const Row = styled.div`
  width: 100%;
  display: flex;

  /* @media all and (max-width: 700px) {
    display: block;
  } */
`

const VideoWrapper = styled.div`
  position: relative;
  padding: 56.25% 0 0 0;
  width: 100%;
  aspect-ratio: 16/9;
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`

function Captura({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="captura--container">
      <VideoWrapper>
        <Video
          title="video-container"
          src={`https://www.youtube.com/embed/z2MiSL5bjF0`}
          frameBorder="0"
          allow="autoplay"
          loading="lazy"
        />
      </VideoWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <ImageWrapper>
        <img alt="" src="/images/projects/captura/captura-frame-2.jpg" />
      </ImageWrapper>
      <ImageWrapper>
        <img alt="" src="/images/projects/captura/captura-frame-7.jpg" />
      </ImageWrapper>
      <ImageWrapper>
        <img alt="" src="/images/projects/captura/captura-frame-8.jpg" />
      </ImageWrapper>
      <Row>
        <ImageWrapper>
          <img alt="" src="/images/projects/captura/balanco.gif" />
        </ImageWrapper>
        <ImageWrapper>
          <img alt="" src="/images/projects/captura/titereiro.gif" />
        </ImageWrapper>
      </Row>
      <ImageWrapper>
        <img alt="" src="/images/projects/captura/captura-frame-6.jpg" />
      </ImageWrapper>
      <Row>
        <ImageWrapper>
          <img alt="" src="/images/projects/captura/banco.gif" />
        </ImageWrapper>
        <ImageWrapper>
          <img alt="" src="/images/projects/captura/letreiro.gif" />
        </ImageWrapper>
      </Row>
      <ImageWrapper>
        <img alt="" src="/images/projects/captura/captura-frame-1.jpg" />
      </ImageWrapper>
      <Credits credits={credits} />
    </section>
  )
};

export default Captura;
