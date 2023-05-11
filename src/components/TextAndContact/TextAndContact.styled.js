import styled from 'styled-components';

const TextAndContactSection = styled.section`
display: flex;
white-space: pre-line;
margin-bottom: 4rem;

@media all and (max-width: 768px) {
    flex-direction: column;
  }
`

const TextWrapper = styled.div`
padding: 0 3rem 0 0;
font-size: 1.1rem;
&>* {
  padding-bottom: 1rem;
}

@media all and (max-width: 768px) {
    padding: 0;
  }
`

export { TextWrapper, TextAndContactSection };
