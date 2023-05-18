import React from "react";
import styled from "styled-components";

const Icon = styled.div`
`;

const IconPt1 = styled.div`
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: #000;
  border-radius: 2px; 
  transform: rotate(45deg);
`

const IconPt2 = styled.div`
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: #000;
  border-radius: 2px; 
  transform: rotate(-45deg);
`

function CloseIcon() {

  return (
    <Icon>
      <IconPt1 />
      <IconPt2 />
    </Icon>
  )
}

export default CloseIcon;
