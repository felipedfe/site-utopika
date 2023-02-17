import React, { useState } from 'react';
import './tag-button.css';

function TagButton(props) {
  const { handleClick, tag } = props;

  const [buttonOn, setButtonOn] = useState(true);

  return <button
    className={`projects--tag-btn ${buttonOn ? 'on' : 'off'}`}
    onClick={(e) => {
      handleClick(e, buttonOn)
      setButtonOn((prev) => !prev)
    }}
    type="button"
    value={tag}
  >
    {tag}
  </button>
};

export default TagButton;
