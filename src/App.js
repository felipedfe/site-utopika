import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Projects, About } from './pages';
import PageLayout from './pages/PageLayout';
import MyProvider from './provider/myProvider';
import ScrollToTop from './helpers/ScrollToTop';
import './App.css';

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
        <Route exact path="/projetos/vozes-femininas" element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
          />
          <Route exact path="/projetos:id" element={
            <PageLayout>
              <About />
            </PageLayout>
          }
          />
          <Route exact path="/projetos" element={
            <PageLayout>
              <Projects />
            </PageLayout>
          }
          />
          <Route exact path="/sobre" element={
            <PageLayout>
              <About />
            </PageLayout>
          }
          />
          <Route exact path="/" element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
          />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
