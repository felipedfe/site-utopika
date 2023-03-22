import styled from 'styled-components';
// import { marginBottom } from '../../pages/About/About.styled';

const TextAndContactSection = styled.section`
display: flex;
white-space: pre-line;
/* line-height: 1.7; */
margin-bottom: 4rem;


@media all and (max-width: 768px) {
    flex-direction: column;
  }
`

const Text = styled.p`
padding: 0 3rem 0 0;
font-size: 1.1rem;

@media all and (max-width: 768px) {
    padding: 0;
  }
`

export { Text, TextAndContactSection };
