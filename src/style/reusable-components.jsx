import styled from "styled-components";

export const VideoWrapper = styled.section`
  width: 100%;
`

export const ImageWrapper = styled.div`
  height: 100%;
  
  img {
    width: 100%;
    display: block;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;

  @media all and (max-width: 700px) {
    display: block;
  }
`