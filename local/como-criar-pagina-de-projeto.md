# Como criar página de projeto

Cada projeto tem uma tradução em português e inglês. Existe uma página única para o projeto, mas suas informações são carregadas de acordo com a língua escolhida. O texto do projeto, tags e tudo mais tem versões em português e inglês (ver src/data/languages).

Criando projeto:
- pages > projectsPages > Projeto.jsx (colocar o nome do projeto em questao)
- importar o jsx no arquivo index.js dentro de ProjectsPages, no formato `const Projeto = lazy(() => import("./projeto/Projeto"));` (carrega a página sob demanda), e adicionar no `export`
- cadastrar em data > projects > index.js
- colocar textos dos projetos em data > languages > ProjectsPage
- criar pasta com imagens do projeto em public > images > projects
- criar rota pra página em App.js

OBS: atualizar as tags em **data > projects** e **data > languages > ProjectsPage**

Tamanho dos thumbs: **768 x 576**

Thumb do projeto (fica na pasta de imagens do projeto):
- imagem estática: `thumb.jpg`, `thumb.png` ou `thumb.webp`, mais o `thumb-low.jpg` (versão borrada que aparece enquanto a imagem carrega)
- animado: `thumb.mp4`, mais o `thumb-poster.jpg` (primeiro quadro do vídeo, aparece antes dele tocar)
- o nome do arquivo vai em `images.thumbnail` no cadastro do projeto em data > projects > index.js

Gerando o thumb animado a partir de um GIF (rodar na pasta de imagens do projeto, precisa do ffmpeg):

```bash
# GIF -> MP4
ffmpeg -i thumb.gif -movflags +faststart -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 23 -preset slow -an thumb.mp4

# primeiro quadro do vídeo -> poster
ffmpeg -i thumb.mp4 -frames:v 1 -update 1 -q:v 3 thumb-poster.jpg
```

- para mais qualidade, diminuir o `-crf` (17 fica quase idêntico ao GIF, mas o arquivo dobra de tamanho)
- se o MP4 ficar maior que o GIF (acontece com animações de poucos quadros), manter o GIF e cadastrar `'thumb.gif'`
- depois de gerar o MP4, tirar o GIF da pasta do projeto pra ele não ir pro site (os originais ficam em backup/thumbs-gif)

Padrão de largura das imagens: **1200px**