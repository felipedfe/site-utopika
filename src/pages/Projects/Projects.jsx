import React from 'react';

function Projects({ children }) {
  return (
    <section className="projects--container">
      <h1>projects!</h1>
      {children}
    </section>
  )
};

export default Projects;