import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import './project-card.css';

function ProjectCard({ project }) {
  const { id, title, tags, tagsPt, alt } = project;
  const { textLanguage } = useContext(myContext);

  return (
    <div key={id} className="projectcard--wrapper">
      <div className="projectcard--hover-area">
        <div className="projectcard--hover-card">
          <h2>{title}</h2>
          <hr className="projectcard--card-divider"></hr>
          <div className="projectcard--tags-wrapper">
            {
              textLanguage === 'en' ?
                tags.map((tag, index) => <span key={index}>{`#${tag}`}</span>) :
                tagsPt.map((tag, index) => <span key={index}>{`#${tag}`}</span>)
              // tags[textLanguage].map((tag) => <span>{`#${tag}`}</span>)
            }
          </div>
        </div>
      </div>
      <img
        className="projectcard--img"
        // src={`images/projects/${id}/thumb.gif`}
        src={`images/projects/${id}/thumb.gif`}
        alt={alt}
        loading="lazy"
      />
    </div>
  )
};

export default ProjectCard;
