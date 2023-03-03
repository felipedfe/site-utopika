import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { FaVimeoV, FaBehance } from "react-icons/fa";
import './footer.css';

function Footer() {
  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];

  return (
    <footer className="footer--container">

      <section className="footer--email-wrapper">
        <div className="footer--icon-wrapper">
          <i className="footer--icon footer--email-icon"><AiOutlineMail /></i>
        </div>
        {/* <span>julia@utopika.com.br | rachel@utopika.com</span> */}
        <div className="footer--email-addresses-wrapper">
          <span>julia@utopika.com.br |&nbsp;</span>
          <span>rachel@utopika.com</span>
        </div>
      </section>
      <section className="footer--icons">
        <div className="footer--icon-wrapper">
          <a href="https://www.instagram.com/utopika_design/" target="_blank">
            <i className="footer--icon icon-btn"><AiOutlineInstagram /></i>
          </a>
        </div>
        <div className="footer--icon-wrapper">
          <a href="https://vimeo.com/utopika" target="_blank">
            <i className="footer--icon icon-btn"><FaVimeoV /></i>
          </a>
        </div>
        <div className="footer--icon-wrapper">
          <i className="footer--icon icon-btn"><FaBehance /></i>
        </div>
      </section>
      <p className="footer--info">{text.footer.info}</p>
    </footer>
  )
};

export default Footer;