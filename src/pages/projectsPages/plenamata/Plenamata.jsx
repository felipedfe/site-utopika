import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro'
import Credits from '../../../components/Credits/Credits';
import myContext from '../../../context/myContext';
import { textLanguages as textOptions } from '../../../data/languages';
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';
import './plenamata.css';

const IntroGifs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;

  @media all and (max-width: 1024px){
    grid-template-columns: 1fr 1fr;
  }

  @media all and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  
  img {
    width: 100%;
  }

  @media all and (max-width: ${(props) => props.media}){
    display: ${(props) => props.display};
  }
`

const ImagesContainer1 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 60% 40%;
  background-color: #f0f0f0;
  margin-bottom: 1rem;

`

const ImagesContainer2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 35% 65%;
  background-color: #f0f0f0;
  margin-bottom: 1rem;
`

const Grid = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: #FFEF8C;

  @media all and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  }
`

const GridImageWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${({ bg }) => bg};

  img {
    width: 100%;
  }
`

function Plenamata({ projectData }) {
  // const { textLanguage } = useContext(myContext);

  // const { pathname } = useLocation();

  // const projectId = pathname.split('/').pop();

  // const { projectsPage } = textOptions[textLanguage];

  const {
    title,
    introduction,
    credits,
    tags } = projectData;
  return (
    <section className="plenamata--container">
      <IntroGifs>
        <ImageWrapper media="1024px" display="none">
          <img
            src="/images/projects/plenamata/01-corte-seletivo.gif"
            alt="caminhão extraindo de madeira"
          />
        </ImageWrapper>
        <ImageWrapper media="768px" display="none">
          <img
            src="/images/projects/plenamata/02-incendio-florestal.gif"
            alt="floresta queimando"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            src="/images/projects/plenamata/03-regeneracao.gif"
            alt="floresta regenerando"
          />
        </ImageWrapper>
      </IntroGifs>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />
      <section className="plenamata--solo-img">
        <div className="plenamata--solo-img-wrapper">
          <img
            src="/images/projects/plenamata/apresentacao.png"
            alt="infográfico sobre desmatamento"
          />
        </div>
      </section>
      <section className="plenamata--content-container-1">
        <div className="plenamata--img-wrapper-1">
          <img
            src="/images/projects/plenamata/computador.png"
            alt="mock de um computador acessando o site"
          />
        </div>
        <div className="plenamata--video-wrapper-1">
          <VideoContainer
            url="https://player.vimeo.com/video/817602622?h=dd29bb272a"
            autoPlay='1'
            loop='1'
            muted='1'
            aspectRatio="9/16"
          />
        </div>
      </section>
      <section className="plenamata--content-container-2">
        <div className="plenamata--video-wrapper-2">
          <VideoContainer
            url="https://player.vimeo.com/video/817602769?h=0beb7ae52f"
            autoPlay='1'
            loop='1'
            muted='1'
            aspectRatio="9/16"
          />
        </div>
        <div className="plenamata--img-wrapper-2">
          <img
            src="/images/projects/plenamata/laptop.png"
            alt="ilustração"
          />
        </div>
      </section>
      {/* <ImagesContainer2>
        <ImageWrapper>
          <img
            src="/images/projects/plenamata/alerta.png"
            alt="mock de um computador acessando o site"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            src="/images/projects/plenamata/laptop.png"
            alt="ilustração"
          />
        </ImageWrapper>
      </ImagesContainer2> */}
      <Grid>
        <GridImageWrapper >
          <img src="/images/projects/plenamata/grid-img-1.png"
            alt="ilustração alerta de desmatamento"
          />
        </GridImageWrapper>
        <GridImageWrapper>
          <img src="/images/projects/plenamata/grid-img-2.png"
            alt="ilustração área desmatada"
          />
        </GridImageWrapper>
        <GridImageWrapper>
          <img src="/images/projects/plenamata/grid-img-3.png"
            alt="ilustração corte seletivo"
          />
        </GridImageWrapper>
        <GridImageWrapper>
          <img src="/images/projects/plenamata/grid-img-4.png"
            alt="ilustração cicatriz de incêndio florestal"
          />
        </GridImageWrapper>
        <GridImageWrapper>
          <img src="/images/projects/plenamata/grid-img-5.png"
            alt="ilustração grilagem"
          />
        </GridImageWrapper>
        <GridImageWrapper>
          <img src="/images/projects/plenamata/grid-img-6.png"
            alt="ilustração reserva legal"
          />
        </GridImageWrapper>
      </Grid>
      <Credits credits={credits} />
    </section>
  )
};

export default Plenamata;
