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
    // imageThumb: 'https://uccb0215da413dcce9427fffce07.previews.dropboxusercontent.com/p/thumb/AB2wpDDHkOv4wrecNTb-cv4PPc4QxCWi-rUzwLlEvM5v9Zcd4wNvTKtPGXou-vXPHzA1M9sLs4jsgg2ROuZ52_ZCth3DG9-eXo57qfhhur-uVNU-5w3IB3HjzIZpvw8NkR4xDO4PODn2XqsK-6dA2RscOxykHDatYiinI4-X8FbFIOduOoWOJvKr9rg1kJOyJsLHf8PdkAK7P_HKbB_bRm5ixKJVIN3HYmXfT7oED6Gz5-RmsgEMYf89PJ_Ua5dfbRGhUW6ZdcqW7jEN-gdEB6sl0uBtb3t5CvUZuOm6tZQpVlqoekP7EjQqW5NkWH3j5j1Jfa6ui741JPF1pQPnDoZeuOzHNn3l13F1cAXDskuIGxLIV_GORpOLI42s5D85A-X5cKqVmjGWtT1rokHyb9ktka1bTnjDQK3KQpPfwcg00A/p.png',
    imageThumb: 'images/test-thumb-1.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['animation', 'ilustration'],
    tagsPt: ['animação', 'ilustração'],
  },
  {
    id: 2,
    title: 'Vozes Femininas',
    imageThumb: 'https://uc7150f31cb8cad0620bbfc5ae97.previews.dropboxusercontent.com/p/thumb/AB1qmQCASk3kisiqL6lOTLnNTLhFCZGU8TzHDqwGg51T9EG-Efe3bqqml-GFk-EPLgug5Dm7clKPJMFJi0FVX3dBKBqglZliFWzTTq3ZS9WGHWdq4hwS16KBpQrWIe1gC-9Ym3icOcFT4aaC1wcsrHu5nVQ0OQSMRowV9ZTkAGUeesx6Kd0OFv6LbjRlmJsSlwk0UW1yCwyET7XQh-FuqAau6bxbps7_mlT5SfyH3UEwvBRGElXTXKn3bsF5-KPGatUD0xqFbrc0XnkoVKCjsxoMIPycpSzKH68nHp-sY6c50n2jQAXsW63AC8GWl7lG2uY9sqHA2K9mqbzk9y92HGk5oPRF6R57Bu47qczJAKeuaYx38FL3fhHsp21hlu3NC1PjL6bgacbOYfseYCDXfYHxlcTUsp7slcuelgyhgaRjTQ/p.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['animation', 'women', 'politics', 'cities', 'work', 'esg', 'infographic', 'equality'],
    tagsPt: ['animação', 'ilustração'],
  },
  {
    id: 3,
    title: 'Direitos Humanos no trabalho Rural',
    imageThumb: 'https://ucb341208758cdffd7c683c3de16.previews.dropboxusercontent.com/p/thumb/AB1CODXTjtVhg041t8GBHBS0cfwzlojNndEUhmgTb1KJ7ZAPC4thhvqPihS6qxapC_5M_ekD0Ho2IMrTND0QK5k7CkwwFUYMB7TjfFYnpt4EaiUL1Y7R50ADxulWEOBnLBlzEz4Yzx7yYIS_VUIN5xSQuTeCFOT7-2yCJ8vW2P_B9oWQJWsHR2jjgNgI7FA8xJl6AQtW0MLKPGPieziseezxAdJDjO1ZqWL-ntYf534qh7VKM4Xd6DA5CQCONu_41nVW6UldvGhqmv9LrSifPJdGdvcRuYAl98FlkzAu9cKz1RiZPm-T8qi75UlzwLG0oafrhp-Qf0vj5YVff86P7qqNFD3kZgHVu2ov7UWMThpGExrDGPhl3F8di9mcbqWxMjHOtEaCDw526kpkEr7veebijWE8qqtozcM6adL2HfyVaQ/p.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['humanRights', 'politics'],
    tagsPt: ['direitosHumanos', 'política'],
  },
  {
    id: 4,
    title: 'Sitawi',
    imageThumb: 'https://uc239e8d90058e2528937545fef9.previews.dropboxusercontent.com/p/thumb/AB18geTgTZ1tJ79OikTUbmDBodYGIpW5YW9kdDUUsT6Bc5yHcEdCa49m4BHHOMBZMrpZipdOnAWRjpw-lz-6BQlfq4qU_YEi4lbKawAg1CLAGm37AvGREZT40Zh4DZDUuYjpEoDXgzls6uW8agVv8K8-4nJYVi95Z1U0mdNjag3m9Rc_4OyS7omIQ7ltGBJPZPJX1Wwr-XHZLx_hv4OK1yiWCKNlL10Jn2e5zJjEsXXzyKezqKHodJ_typBWByR3KRVZAQj1cU98zsXWqx1UUBCRDF4Q2uclVtvQpvWs1Qu-SMO7GhRjd9PmvwIkZANyNPiUpP_ffI_p-bF_3yPiqmNJzfVddoGeir9sA_y-VPQRAwWiaE0HGZprCPQDjABuTAsjr8BsrNlBByIYbz4YqkP8ZyRs_-cvcnCWHMDLxRsb_g/p.png',
    imageFull: '(imagem)',
    alt: '(descrição)',
    tags: ['socialMedia', 'politics'],
    tagsPt: ['animação', 'ilustração']
  },
]

export { projects, allTags };
