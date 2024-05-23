import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import { AiOutlineMail } from "react-icons/ai";
import FooterLinks from '../FooterLinks/FooterLinks';
import './footer.css';

const Emails = styled.section`
  position: relative;
  display: flex;
  gap: 5px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    & .divider {
      display: none;
    }
  }
`

const EmailBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
`

const CopyMessage = styled.span`
  position: absolute;
  top: -32px;
  left: 110px;
  background-color: #fff;
  font-size: 13px;
  padding: 2px 5px;
  border-radius: 5px;

  @media all and (max-width: 1024px) {
    top: -30px;
    left: 25px;
  }
`

function Footer() {
  const [showCopyMsg, setShowCopyMsg] = useState(false);

  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];

  const copyEmail = ({ target }) => {
    navigator.clipboard.writeText(target.innerText);

    setShowCopyMsg(true);

    setTimeout(() => setShowCopyMsg(false), 1800);
  };

  return (
    <footer className="footer--container">
      <section className="footer--email-wrapper">
        <div className="footer--icon-wrapper">
          <i className="footer--icon footer--email-icon"><AiOutlineMail /></i>
        </div>

        <Emails>
          <EmailBtn onClick={copyEmail}>
            julia@utopika.com.br
          </EmailBtn>

          <span className="divider">|</span>

          <EmailBtn onClick={copyEmail}>
            rachel@utopika.com.br
          </EmailBtn>

          {showCopyMsg &&
            <CopyMessage>E-mail copiado!</CopyMessage>
          }
        </Emails>

      </section>
      <FooterLinks />
      <p className="footer--info">{text.footer.info}</p>
    </footer>
  )
};

export default Footer;
