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

  /* @media all and (max-width: 700px) {
    display: block;
  } */
`

function Clima({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="clima--container">
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/943834459?h=0e8b14577b"
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
          src="/images/projects/clima/clima-frame-2.gif"
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/clima/clima-frame-1.jpg"
        />
      </ImageWrapper>

      <Row style={{ gap: '10px' }}>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/clima/clima-frame-9.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/clima/clima-frame-10.gif"
          />
        </ImageWrapper>
      </Row>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/943834153?h=e542dc4709"
          controls="1"
        />
      </VideoWrapper>

      <Row>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/clima/clima-frame-4.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/clima/clima-frame-3.jpg"
          />
        </ImageWrapper>
      </Row>

      {/* Vídeo em loop */}
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/948908027?h=3d3ef06475"
          autoPlay='1'
          loop='1'
          muted='1'
        />
      </VideoWrapper>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/943833148?h=b3d0b8570c"
          controls="1"
        />
      </VideoWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/clima/clima-frame-5.jpg"
        />
      </ImageWrapper>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/943833684?h=b265439924"
          controls="1"
        />
      </VideoWrapper>

      <Row style={{ gap: '10px' }}>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/clima/clima-frame-6.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/clima/clima-frame-7.gif"
          />
        </ImageWrapper>
      </Row>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/clima/clima-frame-8.jpg"
        />
      </ImageWrapper>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/943833905?h=dfd64d2134"
          controls="1"
        />
      </VideoWrapper>

      <Credits credits={credits} />
    </section>
  )
};

export default Clima;
