import React, { useState } from 'react';
import './tag-button.css';

function TagButton(props) {
  const { handleClick, innerTextTag, valueTag } = props;

  const [buttonOn, setButtonOn] = useState(false);

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
