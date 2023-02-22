import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import './project.css';

function Project(props) {
  const { project } = props;
  const { textLanguage } = useContext(myContext);

  return (
    <div key={project.id} className="project--wrapper">
      <div className="project--hover-area">
        <div className="project--hover-card">
          <h2>{project.title}</h2>
          <hr className="project--card-divider"></hr>
          <div className="project--tags-wrapper">
            {/* {project.tags.map((tag) => <span>{`#${tag}`}</span>)} */}

            {textLanguage === 'en' ?
              project.tags.map((tag) => <span>{`#${tag}`}</span>) :
              project.tagsPt.map((tag) => <span>{`#${tag}`}</span>)}


          </div>
        </div>
      </div>
      <img
        className="project--img"
        src={project.imageThumb}
        alt={project.alt} />
    </div>
  )
};

export default Project;
