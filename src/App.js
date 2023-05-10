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
