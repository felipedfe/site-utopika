import React from 'react';
import ProjectOverviewCard from '../../components/ProjectOverview/ProjectOverviewCard';
import { euroclimaOverview } from '../../data/projectOverviews/euroclima';

function Euroclima() {
  return <ProjectOverviewCard {...euroclimaOverview} />;
}

export default Euroclima;
