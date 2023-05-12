import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import styled from 'styled-components';

function Mata({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;
  return (
    <section className="mata--container">
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <Credits credits={credits} />
    </section>
  )
};

export default Mata;
