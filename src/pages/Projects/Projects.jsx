import React, { useState, useEffect, useContext } from 'react';
import myContext from '../../context/myContext';
import { projects, allTags } from '../../data/projects';
import { Link } from 'react-router-dom';
import TagButton from '../../components/TagButton/TagButton';
import TagBtn from '../../components/TagBtn'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectNotFound from '../../components/ProjectNotFound/ProjectNotFound';
import './projects.css';

function Projects() {
  const [tagsList, setTagsList] = useState([]);

  const { textLanguage } = useContext(myContext);

  // Aqui é indicada a quantidade de main tags
  const mainTagsLimit = 4;

  const handleClick = ({ target }, buttonOn) => {
    // O botão está off nessa condição pq o setState demora para ser atualizado
    if (!buttonOn) {
      setTagsList([...tagsList, target.value]);
    }
    else {
      const updatedTagsList = tagsList.filter((tag) => tag !== target.value)
      setTagsList(updatedTagsList);
    }
  };

  const filterProjects = (projects) => {
    const filtered = projects.filter(({ tags }) => tagsList.every((tag) => tags.includes(tag)));

    if (!filtered.length) return <ProjectNotFound />

    return filtered.map((project) => {
      return (
        <Link to={`${project.id}`}>
          <ProjectCard project={project} />
        </Link>
      )
    });
  };

  const mainTags = (allTags) => {
    const mainTags = allTags[textLanguage].filter((_item, index) => index < mainTagsLimit);

    return mainTags.map((tag, index) =>
      <TagButton
        handleClick={handleClick}
        innerTextTag={tag}
        valueTag={allTags['en'][index]}
      />)
  };

  const secondaryTags = (allTags) => {
    const mainTags = allTags[textLanguage].filter((_item, index) => index >= mainTagsLimit);

    return mainTags.map((tag, index) =>
      <TagButton
        handleClick={handleClick}
        innerTextTag={tag}
        valueTag={allTags['en'][index + mainTagsLimit]}
      />)
  };

  // Retirar depois
  useEffect(() => {
    console.log(tagsList)
  }, [tagsList]);

  return (
    <main className="projects--container">
      <section className="projects--main-tags-btns">
        {mainTags(allTags)}
      </section>
      <section className="projects--secondary-tags-btns">
        {secondaryTags(allTags)}
      </section>
      <section className="projects--project-links">
        <div className="projects--links-grid">
          {/* {projects.filter(({ tags }) => tagsList.every((tag) => tags.includes(tag)))
            .map((project) => {
              return (
                <Link to="/sobre">
                  <Project project={project} />
                </Link>
              )
            })
          } */}
          {filterProjects(projects)}
        </div>
      </section>
    </main>
  )
};

export default Projects;
