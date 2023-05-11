import React from 'react';
import styled from 'styled-components';

const CreditsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 50%;
  padding: 4rem 0 4rem 0;

  @media all and (max-width: 1024px){
    margin-left: 0;
  }
`

const Divider = styled.hr`
  border-top: 5px solid #000;
`

const Title = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  padding-top: 0.7rem;
  padding-bottom: 0.6rem;
`

function Credits({ credits }) {
  console.log(credits);
  const { title, info } = credits;
  return (
    <CreditsContainer>
      <Divider />
      <Title>{title.toUpperCase()}</Title>
      {info.map(({ role, name }, index) => <p key={index}>{role} | {name}</p>)}
    </CreditsContainer>
  )
};

export default Credits;
