import React, { useState } from 'react';
import './menu.css';

function Menu() {
  const [isMenuDisabled, setIsMenuDisabled] = useState(true);

  const showNavigation = () => setIsMenuDisabled((prevState) => !prevState);

  return (
    <section className="menu--container">
      <button
        type="button"
        className="menu--show-navigation"
        onClick={showNavigation}
      >
        Menu Icon
      </button>
      <nav style={isMenuDisabled ? { display: 'none' } : { display: 'flex' }}>
        <ul className="menu--nav-links">
          <li>
            <button
              type="button"
              className='selected'
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              type="button"
            >
              Sobre
            </button>
          </li>
        </ul>
      </nav>
    </section>
  )
};

export default Menu;
