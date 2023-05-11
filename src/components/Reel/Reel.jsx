import React from 'react';
import logo from '../../assets/LOGO UTOPIKA_OK.png';
import './reel.css';

function Reel() {
  return (
    <section className="reel--container">
      <div className="reel--transparency-layer" />
      <div className="reel--info-container">
        <img className="info-logo" src={logo} alt="logo utopika"></img>
      </div>
      <div className="reel--video-background">
        <div className="reel--video-foreground">
          <iframe
            title="video-reel"
            src="https://player.vimeo.com/video/778199725?h=c1d00cc6da&autoplay=1&title=0&byline=0&portrait=0&controls=0&loop=1&muted=1&autopause=0"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay"
          >
          </iframe>
        </div>
      </div>
    </section>
  )
};

export default Reel;
