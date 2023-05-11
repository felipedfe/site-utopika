import React from 'react';
import logo from '../../assets/LOGO UTOPIKA_OK.png';
import {
  ReelSection,
  TransparecyLayer,
  LogoWrapper,
  Logo,
  VideoBackground,
  VideoForeground,
  Video,
} from './Reel.styled';

function Reel() {
  return (
    <ReelSection>
      <TransparecyLayer />
      <LogoWrapper>
        <Logo src={logo} alt="logo utopika" />
      </LogoWrapper>
      <VideoBackground>
        <VideoForeground>
          <Video
            title="video-reel"
            src="https://player.vimeo.com/video/778199725?h=c1d00cc6da&autoplay=0&title=0&byline=0&portrait=0&controls=0&loop=1&muted=1"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay"
          />
        </VideoForeground>
      </VideoBackground>
    </ReelSection>
  )
};

export default Reel;
