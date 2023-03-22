import React from 'react';
import eyeGif from '../../assets/GIF_teste_1.gif';
import './project-not-found.css';

function ProjectNotFound() {
  return <section className="project-not-found--container">
    <img src={eyeGif} alt="gif de um olho"></img>
    <p>Não encontrado!</p>
  </section>
};

export default ProjectNotFound;
