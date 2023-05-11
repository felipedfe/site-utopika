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

  @media all and (max-width: 700px) {
    display: block;
  }
`

function Sitawi({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="sitawi--container">
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/346163869?h=ba528bd0e4"
          controls="1"
        />
      </VideoWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <GridContainer>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/sitawi/sitawi-frame-2.jpg"
          />
        </ImageWrapper>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/sitawi/mundo.gif"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/sitawi/sitawi-frame-5.jpg"
            />
          </ImageWrapper>
        </Row>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/sitawi/sitawi-frame-6.jpg"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/sitawi/moeda.gif"
            />
          </ImageWrapper>
        </Row>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/sitawi/sitawi-frame-1.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/sitawi/sitawi-frame-3.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/sitawi/sitawi-frame-4.jpg"
          />
        </ImageWrapper>
      </GridContainer>
      <Credits credits={credits} />
    </section>
  )
};

export default Sitawi;
