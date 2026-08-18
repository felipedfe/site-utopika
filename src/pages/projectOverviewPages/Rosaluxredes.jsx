import React from 'react';
import ProjectOverviewCard from '../../components/ProjectOverview/ProjectOverviewCard';
import { rosaluxredesOverview } from '../../data/projectOverviews/rosaluxredes';

function Rosaluxredes() {
  return <ProjectOverviewCard {...rosaluxredesOverview} />;
}

export default Rosaluxredes;
