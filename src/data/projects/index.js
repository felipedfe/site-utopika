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
    'ilustration'
  ],
  pt:
    [
      'mídiasSociais',
      'infográfico',
      'animação',
      'publicação',
      'mulheres',
      'trabalho',
    ]
}

const projects = [
  {
    id: 'despolarize',
    title: 'Despolarize',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    imageThumb: 'images/test-thumb-1.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['animation', 'ilustration'],
    tagsPt: ['animação', 'ilustração'],
  },
  {
    id: 'vozes-femininas',
    title: 'Vozes Femininas',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    imageThumb: 'images/test-thumb-2.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['animation', 'women', 'politics', 'cities', 'work', 'esg', 'infographic', 'equality'],
    tagsPt: ['animação', 'ilustração'],
  },
  {
    id: 'direitos-humanos',
    title: 'Direitos Humanos no trabalho Rural',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    imageThumb: 'images/test-thumb-3.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['humanRights', 'politics'],
    tagsPt: ['direitosHumanos', 'política'],
  },
  {
    id: 'sitawi',
    title: 'Sitawi',
    images: {
      thumbnail: 'thumb.png',
      full: '...'
    },
    imageThumb: 'images/test-thumb-4.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['socialMedia', 'politics'],
    tagsPt: ['animação', 'ilustração']
  },
]

export { projects, allTags };
