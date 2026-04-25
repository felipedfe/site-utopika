import React from 'react';
import ProjectOverviewCard from '../../components/ProjectOverview/ProjectOverviewCard';
import { festsauvaOverview } from '../../data/projectOverviews/festsauva';

function Festsauva() {
  return <ProjectOverviewCard {...festsauvaOverview} />;
}

export default Festsauva;
