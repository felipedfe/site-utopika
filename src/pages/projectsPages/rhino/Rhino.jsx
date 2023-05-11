import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';

const VideoWrapper = styled.section`
  width: 100%;
`

const ImageWrapper = styled.div`
  height: 100%;
  margin-bottom: -0.5rem;
  
  img {
    width: 100%;
  }
`

const GridContainer = styled.section`
  margin: auto;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  /* gap: 0.5rem; */

  @media all and (max-width: 700px) {
    display: block;
  }
`

function Rhino({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="rhino--container">
      <ImageWrapper>
        <img
          alt="Rhino banner"
          src="/images/projects/rhino/rhino-banner.jpg"
        />
      </ImageWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/592360752?h=ba528bd0e4"
          controls="1"
        />
      </VideoWrapper>
      <GridContainer>
        <Row>
          <ImageWrapper>
            <img src="/images/projects/rhino/rhino-frame-1.jpg" alt=""/>
          </ImageWrapper>
          <ImageWrapper>
            <img src="/images/projects/rhino/rhino-frame-2.jpg" alt=""/>
          </ImageWrapper>
        </Row>
        <Row>
          <ImageWrapper>
            <img src="/images/projects/rhino/rhino-frame-4.jpg" alt=""/>
          </ImageWrapper>
        </Row>
        <Row>
          <ImageWrapper>
            <img src="/images/projects/rhino/rhino-frame-5.jpg" alt=""/>
          </ImageWrapper>
        </Row>
      </GridContainer>
      <Credits credits={credits} />
    </section>
  )
};

export default Rhino;
