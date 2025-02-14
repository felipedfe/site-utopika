import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
`

const GridContainer = styled.section`
  margin: auto;
  width: 100%;
`

const Row = styled.div`
  width: 100%;
  display: flex;

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

const Spacer = styled.div`
  height: ${(props) => props.size || "1rem"};

  @media all and (max-width: 768px) {
    height: 1.5rem;
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

function Alziras({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;
  return (
    <MainContainer>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alziras/alziras-banner.jpg"
        />
      </ImageWrapper>

      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/1043148856?h=e4ad033713"
          autoPlay='1'
          loop='1'
          muted='1'
          aspectRatio="16/9"
        />
      </VideoWrapper>

      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/alziras/alziras-frame-2.webp"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/alziras/alziras-frame-3.png"
            />
          </ImageWrapper>
        </Row>
      </GridContainer>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alziras/alziras-frame-4.png"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alziras/alziras-frame-5.png"
        />
      </ImageWrapper>

      <Spacer size="3rem" />

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alziras/alziras-frame-6.png"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alziras/alziras-frame-7.png"
        />
      </ImageWrapper>

      <Spacer size="3rem" />

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alziras/alziras-frame-8.png"
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alziras/alziras-frame-9.png"
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alziras/alziras-frame-10.png"
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alziras/alziras-frame-11.png"
        />
      </ImageWrapper>

      <Spacer size="3rem"/>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alziras/alziras-frame-12.png"
        />
      </ImageWrapper>

      <Credits credits={credits} />
    </MainContainer>
  )
};

export default Alziras;
