import React, { useState, useEffect, useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './clients.css';
import {
  ClientsWrapper,
  Title,
  CarouselWrapper,
  LogoWrapper,
  Image,
} from './Clients.styled';

const handleDragStart = (e) => e.preventDefault();

function Clients() {
  const [logos, setLogos] = useState([]);

  const { textLanguage } = useContext(myContext);
  const text = textOptions[textLanguage];
  const { aboutPage: { clients } } = text;

  useEffect(() => {
    const importAllLogos = (require) => {
      const imagesList = [];
      require.keys().map((key) => imagesList.push(require(key)))
      return imagesList;
    };

    const allLogos = importAllLogos(require.context('../../assets/logos-d2', false, /\.png$/i))

    const logoImages = allLogos.map((item) => <LogoWrapper>
      <Image
        alt=''
        src={item}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </LogoWrapper>);

    setLogos(logoImages);
  }, []);


  return (
    <ClientsWrapper className="clients--wrapper">
      <CarouselWrapper>
        <Title>
          {clients.title}
        </Title>
        <AliceCarousel
          // disableButtonsControls={true}
          infinite
          autoPlay
          autoPlayInterval={2000}
          mouseTracking
          items={logos}
          disableDotsControls
          responsive={{
            0: {
              items: 2,
            },
            768: {
              items: 4,
            },
            1024: {
              items: 5,
              // itemsFit: 'contain',
            }
          }}
        />
      </CarouselWrapper>
    </ClientsWrapper>
  )
};

export default Clients;
