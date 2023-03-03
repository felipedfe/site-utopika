import React from 'react';
import { useState } from 'react';
import myContext from '../context/myContext';

function MyProvider(props) {
  const [textLanguage, setTextLanguage] = useState('pt');

  const providerState = {
    textLanguage,
    setTextLanguage,
  };

  return (
    <myContext.Provider value={providerState}>
      {props.children}
    </myContext.Provider>
  )
};

export default MyProvider;