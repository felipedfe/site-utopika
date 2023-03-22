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
}) {
  return (
    <VideoSection>
      <VideoWrapper>
        <Video
          title="video-container"
          src={`${url}?h=c1d00cc6da&autoplay=${autoPlay}&title=${title}&byline=${byLine}&portrait=${portrait}&controls=${controls}&loop=${loop}&muted=${muted}`}
          frameBorder="0"
          allow="autoplay"
        />
      </VideoWrapper>
    </VideoSection>
  )
};

export default VideoContainer;
