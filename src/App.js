import { FaVimeo } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import './App.css';
import logo from "./assets/LOGO UTOPIKA_.png"

function App() {
  return (
    <main
      className="App">
      <div className="transparency-layer" />
      <div className="info-container">
        <h1 className="info-title">Site em breve</h1>
        <img className="info-logo" src={logo} alt="logo utopika"></img>
        <h3>contato@utopika.com.br</h3>
        <div className="icons-container">
          <a href="https://vimeo.com/utopika" rel="noreferrer" target="_blank">
            <FaVimeo className="icon" />
          </a>
          <a href="https://www.instagram.com/utopika_studio/" rel="noreferrer" target="_blank">
            <RiInstagramFill className="icon" />
          </a>
          {/* <FaInstagramSquare className="icon" /> */}
        </div>
      </div>
      <div className="video-background">
        <div className="video-foreground">
          <iframe
            title="video-reel"
            src="https://player.vimeo.com/video/778199725?h=c1d00cc6da&autoplay=1&title=0&byline=0&portrait=0&controls=0&loop=1&muted="
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay"
          >
          </iframe>
        </div>
      </div>

      {/* <div 
      className="iframe-container"
      >
        <iframe
        title="video-reel"
        src="https://player.vimeo.com/video/778199725?h=c1d00cc6da&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0"
        frameBorder="0"
        >
        </iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script> */}

      {/* <section className="reel-container">
        <div className="transparency-layer" />
        <div className="info-container">
          <h1 className="info-title">Site em breve</h1>
          <img className="info-logo" src={logo} alt="logo utopika"></img>
          <h3>contato@utopika.com.br</h3>
        </div>
        <video className="reel" muted loop>
          <source type="video/mp4"
            src={videoReel}
          >
          </source>
        </video>
      </section> */}
    </main>
  );
}

export default App;