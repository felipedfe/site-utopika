import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Projects, About } from './pages';
import PageLayout from './pages/PageLayout';
import MyProvider from './provider/myProvider';
import './App.css';

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <PageLayout>
              <Home />
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
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
