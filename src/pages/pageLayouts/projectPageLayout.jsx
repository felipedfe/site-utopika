import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import styled from 'styled-components';

const Main = styled.main`
  margin: 0 4% 0 4%;
  max-width: 1200px;

  & p {
    margin-bottom: 10px;
  }

  @media all and (max-width: 1024px) {
    margin-left: 3%;
    margin-right: 3%;
  }
  @media all and (min-width: 1300px) {
    margin: auto;
  }
`

function ProjectPageLayout({ children }) {
  const { textLanguage } = useContext(myContext);

  const { pathname } = useLocation();

  const projectId = pathname.split('/').pop();
  console.log(projectId)

  const { projectsPage } = textOptions[textLanguage];

  // O cloneElement abaixo renderiza as children passando a prop projectData
  return (
    <Main>
      {React.cloneElement(children, { projectData: projectsPage[projectId] })}
    </Main>
  )
};

export default ProjectPageLayout;
