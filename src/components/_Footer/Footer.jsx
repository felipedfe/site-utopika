import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import {
  AiOutlineMail as EmailIcon,
  AiOutlineInstagram as InstagramIcon
} from "react-icons/ai";
import {
  FaVimeoV as VimeoIcon,
  FaBehance as BehanceIcon
}
  from "react-icons/fa";
import FooterLinks from '../FooterLinks/FooterLinks';

const footerIcon = css`
  position: absolute;
  top: 0;
  left: 18%;
  color: var(--red);
  font-size: 1.5rem;
`

const FooterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 2.5rem 0;
  background-color: var(--red);

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2.7rem;
  }
`

const EmailSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 10px;
  background-color: rgb(0, 0, 0);
  margin-right: 0.8rem;
`

const Icon = styled.i`
  ${footerIcon}
`

const LinkIcon = styled.i`
  ${footerIcon}
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`

const EmailWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

function Footer() {
  const { textLanguage } = useContext(myContext);
  const text = textOptions[textLanguage];

  return (
    <FooterContainer>
      <EmailSection>
        <IconWrapper>
          <Icon>
            <EmailIcon />
          </Icon>
        </IconWrapper>
        <EmailWrapper>
          <span>julia@utopika.com.br |&nbsp;</span>
          <span>rachel@utopika.com</span>
        </EmailWrapper>
      </EmailSection>
      <IconWrapper>
        <a href="https://vimeo.com/utopika" rel="noreferrer" target="_blank">
          <LinkIcon>
            <InstagramIcon />
          </LinkIcon>
        </a>
      </IconWrapper>
    </FooterContainer>
  )
};

export default Footer;
