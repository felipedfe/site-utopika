import React from 'react';
import styled from 'styled-components';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import Credits from '../../../components/Credits/Credits';
import VideoContainer from '../../../components/VideoContainer/VideoContainer';

function Pasto({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  const Row = styled.div`
    width: 100%;
    display: flex;

    @media all and (max-width: 600px) {
      display: block;
    }
  `
  const ImageWrapper = styled.div`
    height: 100%;
    margin-bottom: -0.5rem;

    img {
      width: 100%;
    }
  `

  return (
    <section className="pasto--container">
      <VideoContainer
        url="https://player.vimeo.com/video/588310310?h=5ed908ffe8"
        controls="1"
      />
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <Row>
        <ImageWrapper>
          <img src="/images/projects/pasto/pasto-frame-1.png" alt=""></img>
        </ImageWrapper>
        <ImageWrapper>
          <img src="/images/projects/pasto/pasto-frame-2.png" alt=""></img>
        </ImageWrapper>
        <ImageWrapper>
          <img src="/images/projects/pasto/pasto-frame-3.png" alt=""></img>
        </ImageWrapper>
      </Row>
      <Row>
        <ImageWrapper>
          <img src="/images/projects/pasto/pasto-frame-4.png" alt=""></img>
        </ImageWrapper>
      </Row>
      <Row>
        <ImageWrapper>
          <img src="/images/projects/pasto/pasto-frame-5.png" alt=""></img>
        </ImageWrapper>
        <ImageWrapper>
          <img src="/images/projects/pasto/pasto-frame-6.png" alt=""></img>
        </ImageWrapper>
      </Row>
      <Row>
        <ImageWrapper>
          <img src="/images/projects/pasto/pasto-frame-7.png" alt=""></img>
        </ImageWrapper>
      </Row>
      <Credits credits={credits} />
    </section>
  )
}

export default Pasto;
