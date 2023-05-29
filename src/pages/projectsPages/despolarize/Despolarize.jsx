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

function Despolarize({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="despolarize--container">
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/422989213?h=ba528bd0e4"
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
          src="/images/projects/despolarize/despolarize-frame-1.jpg"
        />
      </ImageWrapper>
      <Row>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/despolarize/despolarize-frame-3.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/despolarize/celular.gif"
          />
        </ImageWrapper>
      </Row>
      <Row>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/despolarize/oculos.gif"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/despolarize/despolarize-frame-2.jpg"
          />
        </ImageWrapper>
      </Row>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/despolarize/despolarize-frame-5.jpg"
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/despolarize/despolarize-frame-4.jpg"
        />
      </ImageWrapper>
      <Credits credits={credits} />
    </section>
  )
};

export default Despolarize;
