import React from 'react';
import styled from 'styled-components';

const ProjectInfoContainer = styled.section`
  padding: 3rem 0 1.5rem 0;

  @media all and (max-width:1024px) {
    padding: 2.5rem 0;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.2;
`

const Divider = styled.hr`
  border-top: 5px solid #000;
  margin: 10px 0;
`

const Tag = styled.span`
`

const TextWrapper = styled.div`
  margin-left: 50%;
  padding-top: 1rem;

  @media all and (max-width:1024px) {
    margin-left: 0;
  }

  @media all and (max-width:768px) {
    padding-top: 2rem;
  }
`

function ProjectIntro({ tags, introduction, title, projectId }) {
  return (
    <ProjectInfoContainer>
      <Title>{title}</Title>
      <Divider />
      {tags.map((tag, index) => <Tag key={index}>{`#${tag} `}</Tag>)}
      <TextWrapper>
        {/* <p>{introduction}</p> */}
        <p dangerouslySetInnerHTML={{ __html: `${introduction}` }}></p>
      </TextWrapper>
    </ProjectInfoContainer>
  )
};

export default ProjectIntro;
