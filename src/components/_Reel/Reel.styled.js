import styled, { css } from 'styled-components';

const positioning = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

const ReelSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const TransparecyLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 110%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`

const LogoWrapper = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin: -200px 0 0 -200px;
  &>* {
  color: white;
}
`
const Logo = styled.img`
  width: 300px;
`

const VideoBackground = styled.div`
  background: #FFF;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
`

const VideoForeground = styled.div`
  ${positioning}
  @media (min-aspect-ratio: 15/9) {
    height: 300%;
    top: -100%;
}
  @media (max-aspect-ratio: 15/9) {
    width: 300%;
    left: -100%;
}
`

const Video = styled.iframe`
  ${positioning}
`

export {
  ReelSection,
  TransparecyLayer,
  LogoWrapper,
  Logo,
  VideoBackground,
  VideoForeground,
  Video,
}
