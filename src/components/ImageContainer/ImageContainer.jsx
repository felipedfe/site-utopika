import React from 'react';
import styled from 'styled-components';

const ImageSection = styled.section``

const Image = styled.img``

function ImageContainer({ src }) {
  return (
    <ImageSection>
      <Image
        src={src}
      />
    </ImageSection>
  )
};

export default ImageContainer;
