import React from 'react';
import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro';

function VozesIn({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="vozesin--container">
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <Credits credits={credits} />
    </section>
  )
};

export default VozesIn;
