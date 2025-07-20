import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from '../../../style/breakpoints';

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
`

const GridContainer = styled.section`
  margin: auto;
  width: 100%;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  /* gap: 1rem; */

  @media all and (max-width: 700px) {
    display: block;
  }
`

const VideoWrapper = styled.section`
  width: 100%;
`

// const SpaceWrapper = styled.div`
//   width: 100%;
//   margin: 3rem 0;

//   @media all and (max-width: 768px) {
//     margin: 0;
//   }
// `

const ImageWrapper = styled.div`
  height: 100%;
  /* margin-bottom: -0.7rem; */

  img {
    width: 100%;
    display: block;
  }

  picture {
    width: 100%;
  }
`

function Revolusolar({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;
  return (
    <MainContainer>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/revolusolar/revolusolar-banner_1.png"
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
              src="/images/projects/revolusolar/revolusolar-frame-1.png"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/revolusolar/revolusolar-frame-2.png"
            />
          </ImageWrapper>
        </Row>
      </GridContainer>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/revolusolar/revolusolar-frame-3.png"
        />
      </ImageWrapper>

      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/revolusolar/revolusolar-frame-4.webp"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/revolusolar/revolusolar-frame-5.png"
            />
          </ImageWrapper>
        </Row>
      </GridContainer>

      <GridContainer>
        <Row>
          <ImageWrapper>
            <img
              alt=""
              src="/images/projects/revolusolar/revolusolar-frame-6.png"
            />
          </ImageWrapper>
          {/* <ImageWrapper>
            <img
              alt=""
              src="/images/projects/revolusolar/revolusolar-frame-7.png"
            />
          </ImageWrapper> */}
          <ImageWrapper>
            <picture style={{ width: '100%' }}>
              <source
                media={`(max-width: ${MOBILE_BREAKPOINT})`}
                srcSet="/images/projects/revolusolar/revolusolar-frame-7-low2.webp"
              />
              <img
                alt=""
                src="/images/projects/revolusolar/revolusolar-frame-7_2.png"
              />
            </picture>
          </ImageWrapper>
        </Row>
      </GridContainer>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/999171460?h=387f6ad2da"
          autoPlay='1'
          loop='1'
          muted='1'
          aspectRatio="16/9"
        />
      </VideoWrapper>

      <Credits credits={credits} />
    </MainContainer>
  )
};

export default Revolusolar;
