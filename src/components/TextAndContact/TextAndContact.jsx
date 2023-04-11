import React, { useContext } from 'react';
import styled from 'styled-components';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import Contacts from '../Contacts/Contacts';
import { TextWrapper, TextAndContactSection } from './TextAndContact.styled';

function TextAndContact() {
  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];
  const { aboutPage: { intro } } = text;

  return (
    <TextAndContactSection>
      <TextWrapper>
        {/* {intro} */}
        <p>{intro.paragraph1}</p>
        <p>{intro.paragraph2}</p>
        <p>{intro.paragraph3}</p>
      </TextWrapper>
      <Contacts />
    </TextAndContactSection>
  )
};

export default TextAndContact;
