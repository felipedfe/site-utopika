import AboutVideo from '../../../components/VideoContainer/VideoContainer'
import TextAndContact from '../../../components/TextAndContact/TextAndContact';
import Profile from '../../../components/Profile/Profile';
import Clients from '../../../components/Clients/Clients';
import {
  Divider,
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
      />
      <Divider />
      <TextAndContact />
      <ProfileSection>
        <Profile id="rachel" />
        <Profile id="julia" />
        <Profile id="ana" />
        <Profile id="mauricio" />
      </ProfileSection>
      <ClientsSection>
        <Clients />
      </ClientsSection>
    </AboutContainer>
  )
};

export default About;
