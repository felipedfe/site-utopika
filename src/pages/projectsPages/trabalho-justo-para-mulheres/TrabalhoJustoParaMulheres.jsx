import Credits from '../../../components/Credits/Credits';
import ProjectIntro from '../../../components/ProjectIntro/ProjectIntro';
import { ImageWrapper } from '../../../style/reusable-components';

function TrabalhoJustoParaMulheres({ projectData }) {
  const { title, introduction, credits, tags } = projectData;

  return (
    <section className="trabalho-justo--container">
      <ImageWrapper>
        <img
          alt=""
          src="/images/projects/trabalho-justo-para-mulheres/thumb.gif"
        />
      </ImageWrapper>

      <ProjectIntro
        title={title}
        tags={tags}
        introduction={introduction}
      />

      <Credits credits={credits} />
    </section>
  );
}

export default TrabalhoJustoParaMulheres;

