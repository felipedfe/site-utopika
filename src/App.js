import { FaVimeo } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from "./assets/LOGO UTOPIKA_OK.png"
import PageLayout from './pages/PageLayout';
import Preview from './components/Preview/Preview';
import MyProvider from './provider/myProvider';
import Mongabay from './pages/projects/Mongabay';

function App() {
  return (
    <>
      <MyProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={
                <Preview />
            }
            />
            <Route exact path="/projetos/mongabay" element={
              <PageLayout>
                <Mongabay />
              </PageLayout>
            }
            />

          </Routes>
        </BrowserRouter>
      </MyProvider>
      {/* <main
        className="App">
        <div className="transparency-layer" />
        <div className="info-container">
          <h1 className="info-title">SITE EM BREVE</h1>
          <img className="info-logo" src={logo} alt="logo utopika"></img>
          <h3>contato@utopika.com.br</h3>
          <div className="icons-container">
            <a href="https://vimeo.com/utopika" rel="noreferrer" target="_blank">
              <FaVimeo className="icon" />
            </a>
            <a href="https://www.instagram.com/utopika_design/" rel="noreferrer" target="_blank">
              <RiInstagramFill className="icon" />
            </a>
          </div>
        </div>
        <div className="video-background">
          <div className="video-foreground">
            <iframe
              title="video-reel"
              src="https://player.vimeo.com/video/778199725?h=c1d00cc6da&autoplay=1&title=0&byline=0&portrait=0&controls=0&loop=1&muted=1"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay"
            >
            </iframe>
          </div>
        </div>
      </main> */}
    </>
  );
}

export default App;