import React, { useState, useEffect, useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import { Carousel } from 'react-responsive-carousel';
// import Slider from "react-styled-carousel";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './clients.css';
import styled from 'styled-components';

const handleDragStart = (e) => e.preventDefault();

const ClientsWrapper = styled.section`
/* background-color: var(--blue); */
padding: 1.5rem;
@media all and (min-width: 1024px) {
  padding-top: 2rem;
}
`

const Title = styled.h1`
  padding: 1rem 0 1rem 3rem;
  color: #fff;
  font-size: 1.5rem;
`

const CarouselWrapper = styled.div`
  background-color: var(--blue);
  /* width: 80%; */
  /* margin: auto; */
  padding: 0.5rem;
  border-radius: 10px;
  /* height: 200px; */
  `

const ClientsGrid = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 2rem;
  background-color: var(--blue); */
  background-color: #006125;
  width: 100%;
  height:1000px;

`

const LogoWrapper = styled.div`
  /* width: 200px; */
  /* background-color: var(--red); */
  display: flex;
  
`

const Image = styled.img`
  /* width: 100px; */
  width: 100%;
  padding: 0.3rem;
  /* width: 200px; */
  /* height: 100%; */
`


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
    // console.log(allLogos);
    const logoImages = allLogos.map((item) => <LogoWrapper>
      <Image
        alt=''
        src={item}
        onDragStart={handleDragStart}
        role="presentation"
      // autoHeight
      // autoWidth
      />
    </LogoWrapper>);

    setLogos(logoImages);
  }, []);


  return (
    <ClientsWrapper>
      <CarouselWrapper>
        {/* <h1>{title}</h1> */}
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

        {/* {logos.map((item) => <LogoWrapper><img src={item} /></LogoWrapper>)} */}

        {/* <ClientsGrid>
        {logos.map((logo, i) => {
          console.log(i)
          return <LogoWrapper>
            <Image src={logo} alt="logo" />
          </LogoWrapper>
        })}
        <img src="images/clients/12-frente-desencarceramento.png"></img>
      </ClientsGrid> */}
      </CarouselWrapper>
    </ClientsWrapper>
  )
};

export default Clients;
