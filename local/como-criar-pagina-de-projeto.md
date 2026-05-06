# Como criar página de projeto

Cada projeto tem uma tradução em português e inglês. Existe uma página única para o projeto, mas suas informações são carregadas de acordo com a língua escolhida. O texto do projeto, tags e tudo mais tem versões em português e inglês (ver src/data/languages).

Criando projeto:
- pages > projectsPages > Projeto.jsx (colocar o nome do projeto em questao)
- importar o jsx no arquivo index.js dentro de ProjectsPages
- cadastrar em data > projects > index.js
- colocar textos dos projetos em data > languages > ProjectsPage
- criar pasta com imagens do projeto em public > images > projects
- criar rota pra página em App.js

OBS: atualizar as tags em **data > projects** e **data > languages > ProjectsPage**

Tamanho dos thumbs: **768 x 576**

Padrão de largura das imagens: **1200px**