import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro';
import { ImageWrapper } from '../../../style/reusable-components';
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';

const VideoWrapper = styled.section`
  width: 100%;
`


function TrabalhoJustoParaMulheres({ projectData }) {
  const { title, introduction, credits, tags } = projectData;

  return (
    <section className="trabalho-justo--container">
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/trabalho-justo-para-mulheres/trabalho-banner.jpg"
        />
      </ImageWrapper>

      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/1183030160?h=58df7c4d5f"
          autoPlay='1'
          loop='1'
          muted='1'
          aspectRatio='1/1.075'
        />
      </VideoWrapper>

      <ImageWrapper>
        <img alt="" src="/images/projects/trabalho-justo-para-mulheres/trabalho-frame-1.webp" />
      </ImageWrapper>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/1110106311?h=cc227b404e"
          autoPlay='1'
          loop='1'
          muted='1'
          aspectRatio='801/451'
        />
      </VideoWrapper>

      <ImageWrapper>
        <img alt="" src="/images/projects/trabalho-justo-para-mulheres/trabalho-frame-2.webp" />
      </ImageWrapper>
      <ImageWrapper>
        <img alt="" src="/images/projects/trabalho-justo-para-mulheres/trabalho-frame-3.webp" />
      </ImageWrapper>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/1110106449?h=375f80ed70"
          autoPlay='1'
          loop='1'
          muted='1'
          aspectRatio='801/451'
        />
      </VideoWrapper>



      <Credits credits={credits} />
    </section>
  );
}

export default TrabalhoJustoParaMulheres;

