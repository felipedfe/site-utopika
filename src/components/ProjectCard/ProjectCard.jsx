// import React, { useContext } from 'react';
// import myContext from '../../context/myContext';
// import './project-card.css';

// function ProjectCard({ project }) {
//   const { id, title, tags, tagsPt, alt } = project;
//   const { textLanguage } = useContext(myContext);

//   return (
//     <div key={id} className="projectcard--wrapper">
//       <div className="projectcard--hover-area">
//         <div className="projectcard--hover-card">
//           <h2>{title}</h2>
//           <hr className="projectcard--card-divider"></hr>
//           <div className="projectcard--tags-wrapper">
//             {
//               textLanguage === 'en' ?
//                 tags.map((tag, index) => <span key={index}>{`#${tag}`}</span>) :
//                 tagsPt.map((tag, index) => <span key={index}>{`#${tag}`}</span>)
//             }
//           </div>
//         </div>
//       </div>
//       <img
//         className="projectcard--img"
//         src={`images/projects/${id}/thumb.gif`}
//         alt={alt}
//         loading="lazy"
//       />
//     </div>
//   )
// };

// export default ProjectCard;


import React, { useState, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import myContext from '../../context/myContext';
import './project-card.css';

function ProjectCard({ project }) {
  const { id, title, tags, tagsPt, alt } = project;
  const { textLanguage } = useContext(myContext);

  const [isLoading, setIsLoading] = useState(true);

  // hook para gerenciar quando o elemento entra na viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // apenas dispara uma vez
    threshold: 0.1, // 10% do elemento precisa estar visível
    rootMargin: "50px",
    delay: 300,
  });

  return (
    <div key={id} className="projectcard--wrapper" ref={ref}>
      {inView ? (
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
          <img
            className="projectcard--img"
            src={`images/projects/${id}/thumb.gif`}
            alt={title}
            loading="lazy" // HTML lazy loading adicional
            onLoad={() => setIsLoading(false)}
          />
        </>
      ) : (
        <div className="projectcard--placeholder">
          {/* Placeholder enquanto o elemento não está visível */}

          {isLoading && <div className="placeholder-img" />}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
