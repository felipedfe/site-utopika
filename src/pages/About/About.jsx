import React from 'react';
// import Contacts from '../../components/Contacts/Contacts';
import AboutVideo from '../../components/VideoContainer/VideoContainer';
import TextAndContact from '../../components/TextAndContact/TextAndContact';
import Profile from '../../components/Profile/Profile';
import Clients from '../../components/Clients/Clients';
import styled from 'styled-components';
import {
  Hr,
  ProfileSection,
  AboutContainer,
} from './About.styled';

const ClientsSection = styled.section`
  
`

function About() {
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
