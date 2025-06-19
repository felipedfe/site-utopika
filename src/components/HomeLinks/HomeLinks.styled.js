import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 8px;
  color: #fff;

  @media all and (max-width: 450px) {
    flex-direction: column;
    margin-top: 2rem;
    gap: 2.5rem;
  }
`;

export const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  width: 120px;
  padding: 2px 0 3px 0;
  border-radius: 50px;
  text-transform: uppercase;
  
  & p {
    /* line-height: 2!important;  */
  }
`;
