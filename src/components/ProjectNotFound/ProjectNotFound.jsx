import React from 'react';
import eyeGif from '../../assets/nao-encontrado-25fr-v2.gif';
import './project-not-found.css';

function ProjectNotFound() {
  return (
    <section className="not-found--container">
      <div className="not-found--img-wrapper">
        <img src={eyeGif} alt="gif de um olho"></img>
      </div>
      <p>Ainda não fizemos um projeto assim, vamos conversar?</p>
    </section>
  )
};

export default ProjectNotFound;
