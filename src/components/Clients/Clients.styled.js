import styled from 'styled-components';

export const ClientsWrapper = styled.section`
padding: 1.5rem;

@media all and (min-width: 1024px) {
  padding-top: 2rem;
}
`

export const Title = styled.h1`
  padding: 1rem 0 1rem 3rem;
  color: #fff;
  font-size: 1.5rem;
`

export const CarouselWrapper = styled.div`
  background-color: var(--blue);
  padding: 0.5rem;
  border-radius: 10px;
  `

export const LogoWrapper = styled.div`
  display: flex;
`

export const Image = styled.img`
  width: 100%;
  padding: 0.3rem;
`