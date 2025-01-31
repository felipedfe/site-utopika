import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  height: 100%;
  margin-bottom: -0.5rem;
  
  img {
    width: 100%;
  }
`

const Row = styled.div`
  width: 100%;
  display: flex;

  @media all and (max-width: 700px) {
    display: block;
  }
`

// const Container = styled.div`
//   display: flex; /* Exibe as imagens lado a lado */
//   justify-content: center; /* Centraliza as imagens */
//   align-items: center; /* Alinha as imagens verticalmente */
//   gap: 0; /* Remove qualquer espaço entre as imagens */
//   max-width: 100%; /* O container pode se ajustar ao tamanho da tela */
// `

// const Image = styled.img`
//   width: 30%; /* Cada imagem ocupa 50% do espaço do container */
//   max-width: 100%; /* Limita a largura ao tamanho máximo do container */
//   height: auto; /* Mantém a proporção original das imagens */
// `


function Facanhas({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="facanhas--container">
      <ImageWrapper>
        <img alt="" src="/images/projects/facanhas/facanhas-capa.jpg" />
      </ImageWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <ImageWrapper>
        <img alt="" src="/images/projects/facanhas/facanhas-frame-1.jpg" />
      </ImageWrapper>

      <Row>
        <ImageWrapper>
          <img alt="" src="/images/projects/facanhas/facanhas-frame-2.jpg" />
        </ImageWrapper>
        <ImageWrapper>
          <img alt="" src="/images/projects/facanhas/facanhas-frame-3.jpg" />
        </ImageWrapper>
      </Row>

      {/* <Container>
        <Image src="/images/projects/vozes/vozes-mao.gif"/>
        <Image src="/images/projects/vozes/vozes-frame-3.jpg"/>
      </Container> */}

      <ImageWrapper>
        <img alt="" src="/images/projects/facanhas/facanhas-frame-4.webp" />
      </ImageWrapper>

      <Row>
        <ImageWrapper>
          <img alt="" src="/images/projects/facanhas/facanhas-frame-6.webp" />
        </ImageWrapper>
        <ImageWrapper>
          <img alt="" src="/images/projects/facanhas/facanhas-frame-7.jpg" />
        </ImageWrapper>
      </Row>

      <Row>
        <ImageWrapper>
          <img alt="" src="/images/projects/facanhas/facanhas-frame-9.webp" />
        </ImageWrapper>
        <ImageWrapper>
          <img alt="" src="/images/projects/facanhas/facanhas-frame-8.webp" />
        </ImageWrapper>
      </Row>

      <ImageWrapper>
        <img alt="" src="/images/projects/facanhas/facanhas-frame-5.webp" />
      </ImageWrapper>

      <Credits credits={credits} />
    </section>
  )
};

export default Facanhas;
