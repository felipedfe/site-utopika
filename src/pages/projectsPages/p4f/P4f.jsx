import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro';
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  height: 100%;
  /* margin-bottom: 2rem; */
  margin-bottom: -0.7rem;
  
  img {
    width: 100%;
  }
`

const MapImageWrapper = styled(ImageWrapper)`
  padding: 3rem 6rem;

  @media all and (max-width: 768px) {
    padding: 2rem 2rem;
  }
`

const Row = styled.div`
  width: 100%;
  display: flex;

  /* @media all and (max-width: 700px) {
    display: block;
  } */
`

const VideoWrapper = styled.section`
  width: 100%;
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`

function P4f({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="p4f--container">
      <ImageWrapper>
        <img alt="" src="/images/projects/p4f/pf4-capa.webp" />
      </ImageWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      {/* Vídeo em loop */}
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/956715177?h=673d3398ae"
          autoPlay='1'
          loop='1'
          muted='1'
          aspectRatio='801/451'
        />
      </VideoWrapper>

      <ImageWrapper>
        <img alt="" src="/images/projects/p4f/pf4-frame-1.jpg" />
      </ImageWrapper>

      <ImageWrapper>
        <img alt="" src="/images/projects/p4f/pf4-frame-2.jpg" />
      </ImageWrapper>

      {/* Vídeo em loop */}
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/956764756?h=e7f0957444"
          autoPlay='1'
          loop='1'
          muted='1'
        />
      </VideoWrapper>

      <ImageWrapper>
        <img alt="" src="/images/projects/p4f/pf4-frame-3.jpg" />
      </ImageWrapper>

      <MapImageWrapper>
        <img alt="" src="/images/projects/p4f/pf4-frame-6.jpg" />
      </MapImageWrapper>

      <ImageWrapper>
        <img alt="" src="/images/projects/p4f/pf4-frame-4.jpg" />
      </ImageWrapper>

      <ImageWrapper>
        <img alt="" src="/images/projects/p4f/pf4-frame-5.jpg" />
      </ImageWrapper>

      {/* Vídeo em loop */}
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/956775775?h=c26659ca22"
          autoPlay='1'
          loop='1'
          muted='1'
        />
      </VideoWrapper>
      
      <Credits credits={credits} />
    </section>
  )
};

export default P4f;
