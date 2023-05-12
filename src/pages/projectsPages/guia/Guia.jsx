import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
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

  @media all and (max-width: 700px) {
    display: block;
  }
`

function Guia({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="guia--container">
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/guia/guia-banner.jpg"
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
              src="/images/projects/guia/guia-frame-1.jpg"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/guia/guia-frame-2.png"
            />
          </ImageWrapper>
        </Row>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/guia/guia-frame-4.jpg"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/guia/guia-frame-3.jpg"
            />
          </ImageWrapper>
        </Row>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/guia/guia-paginas.gif"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/guia/guia-frame-5.jpg"
          />
        </ImageWrapper>
      </GridContainer>
      <Credits credits={credits} />
    </section>
  )
};

export default Guia;
