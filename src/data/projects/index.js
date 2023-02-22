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
  ['mídiasSociais',
  'infográfico',
  'animação',
  'publicação',
  'mulheres',
  'trabalho',
]
}

const projects = [
  {
    id: 1,
    title: 'Despolarize',
    imageThumb: 'https://uccb0215da413dcce9427fffce07.previews.dropboxusercontent.com/p/thumb/AB2wpDDHkOv4wrecNTb-cv4PPc4QxCWi-rUzwLlEvM5v9Zcd4wNvTKtPGXou-vXPHzA1M9sLs4jsgg2ROuZ52_ZCth3DG9-eXo57qfhhur-uVNU-5w3IB3HjzIZpvw8NkR4xDO4PODn2XqsK-6dA2RscOxykHDatYiinI4-X8FbFIOduOoWOJvKr9rg1kJOyJsLHf8PdkAK7P_HKbB_bRm5ixKJVIN3HYmXfT7oED6Gz5-RmsgEMYf89PJ_Ua5dfbRGhUW6ZdcqW7jEN-gdEB6sl0uBtb3t5CvUZuOm6tZQpVlqoekP7EjQqW5NkWH3j5j1Jfa6ui741JPF1pQPnDoZeuOzHNn3l13F1cAXDskuIGxLIV_GORpOLI42s5D85A-X5cKqVmjGWtT1rokHyb9ktka1bTnjDQK3KQpPfwcg00A/p.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['animation', 'ilustration'],
    tagsPt: ['animação', 'ilustração'],
  },
  {
    id: 2,
    title: 'Vozes Femininas',
    imageThumb: 'https://uc7150f31cb8cad0620bbfc5ae97.previews.dropboxusercontent.com/p/thumb/AB2PclJXNG5G-jodpKzoGSfl_e77ru2yVTe49fMKR0vtXdA_Vntuj-kz6SMBSQIJmQSvIoVaTY2HWLaE47AVLasCr18zmxsrccmV8dUxpuURf7wNA1VVjCHOdQVF_Dhci082uj4kapdyu2SCwgPIVPTdqDX7e5ykTH0kfUMGf4SaABvW0lnO5oGvAIm2dbj7tKLddSICyzPPlnsCT2djT_wwOM85gSMHgpbqJ9o4yn5RMe0bp6Zkxl8kLMm6OD50R417FwIYFNEA0llafAfS0g7u73E4VRX8Mjhr3lR-yszYYqx4Fx7ahH1lxkWl0nXy21N4HbP0inbj_uxXrWPTG6LYh_fJe0Ahh-Pj5tDdCNCLDiImEvZKHiSpnl0Ka0for2cVM7EHy0H8mdqB-54oTu97H3L-WuYNz34NOUTP2otIBQ/p.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['animation', 'women', 'politics', 'cities', 'work', 'esg', 'infographic', 'equality'],
    tagsPt: ['animação', 'ilustração'],
  },
  {
    id: 3,
    title: 'Direitos Humanos no trabalho Rural',
    imageThumb: 'https://ucb341208758cdffd7c683c3de16.previews.dropboxusercontent.com/p/thumb/AB2tldujoInAUsygPjhPiUGR6vXy8waA8yRNuCDbcxZxGb13d-9vgbI0iz8b-U5bP7HQWAm7tJ0er7H_TKC0scaBxswUg9n50ADspcsX4Mf4nvxwjSXA13_14QXgEqnbVJpgfwTMj-K9txu6wXMNBArWYL6e3qlHtSz0CUHNzpwqaAPO3a8QZG10ftmMNES8CCI6b9wJzKJiFqUx8oQBQFEHUg55UMpV_VP8pL9zyQlBXxWT4JzVRzqLJ8ALBFrI5JqcdnNtMCTWUvaEBl47ivDZhP4yf_RgwbTNdvWkjTGLtJTjRi5spBiIlXevzBEOLpX4-dg7QzXZThMS5RfdR7Dlxvam8tc5GMJxGXchbIwFdTHYRGbGXqGpDIpNaP_nc8OZfKzFGpMxMcw2tt6fwYDnFpGW2SLySvyBDkjlNfqP1A/p.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['humanRights', 'politics'],
    tagsPt: ['direitosHumanos', 'política'],
  },
  {
    id: 4,
    title: 'Sitawi',
    imageThumb: 'https://uc239e8d90058e2528937545fef9.previews.dropboxusercontent.com/p/thumb/AB3LvWimkbhnFRQjd7M3PRjOf5ReK8NpRFthsoydyHhrTHiC03SETAwrJ7jptqBZmLvQkI_wWsC9LjWvtnweRU3vmL8A7dV9GwJA4VaNylXhA8kcIP3PgKumwhCDHn9owTWUM2E4l5a3EV6Hl55caCj-cAGmkWfq-xD4jcVtBYVbwkO7Cac0t4LhWywHmYqLsQwBlNuY3hCNpMwovG4FhHfBytjaLAILDuloH-XxW1l-44PoVWSXlNQ8TW1iKdFMbencSAbPA7Zk-6LrAZJLlDvnzPG5PkYJQM6ksv7uul8g4XWnp_7oKpo6nIm3Y6dN8bjmrS3Af7OTNRK6crm9pL8tPRiEcVOZqjvoVZsDuQHUneCuT7z364ogISkk5LPFK3LgwsNkT6uZRu5h1R5zvFhPPIzmq0hvD6fF7Rv9G-Mopg/p.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['socialMedia', 'politics'],
    tagsPt: ['animação', 'ilustração']
  },
]

export { projects, allTags };
