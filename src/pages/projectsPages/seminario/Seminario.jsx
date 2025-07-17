import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro';
import VideoContainer from '../../../components/VideoContainer/VideoContainer';
import { VideoWrapper, Row, ImageWrapper } from '../../../style/reusable-components';
import { MOBILE_BREAKPOINT } from '../../../style/breakpoints';

function Seminario({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="seminario--container">
      <ImageWrapper>
        <picture>
          <source
            media={`(max-width: ${MOBILE_BREAKPOINT})`}
            srcSet="/images/projects/seminario/seminario-frame-1-low.webp"
          />
          <img
            alt=""
            src="/images/projects/seminario/seminario-frame-1.png"
          />
        </picture>
      </ImageWrapper>

      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/seminario/seminario-frame-2.png"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/seminario/seminario-frame-3.png"
        />
      </ImageWrapper>

      <ImageWrapper>
        <picture>
          <source
            media={`(max-width: ${MOBILE_BREAKPOINT})`}
            srcSet="/images/projects/seminario/seminario-frame-4-low.webp"
          />
          <img
            alt=""
            src="/images/projects/seminario/seminario-frame-4.png"
          />
        </picture>
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/seminario/seminario-frame-5.webp"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/seminario/seminario-frame-11.webp"
        />
      </ImageWrapper>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/1101264117"
          autoPlay='1'
          loop='1'
          muted='1'
          aspectRatio='3/2'
        />
      </VideoWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/seminario/seminario-frame-6.webp"
        />
      </ImageWrapper>

      <Row>
        {/* <ImageWrapper>
          <img
            alt=""
            src="/images/projects/seminario/seminario-frame-7.webp"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/seminario/seminario-frame-6.png"
          />
        </ImageWrapper> */}
      </Row>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/seminario/seminario-frame-7.webp"
        />
      </ImageWrapper>

      <VideoWrapper>
        <VideoContainer
          url="https://player.vimeo.com/video/1101265191"
          autoPlay='1'
          loop='1'
          muted='1'
          aspectRatio='3/2'
        />
      </VideoWrapper>

      <Credits credits={credits} />
    </section>
  )
};

export default Seminario;
