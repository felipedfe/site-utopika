import React from 'react';
import { useState, useEffect } from 'react';
import myContext from '../context/myContext';
import { useLocation } from 'react-router-dom';

function MyProvider(props) {
  const location = useLocation();

  const largeScreenBreakPt = 1024;
  
  const [textLanguage, setTextLanguage] = useState('pt');
  const [tagsList, setTagsList] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isNavMenuDisabled, setIsNavMenuDisabled] = useState(true);
  const [isSearchMenuDisabled, setIsSearchMenuDisabled] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const langParam = searchParams.get('lang');

    if (langParam && (langParam === 'pt' || langParam === 'en')) {
      setTextLanguage(langParam);
    }
  }, [location.search]);

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
