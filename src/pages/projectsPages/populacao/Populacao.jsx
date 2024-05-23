import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro';
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';

const VideoWrapper = styled.section`
  width: 100%;
`

const ImageWrapper = styled.div`
  height: 100%;
  margin-bottom: -0.7rem;
  
  img {
    width: 100%;
  }
`

const Row = styled.div`
  width: 100%;
  display: flex;

  @media all and (max-width: 700px) {
    display: block;
  }
`

function Populacao({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="populacao--container">
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/populacao/populacao-frame-1.jpg"
        />
      </ImageWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/948908048?h=3d52402e32"
          autoPlay='1'
          loop='1'
          muted='1'
          aspectRatio='865/577'
        />
      </VideoWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/populacao/populacao-frame-2.jpg"
        />
      </ImageWrapper>

        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/populacao/populacao-frame-3.jpg"
          />
        </ImageWrapper>

        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/populacao/populacao-frame-4.jpg"
          />
        </ImageWrapper>

        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/populacao/populacao-frame-5.jpg"
          />
        </ImageWrapper>

        <ImageWrapper>
        <img
          alt=""
          src="/images/projects/populacao/populacao-frame-6.jpg"
        />
      </ImageWrapper>

      <Credits credits={credits} />
    </section>
  )
};

export default Populacao;
