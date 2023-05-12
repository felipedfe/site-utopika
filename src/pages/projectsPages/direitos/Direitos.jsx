import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import styled from 'styled-components';

const ImageWrapper = styled.div`
height: 100%;
margin-bottom: -0.6rem;

img {
  width: 100%;
  /* height: 100%; */
}
`

function Direitos({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;



  return (
    <section className="direitos--container">
      <ImageWrapper>
        <picture>
          <source media="(max-width: 767px)" srcset="/images/projects/direitos/direitos-imagem-1-low.png" />
          <source media="(min-width: 768px)" srcset="/images/projects/direitos/direitos-imagem-1.png" />
          <img src="/images/projects/direitos/direitos-imagem-1.png" alt="" />
        </picture>
      </ImageWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <ImageWrapper>
        <picture>
          <source media="(max-width: 767px)" srcset="/images/projects/direitos/direitos-imagem-2-low.png" />
          <source media="(min-width: 768px)" srcset="/images/projects/direitos/direitos-imagem-2.png" />
          <img src="/images/projects/direitos/direitos-imagem-2.png" alt="" />
        </picture>
      </ImageWrapper>
      <ImageWrapper>
        <picture>
          <source media="(max-width: 767px)" srcset="/images/projects/direitos/direitos-imagem-3-low.png" />
          <source media="(min-width: 768px)" srcset="/images/projects/direitos/direitos-imagem-3.png" />
          <img src="/images/projects/direitos/direitos-imagem-3.png" alt="" />
        </picture>
      </ImageWrapper>
      <ImageWrapper>
        <picture>
          <source media="(max-width: 767px)" srcset="/images/projects/direitos/direitos-imagem-4-low.png" />
          <source media="(min-width: 768px)" srcset="/images/projects/direitos/direitos-imagem-4.png" />
          <img src="/images/projects/direitos/direitos-imagem-4.png" alt="" />
        </picture>
      </ImageWrapper>
      <Credits credits={credits} />
    </section>
  )
};

export default Direitos;
