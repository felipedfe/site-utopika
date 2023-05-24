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

function Plastico({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="plastico--container">
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/394990292?h=ba528bd0e4"
          controls="1"
        />
      </VideoWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/plastico/plastico-frame-8.jpg"
        />
      </ImageWrapper>

      <Row>
        <ImageWrapper>
          <img src="/images/projects/plastico/plastico-frame-3.jpg" alt=""></img>
        </ImageWrapper>
        <ImageWrapper>
          <img src="/images/projects/plastico/plastico-frame-4.jpg" alt=""></img>
        </ImageWrapper>
      </Row>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/plastico/plastico-frame-2.jpg"
        />
      </ImageWrapper>

      <Row>
        <ImageWrapper>
          <img src="/images/projects/plastico/plastico-frame-6.jpg" alt=""></img>
        </ImageWrapper>
        <ImageWrapper>
          <img src="/images/projects/plastico/plastico-frame-5.jpg" alt=""></img>
        </ImageWrapper>
        <ImageWrapper>
          <img src="/images/projects/plastico/plastico-frame-7.jpg" alt=""></img>
        </ImageWrapper>
      </Row>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/plastico/plastico-frame-1.jpg"
        />
      </ImageWrapper>

      <Credits credits={credits} />
    </section>
  )
};

export default Plastico;
