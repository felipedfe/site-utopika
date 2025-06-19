import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro';
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import { VideoWrapper, Row, ImageWrapper } from '../../../style/reusable-components';

function FundingThePlanetsGuardians({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="funding-the-planets-guardians--container">
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/funding-the-planets-guardians/funding-frame-1.webp"
        />
      </ImageWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <Row>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/funding-the-planets-guardians/funding-frame-2.webp"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/funding-the-planets-guardians/funding-frame-3.png"
          />
        </ImageWrapper>
      </Row>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/funding-the-planets-guardians/funding-frame-4.png"
        />
      </ImageWrapper>

      <Row>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/funding-the-planets-guardians/funding-frame-5.webp"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/funding-the-planets-guardians/funding-frame-6.png"
          />
        </ImageWrapper>
      </Row>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/funding-the-planets-guardians/funding-frame-7.webp"
        />
      </ImageWrapper>

      <Row>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/funding-the-planets-guardians/funding-frame-8.webp"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/funding-the-planets-guardians/funding-frame-9.png"
          />
        </ImageWrapper>
      </Row>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/funding-the-planets-guardians/funding-frame-10.webp"
        />
      </ImageWrapper>

      <Row>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/funding-the-planets-guardians/funding-frame-11.png"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/funding-the-planets-guardians/funding-frame-12.webp"
          />
        </ImageWrapper>
      </Row>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/1007381880"
          autoPlay='1'
          loop='1'
          muted='1'
        />
      </VideoWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/funding-the-planets-guardians/funding-frame-13.webp"
        />
      </ImageWrapper>
      <Credits credits={credits} />
    </section>
  )
};

export default FundingThePlanetsGuardians;
