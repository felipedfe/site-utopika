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
  /* gap: 0.5rem; */

  @media all and (max-width: 700px) {
    display: block;
  }
  `

function Olhar({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="olhar--container">
      <ImageWrapper>
        <img
          alt="Olhar banner"
          src="/images/projects/olhar/olhar-banner.jpg"
        />
      </ImageWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <GridContainer>
        <ImageWrapper>
          <img
            alt="livro aberto mostrando imagem"
            src="/images/projects/olhar/olhar-frame-4.jpg"
          />
        </ImageWrapper>
        <Row>
          <ImageWrapper>
            <img
              alt="close capa"
              src="/images/projects/olhar/olhar-frame-1.jpg"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt="close livro aberto"
              src="/images/projects/olhar/olhar-frame-2.jpg"
            />
          </ImageWrapper>
        </Row>
        <ImageWrapper>
          <img
            alt="close sumário"
            src="/images/projects/olhar/olhar-frame-3.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt="livro aberto mostrando imagem"
            src="/images/projects/olhar/olhar-frame-5.jpg"
          />
        </ImageWrapper>
      </GridContainer>
      <Credits credits={credits} />
    </section>
  )
};

export default Olhar;
