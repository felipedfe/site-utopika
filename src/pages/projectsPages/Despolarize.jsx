import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectIntro from '../../components/ProjectIntro/ProjectIntro'
import Credits from '../../components/Credits/Credits';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';

function Despolarize() {
  const { textLanguage } = useContext(myContext);

  const { pathname } = useLocation();

  const projectId = pathname.split('/').pop();

  const { projectsPage } = textOptions[textLanguage];

  const { title, introduction, credits, tags } = projectsPage[projectId];
  return (
    <>
      <ProjectIntro 
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <p>=========Despolarize==========</p>

      <Credits credits={credits} />
    </>
  )
};

export default Despolarize;
