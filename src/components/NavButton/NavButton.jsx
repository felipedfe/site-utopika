import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './nav-button.css';

function NavButton({ btnPath, buttonInnerText }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`nav-button ${location.pathname === btnPath ? "selected" : null}`}
      onClick={() => { navigate(btnPath) }}
    >
      {buttonInnerText}
    </button>
  )
}

export default NavButton;
