import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro';
import ImagesCarousel from '../../../components/ImagesCarousel/ImagesCarousel';
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  height: 100%;
  margin-bottom: -0.6rem;

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

const VideoWrapper = styled.section`
  width: 528px;

  @media all and (max-width: 700px) {
    width: 100%;
  }
`

function Mata({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="mata--container">
      <ImageWrapper>
        <img
          alt="mockup paginas"
          src="/images/projects/mata/mata-frame-2.jpg"
        />
      </ImageWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <ImagesCarousel />
      <ImageWrapper>
        <img
          alt="mockup livro na prateleira"
          src="/images/projects/mata/mata-frame-24.jpg"
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt="mockup capitulos guia"
          src="/images/projects/mata/mata-frame-16.jpg"
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt="mockup livro aberto"
          src="/images/projects/mata/mata-frame-25.jpg"
        />
      </ImageWrapper>
      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt="infografico"
              src="/images/projects/mata/mata-frame-23.jpg"
            />
          </ImageWrapper>
          <VideoWrapper>
            <VideoContainer
              url="https://player.vimeo.com/video/827035157?h=dd29bb272a"
              autoPlay='1'
              loop='1'
              muted='1'
              aspectRatio="1/1"
            />
          </VideoWrapper>
        </Row>
      </GridContainer>
      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt="mockup tablet"
              src="/images/projects/mata/mata-frame-20.jpg"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt="mapa mamíferos de grande e medio porte na floresta da tijuca"
              src="/images/projects/mata/mata-frame-21.jpg"
            />
          </ImageWrapper>
        </Row>
      </GridContainer>
      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt="programacao seminario"
              src="/images/projects/mata/mata-frame-11.jpg"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt="mockup seminario no pc"
              src="/images/projects/mata/mata-frame-12.jpg"
            />
          </ImageWrapper>
        </Row>
      </GridContainer>
      <ImageWrapper>
        <img
          alt="infografico bioma mata atlantica"
          src="/images/projects/mata/mata-frame-26.jpg"
        />
      </ImageWrapper>
      {/* <ImageWrapper>
        <img
          alt="mockup em tablet, celular, desktop e livro"
          src="/images/projects/mata/mata-frame-13.jpg"
        />
      </ImageWrapper> */}
      <Credits credits={credits} />
    </section>
  )
};

export default Mata;
