import React, { useContext } from 'react';
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
        <h2>{intro.title}</h2>
        <p>{intro.paragraph1}</p>
        <p>{intro.paragraph2}</p>
        <p>{intro.paragraph3}</p>
        <p>{intro.paragraph4}</p>
        <p>{intro.paragraph5}</p>
      </TextWrapper>
      <Contacts />
    </TextAndContactSection>
  )
};

export default TextAndContact;
