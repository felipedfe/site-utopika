import styled from 'styled-components';

const AboutContainer = styled.main`
  /* padding: 5% 0; */
  /* padding-top: 60px; */
  margin-left: 17%;
  margin-right: 8%;
  max-width: 1200px;
  /* margin: auto; */

  @media all and (max-width: 1024px) {
    margin-left: 3%;
    margin-right: 3%;
  }

  @media all and (min-width: 1500px) {
    margin: auto;
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
  gap: 5rem;
  padding: 0 1.5rem;
  margin-bottom: 2rem;
  text-align: justify;

  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`


export {
  Hr,
  ProfileSection,
  AboutContainer,
};