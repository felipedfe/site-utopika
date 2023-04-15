import React from 'react';
import {
  VideoSection,
  VideoWrapper,
  Video,
} from './VideoContainer.styled';

function VideoContainer({
  url,
  autoPlay = "0",
  title = "0",
  byLine = "0",
  portrait = "0",
  controls = "0",
  loop = "0",
  muted = "0",
  autopause = "0",
  aspectRatio = "16/9",
}) {
  return (
    // <VideoSection>
    <VideoWrapper
      aspectRatio={aspectRatio}
    >
      <Video
        title="video-container"
        src={`${url}?h=c1d00cc6da&autoplay=${autoPlay}&title=${title}&byline=${byLine}&portrait=${portrait}&controls=${controls}&loop=${loop}&muted=${muted}&autopause=${autopause}`}
        frameBorder="0"
        allow="autoplay"
        loading="lazy"
      />
    </VideoWrapper>
    // </VideoSection>
  )
};

export default VideoContainer;
