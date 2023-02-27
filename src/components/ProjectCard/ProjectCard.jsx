import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import './project-card.css';

function ProjectCard(props) {
  const { project } = props;
  const { textLanguage } = useContext(myContext);

  return (
    <div key={project.id} className="projectcard--wrapper">
      <div className="projectcard--hover-area">
        <div className="projectcard--hover-card">
          <h2>{project.title}</h2>
          <hr className="projectcard--card-divider"></hr>
          <div className="projectcard--tags-wrapper">
            {/* {project.tags.map((tag) => <span>{`#${tag}`}</span>)} */}

            {textLanguage === 'en' ?
              project.tags.map((tag) => <span>{`#${tag}`}</span>) :
              project.tagsPt.map((tag) => <span>{`#${tag}`}</span>)}


          </div>
        </div>
      </div>
      <img
        className="projectcard--img"
        src={project.imageThumb}
        alt={project.alt} />
    </div>
  )
};

export default ProjectCard;
