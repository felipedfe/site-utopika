import React, { useState } from 'react';
import styled from 'styled-components';
import './contacts.css';

const EmailBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  display: block;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const PhoneBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const CopyMessage = styled.span`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  font-size: 13px;
  padding: 2px 5px;
  border-radius: 5px;
  color: #000;
  border: solid 2px #000;
  white-space: nowrap;
`

function Contacts() {
  const [showCopyMsg, setShowCopyMsg] = useState(false);
  const [copyMsgText, setCopyMsgText] = useState('');

  const copyEmail = ({ target }) => {
    navigator.clipboard.writeText(target.innerText);
    setCopyMsgText('E-mail copiado!');
    setShowCopyMsg(true);

    setTimeout(() => setShowCopyMsg(false), 1800);
  };

  const copyPhone = ({ target }) => {
    const cleanedPhone = target.innerText.replace(/\D/g, '');
    navigator.clipboard.writeText(cleanedPhone);
    setCopyMsgText('Número copiado!');
    setShowCopyMsg(true);

    setTimeout(() => setShowCopyMsg(false), 1800);
  };

  return (
    <section className="contacts--container">
      <section className="contacts--title">
        <h1>contatos</h1>
        <hr></hr>
      </section>

      <section className="contacts--person-info">
        <p>Julia Lima</p>
        <EmailBtn onClick={copyEmail}>
          julia@utopika.com.br
        </EmailBtn>
        <PhoneBtn onClick={copyPhone}>
          21. 980837200
        </PhoneBtn>
      </section>

      <section className="contacts--person-info">
        <p>Rachel Gepp</p>
        <EmailBtn onClick={copyEmail}>
          rachel@utopika.com.br
        </EmailBtn>
        <PhoneBtn onClick={copyPhone}>
          11. 945752121
        </PhoneBtn>
      </section>

      {showCopyMsg &&
        <CopyMessage>{copyMsgText}</CopyMessage>
      }
    </section>
  )
};

export default Contacts;
