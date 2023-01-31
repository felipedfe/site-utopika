import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Reel from './components/home-components/Reel/Reel';
import Intro from './components/home-components/Intro/Intro';
import Instagram from './components/home-components/Instagram/Instagram';
import Menu from './components/Menu/Menu';
import './App.css';

function App() {
  return (
    <main>
      <Menu />
      {/* <Reel /> */}
      {/* <Intro /> */}
      {/* <Instagram /> */}
    </main>
  );
}

export default App;
