import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import { AiOutlineMail } from "react-icons/ai";
import FooterLinks from '../FooterLinks/FooterLinks';
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
        <div className="footer--email-addresses-wrapper">
          <span>julia@utopika.com.br |&nbsp;</span>
          <span>rachel@utopika.com.br</span>
        </div>
      </section>
      <FooterLinks />
      <p className="footer--info">{text.footer.info}</p>
    </footer>
  )
};

export default Footer;
