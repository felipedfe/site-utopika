import React, { useState, useEffect, useContext } from 'react';
// import Contacts from '../../components/Contacts/Contacts';
import AboutVideo from '../../../components/VideoContainer/VideoContainer'
import TextAndContact from '../../../components/TextAndContact/TextAndContact';
import Profile from '../../../components/Profile/Profile';
import Clients from '../../../components/Clients/Clients';
import styled from 'styled-components';
import {
  Hr,
  ProfileSection,
  AboutContainer,
} from './About.styled';
import myContext from '../../../context/myContext';

const ClientsSection = styled.section`
  
`

function About() {
  // const {
  //   setIsLargeScreen,
  //   setIsNavMenuDisabled,
  //   setIsSearchMenuDisabled,
  //   largeScreenBreakPt } = useContext(myContext);

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


  return (
    <AboutContainer>
      <AboutVideo
        url="https://player.vimeo.com/video/778199725"
        controls="1"
        muted="1"
      />
      <Hr />
      <TextAndContact />
      <ProfileSection>
        <Profile id="rachel" />
        <Profile id="julia" />
      </ProfileSection>
      <ClientsSection>
        <Clients />
      </ClientsSection>
    </AboutContainer>
  )
};

export default About;
