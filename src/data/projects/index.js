import { tags } from "./constants";

const allTags = {
  en:
    [
      'socialMedia',
      'infographic',
      'animation',
      'publication',
      'illustration',
      'visualIdentity',
      'web',
      'women',
      'work',
      'esg',
      'equality',
      // 'cities',
      'territory',
      'politics',
      'environment',
      'humanRights',
    ],
  pt:
    [
      'mídiasSociais',
      'infográfico',
      'animação',
      'publicação',
      'ilustração',
      'identidadeVisual',
      'web',
      'mulheres',
      'trabalho',
      'esg',
      'igualdade',
      // 'cidades',
      'território',
      'política',
      'meioAmbiente',
      'direitosHumanos',
    ]
}

const { en } = tags;
const { pt } = tags;

console.log("en", en)
console.log("pt", pt)

const projects = [
  {
    id: 'clima',
    title: 'Em Nome do Clima - Mapeamento Crítico',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['publication', 'illustration', 'infographic', 'territory', 'environment', 'humanRights'],
    tagsPt: ['publicação', 'ilustração', 'infográfico', 'território', 'meioAmbiente', 'direitosHumanos'],
  },
  {
    id: 'forest',
    title: 'Forest Ventures',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: [en.SOCIAL_MEDIA, en.VISUAL_IDENTITY, en.ILLUSTRATION, en.ENVIRONMENT],
    tagsPt: [pt.SOCIAL_MEDIA, pt.VISUAL_IDENTITY, pt.ILLUSTRATION, pt.ENVIRONMENT],
  },
  {
    id: 'alianza',
    title: 'Um Ano da Alianza',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['illustration', 'infographic', 'socialMedia', 'publication', 'territory', 'environment', 'humanRights', 'equality', 'web'],
    tagsPt: ['ilustração', 'infográfico', 'mídiasSociais', 'publicação', 'território', 'meioAmbiente', 'direitosHumanos', 'igualdade', 'web'],
  },
  {
    id: 'p4f',
    title: 'Partnerships for Forests',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: [en.PUBLICATION, en.ANIMATION, en.ENVIRONMENT, en.INFOGRAPHIC],
    tagsPt: [pt.PUBLICATION, pt.ANIMATION, pt.ENVIRONMENT, pt.INFOGRAPHIC],
  },
  {
    id: 'vozesin',
    title: 'Vozes Indígenas',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['animation', 'illustration', 'territory', 'environment', 'humanRights'],
    tagsPt: ['animação', 'ilustração', 'território', 'meioAmbiente', 'direitosHumanos'],
  },
  {
    id: 'populacao',
    title: 'População LGBTI+ Privada de Liberdade no Brasil',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: [en.PUBLICATION, en.ILLUSTRATION, en.EQUALITY, en.HUMAN_RIGHTS],
    tagsPt: [pt.PUBLICATION, pt.ILLUSTRATION, pt.EQUALITY, pt.HUMAN_RIGHTS],
  },
  {
    id: 'mongabay',
    title: 'Pacote Gráfico Mongabay',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['animation', 'environment', 'socialMedia'],
    tagsPt: ['animação', 'meioAmbiente', 'mídiasSociais'],
  },
  {
    id: 'refarm',
    title: 'Refarm',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['animation', 'illustration', 'esg', 'environment'],
    tagsPt: ['animação', 'ilustração', 'esg', 'meioAmbiente'],
  },
  {
    id: 'plenamata',
    title: 'Plenamata',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['infographic', 'illustration', 'environment'],
    tagsPt: ['infográfico', 'ilustração', 'meioAmbiente'],
  },
  {
    id: 'mata',
    title: 'Mata Atlântica: Novas Histórias',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['illustration', 'environment', 'publication', 'visualIdentity', 'infographic'],
    tagsPt: ['ilustração', 'meioAmbiente', 'publicação', 'identidadeVisual', 'infográfico'],
  },
  {
    id: 'guia',
    title: 'Um Guia para os Perplexos',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['publication', 'illustration', 'environment'],
    tagsPt: ['publicação', 'ilustração', 'meioAmbiente'],
  },
  {
    id: 'rhino',
    title: 'Rhino Poop',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['animation', 'illustration', 'environment'],
    tagsPt: ['animação', 'ilustração', 'meioAmbiente'],
  },
  {
    id: 'olhar',
    title: 'Olhar Perto, Enxergar Longe',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['environment', 'publication'],
    tagsPt: ['meioAmbiente', 'publicação'],
  },
  {
    id: 'despolarize',
    title: 'Despolarize',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['illustration', 'animation', 'politics'],
    tagsPt: ['ilustração', 'animação', 'política'],
  },
  {
    id: 'pasto',
    title: 'Do Prato ao Pasto',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['animation', 'illustration', 'environment'],
    tagsPt: ['animação', 'ilustração', 'meioAmbiente'],
  },
  {
    id: 'vozes',
    title: 'Vozes Femininas',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['women', 'publication', 'illustration', 'equality'],
    tagsPt: ['mulheres', 'publicação', 'ilustração', 'igualdade'],
  },
  {
    id: 'direitos',
    title: 'Direitos Humanos no Trabalho Rural',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['publication', 'illustration', 'infographic', 'humanRights', 'work'],
    tagsPt: ['publicação', 'ilustração', 'infográfico', 'direitosHumanos', 'trabalho'],
  },
  {
    id: 'plastico',
    title: 'Sem Plástico',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['illustration', 'animation', 'environment', 'esg'],
    tagsPt: ['ilustração', 'animação', 'meioAmbiente', 'esg'],
  },
  {
    id: 'sitawi',
    title: 'Sitawi',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['illustration', 'equality', 'animation', 'environment'],
    tagsPt: ['ilustração', 'igualdade', 'animação', 'meioAmbiente'],
  },
  {
    id: 'captura',
    title: 'Captura Corporativa',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['illustration', 'animation', 'environment', 'humanRights', 'politics'],
    tagsPt: ['ilustração', 'animação', 'meioAmbiente', 'direitosHumanos', 'política'],
  },
]

export { projects, allTags };
