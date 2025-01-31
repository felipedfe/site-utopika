import React, { useState, useEffect, useContext } from 'react';
import myContext from '../../../context/myContext';
import { projects } from '../../../data/projects';
import { Link } from 'react-router-dom';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import ProjectNotFound from '../../../components/ProjectNotFound/ProjectNotFound';
import Tags from '../../../components/Tags/Tags';
import './projects.css';

function Projects() {
  const [loading, setLoading] = useState(true);

  const {
    isLargeScreen,
    setIsLargeScreen,
    setIsNavMenuDisabled,
    setIsSearchMenuDisabled,
    tagsList,
    largeScreenBreakPt } = useContext(myContext);

  const filterProjects = (projects) => {
    const filtered = projects.filter(({ tags }) => tagsList.every((tag) => tags.includes(tag)));

    if (!filtered.length) return <ProjectNotFound />

    return filtered.map((project, index) => {
      return (
        <Link
          key={index}
          onClick={() => setIsNavMenuDisabled(true)}
          to={`${project.id}`}
        >
          <ProjectCard project={project} />
        </Link>
      )
    });
  };

  useEffect(() => {
    // Quando o componente começa a montar é feita a checagem do tamanho da tela
    // para saber que tipo de menu será renderizado
    const checkForLargeScreen = () => window.innerWidth <= largeScreenBreakPt ? false : true;

    setIsLargeScreen(checkForLargeScreen());
    setLoading(false);
  }, []);


  window.addEventListener('resize', () => {
    if (window.innerWidth > largeScreenBreakPt) {
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
