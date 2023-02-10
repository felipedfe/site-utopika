import React from 'react';

function About({ children }) {
  return (
    <section className="about--container">
      <h1>About!</h1>
      {children}
    </section>
  )
};

export default About;