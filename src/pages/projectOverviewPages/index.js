import { lazy } from 'react';

const SomosOClima = lazy(() => import('./SomosOClima'));
const Euroclima = lazy(() => import('./Euroclima'));
const Festsauva = lazy(() => import('./Festsauva'));
const Rosaluxredes = lazy(() => import('./Rosaluxredes'));
const AdaptacaoClimatica = lazy(() => import('./AdaptacaoClimatica'));

export { SomosOClima, Euroclima, Festsauva, Rosaluxredes, AdaptacaoClimatica };
