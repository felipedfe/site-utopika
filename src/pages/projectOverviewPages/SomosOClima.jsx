import React from 'react';
import ProjectOverviewCard from '../../components/ProjectOverview/ProjectOverviewCard';
import { somosOClimaOverview } from '../../data/projectOverviews/somosOClima';

function SomosOClima() {
  return <ProjectOverviewCard {...somosOClimaOverview} />;
}

export default SomosOClima;
