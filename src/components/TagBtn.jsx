import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const on = css`
  padding: 0.5rem 0.8rem;
  border: 2px solid black;
  border-radius: 1rem;
`

const off = css`
  padding: 0.5rem 0.8rem;
  border: 2px solid var(--red);
  border-radius: 1rem;
`

const Button = styled.button`
  /* padding: 0.5rem 0.8rem;
  border: 2px solid black;
  border-radius: 1rem; */
`

function TagBtn(props) {
  const { handleClick, innerTextTag, valueTag } = props;

  const [buttonOn, setButtonOn] = useState(false);

  return <Button
    onClick={(e) => {
      handleClick(e, buttonOn)
      setButtonOn((prev) => !prev)
    }}
    type="button"
    value={valueTag}
    buttonOn={buttonOn}
  >
    {`#${innerTextTag}`}
  </Button>
};

export default TagBtn;
