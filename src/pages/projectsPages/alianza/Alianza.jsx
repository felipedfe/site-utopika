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

  @media all and (max-width: 700px) {
    display: block;
  }
`

const RowIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;

  @media all and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`

const RowVideoAndImg = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 64.5% 35.5%;
  
  @media all and (max-width: 700px) {
    display: block;
  }
`

const Alianza = ({ projectData }) => {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="alianza--container">
      <ImageWrapper>
        <img
          alt="ilustracao site"
          src="/images/projects/alianza/alianza-capa.jpg"
        />
      </ImageWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alianza/alianza-frame-1.jpg"
        />
      </ImageWrapper>

      <VideoContainer
        url="https://player.vimeo.com/video/947050279?h=b3b2eff425"
        autoPlay='1'
        loop='1'
        muted='1'
        aspectRatio="16/9"
      />

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/alianza/alianza-frame-2.jpg"
        />
      </ImageWrapper>

      {/* ícones */}
      <RowIcons>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/alianza/alianza-icone-1.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/alianza/alianza-icone-2.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/alianza/alianza-icone-3.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/alianza/alianza-icone-4.jpg"
          />
        </ImageWrapper>
      </RowIcons>

      <Row>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/alianza/alianza-frame-3.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/alianza/alianza-frame-4.jpg"
          />
        </ImageWrapper>
      </Row>

      <RowVideoAndImg>
        <VideoContainer
          url="https://player.vimeo.com/video/946673480?h=8da681b557"
          autoPlay='1'
          loop='1'
          muted='1'
          aspectRatio="1.27/1"
        />
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/alianza/alianza-frame-6.png"
          />
        </ImageWrapper>
      </RowVideoAndImg>

      <ImageWrapper>
          <img
            alt=""
            src="/images/projects/alianza/alianza-frame-7.jpg"
          />
        </ImageWrapper>

      <Row>
      <ImageWrapper>
          <img
            alt=""
            src="/images/projects/alianza/alianza-frame-9.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/alianza/alianza-frame-8.jpg"
          />
        </ImageWrapper>
      </Row>
      <Credits credits={credits} />
    </section>
  )
};

export default Alianza;
