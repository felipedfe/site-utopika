import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Projects, About } from './pages/mainPages';
import {
  Mongabay,
  Plenamata,
  Refarm,
  Pasto,
  Direitos,
  Rhino,
  Vozes,
  Olhar,
  Guia,
  Sitawi,
  Mata,
  VozesIn,
  Plastico,
  Captura,
  Despolarize,
  Alianza,
  Clima,
  Forest,
  Populacao,
  P4f,
  Facanhas,
  Solidaria,
  Agricultura,
  MareDeCiencia,
} from './pages/projectsPages';
import MainPageLayout from './pages/pageLayouts/mainPageLayout';
import ProjectPageLayout from './pages/pageLayouts/projectPageLayout';
import MyProvider from './provider/myProvider';
import ScrollToTop from './helpers/ScrollToTop';
import './App.css';

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/projetos/mongabay" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Mongabay />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/plenamata" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Plenamata />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/refarm" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Refarm />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/pasto" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Pasto />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/direitos" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Direitos />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/rhino" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Rhino />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/vozes" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Vozes />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/olhar" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Olhar />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/guia" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Guia />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/sitawi" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Sitawi />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/mata" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Mata />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/vozesin" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <VozesIn />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/plastico" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Plastico />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/captura" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Captura />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/despolarize" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Despolarize />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/alianza" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Alianza />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/clima" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Clima />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/forest" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Forest />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/populacao" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Populacao />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/p4f" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <P4f />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
           <Route exact path="/projetos/facanhas" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Facanhas />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/solidaria" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Solidaria />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/agricultura" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <Agricultura />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />
          <Route exact path="/projetos/mare-de-ciencia" element={
            <MainPageLayout>
              <ProjectPageLayout>
                <MareDeCiencia />
              </ProjectPageLayout>
            </MainPageLayout>
          }
          />

          <Route exact path="/projetos" element={
            <MainPageLayout>
              <Projects />
            </MainPageLayout>
          }
          />
          <Route exact path="/sobre" element={
            <MainPageLayout>
              <About />
            </MainPageLayout>
          }
          />
          <Route exact path="/" element={
            <MainPageLayout>
              <Home />
            </MainPageLayout>
          }
          />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
