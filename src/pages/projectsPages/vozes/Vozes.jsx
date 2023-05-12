import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';

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

const ImageWrapper = styled.div`
  height: 100%;
  margin-bottom: -0.7rem;

  img {
    width: 100%;
  }
`

const VideoWrapper = styled.section`
  /* height: 500px; */
  width: 500px;

  @media all and (max-width: 700px) {
    width: 100%;
  }
`

function Vozes({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;
  return (
    <section className="rhino--container">
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/vozes/vozes-banner-2.jpg"
        />
      </ImageWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/vozes/vozes-frame-2.jpg"
            />
          </ImageWrapper>
          <VideoWrapper>
            <VideoContainer
              url="https://player.vimeo.com/video/824858304?h=dd29bb272a"
              autoPlay='1'
              loop='1'
              muted='1'
              aspectRatio="1/1"
            />
          </VideoWrapper>
        </Row>
      </GridContainer>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/vozes/vozes-frame-1.jpg"
        />
      </ImageWrapper>
      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/vozes/vozes-mao.gif"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/vozes/vozes-frame-3.jpg"
            />
          </ImageWrapper>
        </Row>
      </GridContainer>
      <Credits credits={credits} />
    </section>
  )
};

export default Vozes;
