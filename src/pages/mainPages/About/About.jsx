import React, { useState, useEffect } from 'react';
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
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

useEffect(() => {
    fetch('https://www.utopika.com.br/get-token.php')
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro na resposta do servidor");
        }
        return response.json();
      })
      .then(data => {
        setToken(data.token);
      })
      .catch(error => {
        console.error("Erro ao buscar o token:", error);
        setError("Não foi possível obter o token.");
      });
  }, []);

  useEffect(() => {
    console.log('TOKEN: ', token);
  },[token]);

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
      </ProfileSection>
      <ClientsSection>
        <Clients />
      </ClientsSection>
    </AboutContainer>
  )
};

export default About;
