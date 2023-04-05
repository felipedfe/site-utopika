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
`

const CarouselWrapper = styled.div`
  background-color: var(--blue);
  /* width: 80%; */
  /* margin: auto; */
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
  padding: 1rem;
  /* width: 200px; */
  /* height: 100%; */
`


function Clients() {
  const [logos, setLogos] = useState([]);

  const { textLanguage } = useContext(myContext);
  const text = textOptions[textLanguage];
  const { clients: { title } } = text;

  useEffect(() => {
    const importAllLogos = (require) => {
      const imagesList = [];
      require.keys().map((key) => imagesList.push(require(key)))
      return imagesList;
    };

    const allLogos = importAllLogos(require.context('../../assets/logos', false, /\.png$/i))
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
      <h1>{title}</h1>
      <CarouselWrapper>
        <AliceCarousel
          mouseTracking
          items={logos}
          disableDotsControls
          responsive={{
            0: {
              items: 2,
            },
            400: {
              items: 6,
              itemsFit: 'contain',
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
