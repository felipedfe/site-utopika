import React from 'react';
import ProjectOverviewCard from '../../components/ProjectOverview/ProjectOverviewCard';
import { adaptacaoclimaticaOverview } from '../../data/projectOverviews/adaptacaoclimatica';

function AdaptacaoClimatica() {
  return <ProjectOverviewCard {...adaptacaoclimaticaOverview} />;
}

export default AdaptacaoClimatica;
