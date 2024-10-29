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
    fetch('https://utopika.com.br/renovar_token.php')
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          setToken(data.token);
        } else {
          setError("Token não encontrado.");
        }
      })
      .catch(err => {
        console.error("Erro ao buscar o token:", err);
        setError("Erro ao buscar o token.");
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
