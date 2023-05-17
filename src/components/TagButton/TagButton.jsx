import React, { useState, useEffect, useContext } from 'react';
import myContext from '../../context/myContext';
import './tag-button.css';

function TagButton(props) {
  const { handleClick, innerTextTag, valueTag } = props;
  const { largeScreenBreakPt } = useContext(myContext);

  const [buttonOn, setButtonOn] = useState(false);

  // quando redimensionamos a tela e cruzamos 1023 pixels (largeScreenBreakPt - 1) os botões
  // são desativados
  window.addEventListener('resize', () => {
    if (window.innerWidth === largeScreenBreakPt - 1) {
      setButtonOn(false);
    }
  });

  useEffect(() => {
    return () => {
      setButtonOn(false);
    }
  }, [])

  return <button
    className={`projects--tag-btn ${buttonOn ? 'on' : 'off'}`}
    onClick={(e) => {
      handleClick(e, buttonOn)
      setButtonOn((prev) => !prev)
    }}
    type="button"
    value={valueTag}
  >
    {`#${innerTextTag}`}
  </button>
};

export default TagButton;
