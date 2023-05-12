import React, { useEffect } from 'react';
import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import './images-carousel.css';

const Image = styled.img`
  width: 100%;
`

const CarouselWrapper = styled.div`
  margin-bottom: -0.5rem;
`

function ImagesCarousel() {

  const [images, setImages] = useState([]);

  const handleDragStart = (e) => e.preventDefault();

  useEffect(() => {
    const importAllImages = (require) => {
      const imagesList = [];
      require.keys().map((key) => imagesList.push(require(key)))
      return imagesList;
    };

    const importedImages = importAllImages(require.context('../../assets/carousel-imgs-high', false, /\.jpg$/i))

    const images = importedImages.map((item) => <div className="carosel-img-wrapper">
      <Image
        alt=''
        src={item}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>);

    setImages(images);
  }, []);

  return (
    <CarouselWrapper className="image-carousel-wrapper">
      <AliceCarousel
        // disableButtonsControls={true}
        infinite
        autoPlay
        autoPlayInterval={2000}
        mouseTracking
        items={images}
        disableDotsControls
      />
    </CarouselWrapper>
  )
};

export default ImagesCarousel;
