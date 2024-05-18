const allTags = {
  en:
    [
      'infographic',
      'animation',
      'socialMedia',
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
      'infográfico',
      'animação',
      'mídiasSociais',
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

const projects = [
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
]

export { projects, allTags };
