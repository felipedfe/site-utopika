import React, { useState, useEffect, useContext } from 'react';
import myContext from '../../../context/myContext';
import { projects, allTags } from '../../../data/projects';
import { Link } from 'react-router-dom';
import TagButton from '../../../components/TagButton/TagButton';
import TagBtn from '../../../components/TagBtn'
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import ProjectNotFound from '../../../components/ProjectNotFound/ProjectNotFound';
import Tags from '../../../components/Tags/Tags';
import './projects.css';

function Projects() {
  const [loading, setLoading] = useState([]);

  const {
    textLanguage,
    isLargeScreen,
    setIsLargeScreen,
    setIsNavMenuDisabled,
    setIsSearchMenuDisabled,
    tagsList,
    setTagsList,
    largeScreenBreakPt } = useContext(myContext);

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
        <Link
          onClick={() => setIsNavMenuDisabled(true)}
          to={`${project.id}`}>
          {/* <button
            className="projects--project-btn"
            type="button"
            onClick={() => setIsNavMenuDisabled(true)}
          > */}
          <ProjectCard project={project} />
          {/* </button> */}
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
  // useEffect(() => {
  //   console.log(tagsList)
  // }, [tagsList]);

  useEffect(() => {
    // Quando o componente começa a montar é feita a checagem do tamanho da tela
    // para saber que tipo de menu será renderizado
    const checkForLargeScreen = () => window.innerWidth <= largeScreenBreakPt ? false : true;

    setIsLargeScreen(checkForLargeScreen());
    setLoading(false);
  }, []);


  window.addEventListener('resize', () => {
    if (window.innerWidth >= largeScreenBreakPt) {
      setIsLargeScreen(true)
      setIsNavMenuDisabled(true)
      setIsSearchMenuDisabled(true)
    } else {
      setIsLargeScreen(false)
    }
  });

  return (
    <main className="projects--container">
      {loading ? "Loading..." : isLargeScreen && <Tags />}
      <section className="projects--project-links">
        <div className="projects--links-grid">
          {filterProjects(projects)}
        </div>
      </section>
    </main>
  )
};

export default Projects;
