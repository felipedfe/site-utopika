import styled from 'styled-components';

const AboutContainer = styled.main`
  padding: 5% 0;
  margin-left: 17%;
  margin-right: 8%;

  @media all and (max-width: 1024px) {
    margin-left: 3%;
    margin-right: 3%;
  }
`

const Hr = styled.hr`
  border: 0;
  border-top: 4px solid #000;
  margin: 1.5rem 0 2.5rem 0;
`

const ProfileSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0 1.5rem;
  margin-bottom: 2rem;

  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`


export {
  Hr,
  ProfileSection,
  AboutContainer,
};