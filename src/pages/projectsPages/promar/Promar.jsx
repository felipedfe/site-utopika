import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro';
import { Row, ImageWrapper } from '../../../style/reusable-components';

function Promar({ projectData }) {
  const {
    title,
    introduction,
    credits,
    tags } = projectData;

  return (
    <section className="promar--container">
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/promar/promar-frame-1.webp"
        />
      </ImageWrapper>
      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/promar/promar-frame-2.png"
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/promar/promar-frame-3.webp"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/promar/promar-frame-4.jpg"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/promar/promar-frame-5.png"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/promar/promar-frame-6_1.webp"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/promar/promar-frame-7.webp"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/promar/promar-frame-8.webp"
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/promar/promar-frame-9_1.webp"
        />
      </ImageWrapper>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/promar/promar-frame-10.webp"
        />
      </ImageWrapper>

      <Row>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/promar/promar-frame-11.png"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            alt=""
            src="/images/projects/promar/promar-frame-12.webp"
          />
        </ImageWrapper>
      </Row>

      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/promar/promar-frame-13.webp"
        />
      </ImageWrapper>
      <Credits credits={credits} />
    </section>
  )
};

export default Promar;
