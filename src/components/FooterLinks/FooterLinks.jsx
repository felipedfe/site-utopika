import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaVimeoV, FaBehance } from "react-icons/fa";

function FooterLinks() {
  return (
    <section className="footer--icons">
      <div className="footer--icon-wrapper">
        <a href="https://www.instagram.com/utopika_estudio/" rel="noreferrer" target="_blank">
          <i className="footer--icon icon-btn"><AiOutlineInstagram /></i>
        </a>
      </div>
      <div className="footer--icon-wrapper">
        <a href="https://vimeo.com/utopika" rel="noreferrer" target="_blank">
          <i className="footer--icon icon-btn"><FaVimeoV /></i>
        </a>
      </div>
      <div className="footer--icon-wrapper">
        <a href="https://www.behance.net/utopika_" rel="noreferrer" target="_blank">
          <i className="footer--icon icon-btn"><FaBehance /></i>
        </a>
      </div>
    </section>
  )
};

export default FooterLinks;
