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

const VideoWrapper2 = styled.section`
  width: 750px;

  @media all and (max-width: 700px) {
    width: 100%;
  }
`

const VideoWrapper = styled.section`
  width: 100%;
`

function Solidaria({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;
  return (
    <section className="solidaria--container">
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/solidaria/solidaria-banner.webp"
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
              src="/images/projects/solidaria/solidaria-frame-1.webp"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/solidaria/solidaria-frame-2.webp"
            />
          </ImageWrapper>
        </Row>
      </GridContainer>

      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/solidaria/solidaria-frame-3.webp"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/solidaria/solidaria-frame-4.webp"
            />
          </ImageWrapper>
        </Row>
      </GridContainer>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/1053204918?h=99a28fa444"
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
              src="/images/projects/solidaria/solidaria-frame-5.webp"
            />
          </ImageWrapper>
          <VideoWrapper2>
            <VideoContainer
              url="https://player.vimeo.com/video/999171167?h=e63a8db4f1"
              autoPlay='1'
              loop='1'
              muted='1'
              aspectRatio="4/5"
            />
          </VideoWrapper2>
        </Row>
      </GridContainer>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/solidaria/solidaria-frame-6.webp"
        />
      </ImageWrapper>

      <Credits credits={credits} />
    </section>
  )
};

export default Solidaria;
