import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import ImagesCarousel from '../../../components/ImagesCarousel/ImagesCarousel';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  height: 100%;
  margin-bottom: -0.7rem;
  
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

  @media all and (max-width: 600px) {
    display: block;
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
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <ImagesCarousel />
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/mata/mata-frame-3.jpg"
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/mata/mata-frame-2.jpg"
        />
      </ImageWrapper>
      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/mata/mata-frame-4.jpg"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/mata/mata-frame-5.jpg"
            />
          </ImageWrapper>
        </Row>
      </GridContainer>
      <Credits credits={credits} />
    </section>
  )
};

export default Mata;
