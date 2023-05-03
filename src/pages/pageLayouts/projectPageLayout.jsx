import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import LanguageBtn from '../../components/LanguageBtn/LanguageBtn';
import Footer from '../../components/Footer/Footer';
import Credits from '../../components/Credits/Credits';
import ProjectIntro from '../../components/ProjectIntro/ProjectIntro';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import { projects } from '../../data/projects';
import styled from 'styled-components';

// const Header = styled.header`
//   background-color: green;
//   height: 100px;

//   & > .menu--container {
//     position: absolute;
//     top: 4%;
//     left: 2%;
//   }
//   & > .lang-btn {
//     position: absolute;
//     top: 6%;
//     right: 2%;
//     color: #000;
//   }
// `;

const Main = styled.main`
  /* margin: 0 4% 0 17%; */
  margin: 0 4% 0 4%;
  max-width: 1200px;
  /* margin: auto; */

  @media all and (max-width: 1024px) {
    margin-left: 3%;
    margin-right: 3%;
  }
  @media all and (min-width: 1300px) {
    margin: auto;
  }
`

function ProjectPageLayout({ children }) {
  // const {
  //   isLargeScreen,
  //   setIsLargeScreen,
  //   setIsNavMenuDisabled,
  //   setIsSearchMenuDisabled,
  //   largeScreenBreakPt } = useContext(myContext);
  // const { pathname } = useLocation();


  const { textLanguage } = useContext(myContext);

  const { pathname } = useLocation();

  const projectId = pathname.split('/').pop();

  const { projectsPage } = textOptions[textLanguage];

  // const {
  //   title,
  //   introduction,
  //   credits,
  //   tags } = projectsPage[projectId];

  // useEffect(() => {
  //   // Quando o componente começa a montar é feita a checagem do tamanho da tela
  //   // para saber que tipo de menu será renderizado
  //   const checkForLargeScreen = () => window.innerWidth <= largeScreenBreakPt ? false : true;

  //   setIsLargeScreen(checkForLargeScreen());
  // }, []);


  // window.addEventListener('resize', () => {
  //   if (window.innerWidth >= largeScreenBreakPt) {
  //     setIsLargeScreen(true)
  //     setIsNavMenuDisabled(true)
  //     setIsSearchMenuDisabled(true)
  //   } else {
  //     setIsLargeScreen(false)
  //   }
  // });
  // console.log(isLargeScreen)
  // const { textLanguage } = useContext(myContext);

  // const { pathname } = useLocation();

  // const projectId = pathname.split('/').pop();

  // const { projectsPage } = textOptions[textLanguage];

  // const { credits } = projectsPage[projectId];
  // console.log('--->', projects)
  // console.log(projectsPage[projectId])
  return (
    <Main>
      {React.cloneElement(children, { projectData: projectsPage[projectId] })}
    </Main>
  )
};

export default ProjectPageLayout;
