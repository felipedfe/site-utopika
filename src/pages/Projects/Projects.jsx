import React, { useState, useEffect } from 'react';
import { projects, tags } from '../../data/projects';
import TagButton from '../../components/TagButton/TagButton';
import './projects.css';

function Projects({ children }) {
  // console.log(projects);
  const [tagsList, setTagsList] = useState([]);

  // const handleClick = ({ target }) => {
  //   setTagsList([...tagsList, target.value]);
  //   console.log(target);
  // };
  const handleClick = ({ target }, buttonOn) => {
    if (buttonOn) {
      setTagsList([...tagsList, target.value]);
    }
    else {
      const updatedTagsList = tagsList.filter((tag) => tag !== target.value)
      setTagsList(updatedTagsList);
    }
  };

  useEffect(() => {
    console.log(tagsList)
  }, [tagsList]);

  return (
    <section className="projects--container">
      <h1>projects!</h1>
      {children}
      <div className="projects--tag-btn-wraper" style={{ "marginLeft": "40%" }}>
        {/* {tags.map((tag) =>
          <button
            className="projects--tag-btn"
            onClick={handleClick}
            type="button"
            value={tag}
          >
            {tag}
          </button>)} */}
        {tags.map((tag) =>
          <TagButton handleClick={handleClick} tag={tag} />)}
      </div>
      {/* {projects.filter(({tags}) => tags.includes("animação"))
        .map((project) => <p>{project.title}</p>)
      } */}
      {projects.filter(({ tags }) => tagsList.every((tag) => tags.includes(tag)))
        .map((project) => <p>{project.title}</p>)
      }
    </section>
  )
};

export default Projects;