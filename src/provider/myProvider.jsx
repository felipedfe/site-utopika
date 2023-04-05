import React from 'react';
import { useState } from 'react';
import myContext from '../context/myContext';

function MyProvider(props) {
  const largeScreenBreakPt = 1024;
  const [textLanguage, setTextLanguage] = useState('pt');
  const [tagsList, setTagsList] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isNavMenuDisabled, setIsNavMenuDisabled] = useState(true);
  const [isSearchMenuDisabled, setIsSearchMenuDisabled] = useState(true);

  const providerState = {
    textLanguage,
    setTextLanguage,
    tagsList,
    setTagsList,
    isLargeScreen,
    setIsLargeScreen,
    isNavMenuDisabled,
    setIsNavMenuDisabled,
    isSearchMenuDisabled,
    setIsSearchMenuDisabled,
    largeScreenBreakPt
  };

  return (
    <myContext.Provider value={providerState}>
      {props.children}
    </myContext.Provider>
  )
};

export default MyProvider;
