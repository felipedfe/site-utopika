import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';

const VideoWrapper = styled.section`
  width: 100%;
`

function Rhino({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;
  return (
    <section className="rhino--container">
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/592360752?h=ba528bd0e4"
          controls="1"
        />
      </VideoWrapper>

      <Credits credits={credits} />
    </section>
  )
};

export default Rhino;
