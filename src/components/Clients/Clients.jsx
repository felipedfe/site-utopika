import React, { useState, useEffect, useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';

import styled from 'styled-components';


const ClientsWrapper = styled.div`
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
  width: 200px;
`

const Image = styled.img`
  /* width: 100%; */
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
    console.log(allLogos);
    setLogos(allLogos);
  }, []);


  return (
    <ClientsWrapper>
      <h1>{title}</h1>
      {/* <ClientsGrid>
        {logos.map((logo, i) => {
          console.log(i)
          return <LogoWrapper>
            <Image src={logo} alt="logo" />
          </LogoWrapper>
        })}
        <img src="images/clients/12-frente-desencarceramento.png"></img>
      </ClientsGrid> */}
    </ClientsWrapper>
  )
};

export default Clients;
