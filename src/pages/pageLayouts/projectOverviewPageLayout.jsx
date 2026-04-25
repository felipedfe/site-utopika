import React from 'react';
import styled from 'styled-components';

const Shell = styled.div`
  margin: 0 4% 0 4%;
  max-width: 1200px;

  @media all and (max-width: 1024px) {
    margin-left: 3%;
    margin-right: 3%;
  }

  @media all and (min-width: 1300px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media all and (min-width: 1024px) and (max-width: 1500px) {
    /* background-color: red; */
    margin-left: 15%;
    margin-right: 5%;
  }
`;

function ProjectOverviewPageLayout({ children }) {
  return <Shell>{children}</Shell>;
}

export default ProjectOverviewPageLayout;
