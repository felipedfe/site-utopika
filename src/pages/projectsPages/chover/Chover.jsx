import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

const SpaceWrapper = styled.div`
  width: 100%;
  margin: 3rem 0;

  @media all and (max-width: 768px) {
    margin: 0;
  }
`

const ImageWrapper = styled.div`
  height: 100%;
  margin-bottom: -0.7rem;

  img {
    width: 100%;
  }
`

const VideoWrapper2 = styled.section`
  width: 530px;

  @media all and (max-width: 700px) {
    width: 100%;
  }
`

const VideoWrapper = styled.section`
  width: 100%;
`

function Chover({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;
  return (
    <MainContainer>
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/999154901?h=948a18b813"
          controls="1"
        />
      </VideoWrapper>

      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/1053209710?h=c9e15f98c4"
          autoPlay='1'
          loop='1'
          muted='1'
          aspectRatio="16/10"
        />
      </VideoWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/chover/chover-frame-1.webp"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/chover/chover-frame-2.webp"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/chover/chover-frame-3.webp"
        />
      </ImageWrapper>

      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/chover/chover-frame-5.webp"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/chover/chover-frame-4.webp"
            />
          </ImageWrapper>
        </Row>
      </GridContainer>

      <SpaceWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/chover/chover-frame-6.webp"
          />
        </ImageWrapper>
      </SpaceWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/chover/chover-frame-7.webp"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/chover/chover-frame-8.webp"
        />
      </ImageWrapper>

      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/chover/chover-frame-9.webp"
            />
          </ImageWrapper>
          <VideoWrapper2>
            <VideoContainer
              url="https://player.vimeo.com/video/1053207327?h=88771e14e5"
              autoPlay='1'
              loop='1'
              muted='1'
              aspectRatio="9/16"
            />
          </VideoWrapper2>
        </Row>
      </GridContainer>

      <Credits credits={credits} />
    </MainContainer>
  )
};

export default Chover;
