import React  from 'react';
import AboutVideo from '../../../components/VideoContainer/VideoContainer'
import TextAndContact from '../../../components/TextAndContact/TextAndContact';
import Profile from '../../../components/Profile/Profile';
import Clients from '../../../components/Clients/Clients';
import {
  Hr,
  ProfileSection,
  AboutContainer,
  ClientsSection,
} from './About.styled';

function About() {
  return (
    <AboutContainer>
      <AboutVideo
        url="https://player.vimeo.com/video/828038058"
        controls="1"
        // muted="1"
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
