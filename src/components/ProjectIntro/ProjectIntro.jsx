import React from 'react';
import styled from 'styled-components';

const ProjectInfoContainer = styled.section`
  
`

const Title = styled.h1`
  font-size: 2rem;
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
`

const Text = styled.p`
`

function ProjectIntro({ tags, introduction, title, projectId }) {
  return (
    <ProjectInfoContainer>
      <div className={`project--${projectId}`} />
      <Title>{title}</Title>
      <Divider />
      {tags.map((tag) => <Tag>{`#${tag} `}</Tag>)}
      <TextWrapper>
        <p>{introduction}</p>
      </TextWrapper>
    </ProjectInfoContainer>
  )
};

export default ProjectIntro;
