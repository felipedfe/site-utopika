import React, { useContext } from 'react';
import styled from 'styled-components';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import Contacts from '../Contacts/Contacts';
import { Text, TextAndContactSection } from './TextAndContact.styled';

function TextAndContact() {
  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];
  const { aboutPage: { intro } } = text;

  return (
    <TextAndContactSection>
      <Text>
        {intro}
      </Text>
      <Contacts />
    </TextAndContactSection>
  )
};

export default TextAndContact;
