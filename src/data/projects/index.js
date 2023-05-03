const allTags = {
  en: [
    'socialMedia',
    'infographic',
    'animation',
    'publication',
    'women',
    'work',
    'esg',
    'equality',
    'cities',
    'territory',
    'politics',
    'environment',
    'humanRights',
    'illustration'
  ],
  pt:
    [
      'mídiasSociais',
      'infográfico',
      'animação',
      'publicação',
      'mulheres',
      'trabalho',
      'meioAmbiente'
    ]
}

const projects = [
  {
    id: 'mongabay',
    title: 'Pacote Gráfico Mongabay',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['animation', 'women', 'politics', 'cities', 'work', 'esg', 'infographic', 'equality', 'publication', 'humanRights'],
    tagsPt: ['animação', 'ilustração'],
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
    id: 'vozes-femininas',
    title: 'Vozes Femininas',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['animation', 'women', 'politics', 'cities', 'work', 'esg', 'infographic', 'equality'],
    tagsPt: ['animação', 'ilustração'],
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
    id: 'pasto',
    title: 'Do Prato ao Pasto',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['socialMedia', 'politics'],
    tagsPt: ['animação', 'ilustração'],
  },
  {
    id: 'direitos',
    title: 'Direitos Humanos no Trabalho Rural',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    alt: '(descrição)',
    tags: ['socialMedia', 'politics'],
    tagsPt: ['animação', 'ilustração'],
  },
]

export { projects, allTags };
