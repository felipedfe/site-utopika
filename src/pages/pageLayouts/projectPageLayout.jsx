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
  margin: 0 4% 0 17%;
`

function ProjectPageLayout({ children }) {
  const {
    isLargeScreen,
    setIsLargeScreen,
    setIsNavMenuDisabled,
    setIsSearchMenuDisabled,
    largeScreenBreakPt } = useContext(myContext);
  const { pathname } = useLocation();

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
  return (
    <Main>
      {children}
    </Main>
  )
};

export default ProjectPageLayout;
