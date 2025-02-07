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
  width: 382px;

  @media all and (max-width: 700px) {
    width: 100%;
    margin-top: 2rem;
  }
`

const VideoWrapper3 = styled.section`
  width: 560px;

  @media all and (max-width: 700px) {
    width: 100%;
    margin-top: 2rem
  }
`

const VideoWrapper = styled.section`
  width: 100%;
`

function Agricultura({ projectData }) {
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

      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/agricultura/agricultura-frame-11.png"
            />
          </ImageWrapper>
          <VideoWrapper3>
            <VideoContainer
              url="https://player.vimeo.com/video/1054227293?h=8032962080"
              autoPlay='1'
              loop='1'
              muted='1'
              aspectRatio="3/4.8"
            />
          </VideoWrapper3>
        </Row>
      </GridContainer>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/agricultura/agricultura-frame-1-b.png"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/agricultura/agricultura-frame-2.png"
        />
      </ImageWrapper>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/1054227260?h=0a05d95b6b"
          autoPlay='1'
          loop='1'
          muted='1'
        />
      </VideoWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/agricultura/agricultura-frame-3-c.png"
        />
      </ImageWrapper>

      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/agricultura/agricultura-frame-5.png"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/agricultura/agricultura-frame-4.png"
            />
          </ImageWrapper>
        </Row>
      </GridContainer>

      <SpaceWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/agricultura/agricultura-frame-6.png"
          />
        </ImageWrapper>
      </SpaceWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/agricultura/agricultura-frame-7-c.png"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/agricultura/agricultura-frame-8.png"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/agricultura/agricultura-frame-10.webp"
        />
      </ImageWrapper>

      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/agricultura/agricultura-frame-9-b.png"
            />
          </ImageWrapper>
          <VideoWrapper2>
            <VideoContainer
              url="https://player.vimeo.com/video/1054227248?h=8b4a6dbfe0"
              autoPlay='1'
              loop='1'
              muted='1'
              aspectRatio="3/4"
            />
          </VideoWrapper2>
        </Row>
      </GridContainer>

      <Credits credits={credits} />
    </MainContainer>
  )
};

export default Agricultura;
