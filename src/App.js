import './App.css';
import videoReel from "./assets/edit 1-2_OK.mp4"
import logo from "./assets/LOGO UTOPIKA_.png"

function App() {
  return (
    <main className="App">
      {/* <div className="iframe-container">
          <iframe
            src="https://player.vimeo.com/video/778199725?h=c1d00cc6da&autoplay=1&loop=1" 
            title="reel"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script> */}
      <section className="reel-container">
        <div className="transparency-layer" />
        <div className="info-container">
          <h1 className="info-title">Site em breve</h1>
          <img className="info-logo" src={logo} alt="logo utopika"></img>
          <h3>contato@utopika.com.br</h3>
        </div>
        <video className="reel" autoPlay muted loop>
          <source type="video/mp4"
            src={videoReel}
          >
          </source>
        </video>
      </section>
    </main>
  );
}

export default App;