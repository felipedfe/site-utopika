import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Projects, About } from './pages';
import Menu from './components/Menu/Menu';
import MyProvider from './provider/myProvider';
import './App.css';

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <Home>
              <Menu />
            </Home>
          }
          />
          <Route exact path="/projetos" element={
            <Projects>
              <Menu />
            </Projects>
          }
          />
          <Route exact path="/sobre" element={
            <About>
              <Menu />
            </About>
          }
          />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
