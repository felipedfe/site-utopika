import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';

const VideoWrapper = styled.section`
  width: 100%;
`

// const GridContainer = styled.section`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 1fr 2fr 1fr;

//   grid-template-rows: 1fr 1fr 1fr;
// `

const GridContainer = styled.section`
  margin: auto;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;

  @media all and (max-width: 600px) {
    display: block;
  }
`

const ImageWrapper = styled.div`
  height: 100%;

  img {
    width: 100%;
    /* height: 100%; */
  }
`

function Refarm({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="refarm--container">
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/390162826?h=62a9dcd384"
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
          url="https://player.vimeo.com/video/390163102?h=ba528bd0e4"
          controls="1"
        />
      </VideoWrapper>
      <GridContainer>
        <Row>
          <ImageWrapper>
            <img src="/images/projects/refarm/lampada.gif" alt=""></img>
          </ImageWrapper>
          <ImageWrapper>
            <img src="/images/projects/refarm/farm-frame-2_wide.png" alt=""></img>
          </ImageWrapper>
        </Row>
        <Row>
          <ImageWrapper>
            <img src="/images/projects/refarm/farm-frame-3.png" alt=""></img>
          </ImageWrapper>
          <ImageWrapper>
            <img src="/images/projects/refarm/farm-frame-4.png" alt=""></img>
          </ImageWrapper>
        </Row>
        <Row>
          <ImageWrapper>
            <img src="/images/projects/refarm/farm-frame-6.png" alt=""></img>
          </ImageWrapper>
          <ImageWrapper>
            <img src="/images/projects/refarm/regador-v2.gif" alt=""></img>
          </ImageWrapper>
          <ImageWrapper>
            <img src="/images/projects/refarm/farm-frame-5.png" alt=""></img>
          </ImageWrapper>
        </Row>
      </GridContainer>

      <Credits credits={credits} />
    </section>
  )
};

export default Refarm;
