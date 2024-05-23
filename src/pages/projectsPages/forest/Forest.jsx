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

const RowSeparator = styled.div`
    width: 100%;
    display: flex;
    padding: 24px 0;

    @media all and (max-width: 700px) {
      flex-direction: column;
      /* gap: 22px; */
  }
`

const RowVideoAndImg = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 56.8% 43.2%;
  
  @media all and (max-width: 700px) {
    display: block;
  }
`

function Forest({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="forest--container">
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/forest/forest-frame-1.jpg"
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
          src="/images/projects/forest/forest-frame-2.jpg"
        />
      </ImageWrapper>

      <RowSeparator>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/forest/forest-frame-3.jpg"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/forest/forest-frame-4.jpg"
          />
        </ImageWrapper>
      </RowSeparator>

      <RowVideoAndImg>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/forest/forest-frame-5.jpg"
          />
        </ImageWrapper>
        <VideoWrapper>
          <VideoContainer
            url="https://player.vimeo.com/video/948908065?h=dcdd8b7b5e"
            controls='1'
            aspectRatio="110/197"
          />
        </VideoWrapper>
      </RowVideoAndImg>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/forest/forest-frame-6.jpg"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/forest/gif_capas.gif"
        />
      </ImageWrapper>
      <Credits credits={credits} />
    </section>
  )
};

export default Forest;
