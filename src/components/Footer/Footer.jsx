import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data';
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import './footer.css';

function Footer() {
  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];

  return (
    <footer className="footer--container">
      <p className="footer--info">{text.footer.info}</p>
      <section className="footer--email-wrapper">
        <div className="footer--icon-wrapper">
          <i className="footer--icon footer--email-icon"><AiOutlineMail /></i>
        </div>
        <span>julia@utopika.com.br | rachel@utopika.com</span>
      </section>
      <section className="footer--icons">
        <div className="footer--icon-wrapper">
          <i className="footer--icon"><AiOutlineInstagram /></i>
        </div>
        <div className="footer--icon-wrapper">
          <i className="footer--icon"><AiOutlineInstagram /></i>
        </div>
        <div className="footer--icon-wrapper">
          <i className="footer--icon"><AiOutlineInstagram /></i>
        </div>
      </section>
    </footer>
  )
};

export default Footer;
