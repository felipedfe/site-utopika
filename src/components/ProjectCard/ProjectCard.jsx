import React, { useState, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import myContext from '../../context/myContext';
import './project-card.css';

// priority: cards do topo da página, que carregam a imagem direto (sem lazy loading)
function ProjectCard({ project, priority = false }) {
  const { id, title, tags, tagsPt, images } = project;
  const { textLanguage } = useContext(myContext);

  const [isLoading, setIsLoading] = useState(true);

  // o nome do arquivo do thumb vem dos dados do projeto; thumbs animados são vídeo (.mp4)
  const folder = `images/projects/${id}`;
  const thumbnail = images.thumbnail;
  const isVideo = thumbnail.endsWith('.mp4');

  // hook para gerenciar quando o elemento entra na viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // apenas dispara uma vez
    threshold: 0,
    rootMargin: "300px", // começa a carregar um pouco antes de aparecer
    delay: 300,
    skip: priority,
  });

  return (
    <div key={id} className="projectcard--wrapper" ref={ref}>
      {(priority || inView) && (
        <>
          <div className="projectcard--hover-area">
            <div className="projectcard--hover-card">
              <h2>{title}</h2>
              <hr className="projectcard--card-divider"></hr>
              <div className="projectcard--tags-wrapper">
                {textLanguage === 'en'
                  ? tags.map((tag, index) => <span key={index}>{`#${tag}`}</span>)
                  : tagsPt.map((tag, index) => <span key={index}>{`#${tag}`}</span>)}
              </div>
            </div>
          </div>
          {isVideo ? (
            <video
              className="projectcard--img"
              src={`${folder}/${thumbnail}`}
              poster={`${folder}/thumb-poster.jpg`}
              aria-label={title}
              preload={priority ? 'auto' : 'metadata'}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              className="projectcard--img"
              src={isLoading ? `${folder}/thumb-low.jpg` : `${folder}/${thumbnail}`}
              alt={title}
              loading={priority ? 'eager' : 'lazy'}
              // minúsculo porque o React 18.2 ainda não reconhece fetchPriority
              fetchpriority={priority ? 'high' : undefined}
              onLoad={() => setIsLoading(false)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProjectCard;
