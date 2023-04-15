import styled from 'styled-components';

const VideoSection = styled.section`
  width: 100%;
`

const VideoWrapper = styled.div`
  position: relative;
  padding: 56.25% 0 0 0;
  width: 100%;
  aspect-ratio: ${(props) => props.aspectRatio}
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`

export {
  VideoSection,
  VideoWrapper,
  Video,
}