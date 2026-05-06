# Project overview — guia de implementação

Este documento descreve como implementar as rotas **`/project-overview/...`** no site, seguindo a decisão de:

- **Conteúdo só em inglês** (sem entradas nos arquivos `projectsPagePt.js` / `projectsPageEn.js` para essas páginas).
- **Rotas explícitas** no `App.js` (um `Route` por slug), alinhado ao padrão atual de `/projetos/...`.
- **`MainPageLayout`** para menu, área principal e footer (igual às outras páginas).
- **Shell leve** (`ProjectOverviewPageLayout` ou nome similar) só para margens, `max-width` e ritmo vertical — equivalente à opção **3b** discutida no chat (sem `cloneElement` nem acoplamento ao `projectsPage`).
- **Um componente de UI único** que recebe props (ou um objeto `content`) e renderiza o card/section no layout do design (duas colunas, header, CTAs, collage, “Client reference”, responsivo).

Referências úteis no código existente:

- Menu + estrutura da página: `src/pages/pageLayouts/mainPageLayout.jsx`
- Shell de margens em página de projeto: `src/pages/pageLayouts/projectPageLayout.jsx` (só como inspiração para `max-width` / `margin`; **não** reutilizar a lógica de `projectsPage` / `cloneElement` para overview)
- Rotas: `src/App.js`

---

## Fontes de conteúdo e design (já no repositório)

### Texto e links por card

- **Arquivo:** `local/project-overview/data/text.md`
- Ali estão, em inglês, por rota (`/project-overview/somosoclima`, `euroclima`, etc.): título, subtítulo/tagline, corpo e a seção **links** de cada projeto.
- Na implementação, transcreva esse conteúdo para os módulos em `src/data/projectOverviews/...` (ou equivalente), mantendo o Markdown só como referência ou rascunho editorial.

### Links = botões do card

- Os URLs listados em **links** no `text.md` correspondem aos **botões** largos em estilo ghost (fundo claro, borda e texto em coral/vermelho) do layout de exemplo.
- **Referência visual:** `local/project-overview/data/card-exemplo.png` — mockup de alta fidelidade: barra superior (título forte à esquerda do pipe, categoria em caps à direita), coluna esquerda (logo do cliente, tagline, parágrafos, CTAs), coluna direita (grelha 2×2 de imagens; “Client reference” quando existir nos dados).

### Implementação já no código (referência)

- **Card:** `src/components/ProjectOverview/ProjectOverviewCard.jsx`
- **Dados de exemplo:** `src/data/projectOverviews/somosOClima.js`
- **Rotas ativas:** `/project-overview/somosoclima`, `/project-overview/euroclima`, `/project-overview/festsauva`, `/project-overview/rosaluxredes`, `/project-overview/adaptacaoclimatica` (ver `src/App.js`)

O mapeamento do `text.md` para o card pode ajustar-se ao design: por exemplo, a **primeira parte do título** (antes do `|`) pode ir em `overviewLabel` e a **segunda parte** em `categoryLine`; o logo do cliente pode carregar o nome visualmente, pelo que `client.name` no JS pode ser omitido quando for redundante.

### Imagens

- **Pasta pública:** `public/images/project-overview/`
- Assets servidos na web com caminho estável, por exemplo:  
  `/images/project-overview/01-somosoclima/somosoclima-logo.png`  
  `/images/project-overview/01-somosoclima/somosoclima-img-direita.webp`
- Subpastas por projeto (numeração + slug), por exemplo:
  - `01-somosoclima/` — logo + imagens do collage
  - `02-euroclima/`
  - `03-festsauva/`
  - `04-rosaluxredes/`
  - `05-adaptacaoclimatica/`
- No componente, o array **`collage`**: com **um** item, a coluna direita mostra uma imagem em destaque; com **dois ou mais**, usa-se uma **grelha 2×2** (como no `card-exemplo.png`). Adicione ficheiros em `public/images/project-overview/...` e aponte-os nos dados com URLs a partir da raiz (`/images/project-overview/...`).

---

## 1. Criar o componente de UI

**Sugestão de caminho:** `src/components/ProjectOverview/ProjectOverviewCard.jsx` (e, se preferir, `ProjectOverviewCard.styles.js` ou `styled` no mesmo arquivo, como em `P4f.jsx`).

**Responsabilidade:** apenas apresentação. Props suportadas pelo `ProjectOverviewCard` (espelho do código):

| Prop | Uso |
|------|-----|
| `overviewLabel` | Texto em negrito à esquerda do pipe no topo (default no código: `Project overview`; no exemplo Somos o Clima usa-se o título principal, ex.: `SOMOS O CLIMA`) |
| `categoryLine` | Texto à direita do pipe (categoria / linha secundária; estilo caps + cor de destaque) |
| `client` | Objeto `{ logoSrc, logoAlt, name? }`. Se `name` existir, aparece ao lado do logo; se o logo já incluir o nome, pode omitir-se `name` |
| `tagline` | Linha coral abaixo do bloco do cliente (subtítulo do `text.md`) |
| `paragraphs` | Array de strings — um `<p>` por item |
| `links` | Array `{ label, href }` — botões ghost externos (`target="_blank"`); alinhar rótulos ao `text.md` e ao `card-exemplo.png` |
| `collage` | Array `{ src, alt }` — 1 imagem: faixa única à direita; 4 itens: grelha 2×2 como no mockup |
| `clientReference` | Opcional. `{ heading?, name, role?, email? }` — card branco sobre o collage; só renderiza se existir |

**Responsividade:** em viewports estreitas, colapsar para uma coluna (texto acima, collage abaixo), como no layout de referência.

**Imagens:** usar principalmente `public/images/project-overview/` (rotas `/images/project-overview/...`). Complementar com `src/assets/...` só se o restante do projeto exigir imports bundlados.

---

## 2. Criar o shell de página (layout leve)

**Sugestão de caminho:** `src/pages/pageLayouts/projectOverviewPageLayout.jsx`

**Responsabilidade:**

- Envolver `{children}` em um container (`styled-components` ou classe) com regras parecidas às de `projectPageLayout.jsx` (ex.: `margin: 0 4%`, `max-width: 1200px`, media queries) para não colar o card nas bordas em telas grandes.
- **Não** ler `pathname` para buscar texto em `textLanguages`. Cada página filha importa o próprio conteúdo em inglês e passa ao card.

Exemplo de uso conceitual:

```jsx
<ProjectOverviewPageLayout>
  <ProjectOverviewCard {...somosOClimaContent} />
</ProjectOverviewPageLayout>
```

---

## 3. Dados em inglês (por projeto)

A redação canônica por card está em **`local/project-overview/data/text.md`**. Ao criar `src/data/projectOverviews/*.js`, copie ou estruture título, subtítulo, parágrafos e `links` a partir desse arquivo.

**Opção A — um arquivo por slug (simples de manter):**

```
src/data/projectOverviews/
  somosOClima.js
  euroclima.js
  ...
```

Cada arquivo exporta um objeto constante em inglês consumido pela página correspondente.

**Opção B — um único índice:**

`src/data/projectOverviews/index.js` exportando `export const somosOClima = { ... }` etc.

Para **rotas explícitas**, não é obrigatório um mapa por slug no router; cada página importa o objeto que precisa.

---

## 4. Páginas finas (uma por rota)

**Sugestão de pasta:** `src/pages/projectOverviewPages/` (espelhando `projectsPages/`).

Para cada URL, um componente mínimo, por exemplo `SomosOClima.jsx`:

- Importa `ProjectOverviewCard` e os dados de `src/data/projectOverviews/somosOClima.js` (ou equivalente).
- Retorna só o `<ProjectOverviewCard {...dados} />`. O **`ProjectOverviewPageLayout`** pode envolver essa página no **`App.js`** (padrão atual da rota Somos o Clima) ou dentro do ficheiro da página — o importante é manter `MainPageLayout` → shell → conteúdo.

Exportar os componentes em `src/pages/projectOverviewPages/index.js` (padrão do `projectsPages/index.js`) para manter imports no `App.js` organizados.

---

## 5. Registrar rotas explícitas no `App.js`

1. Importar `MainPageLayout` (já existente).
2. Importar `ProjectOverviewPageLayout` (novo).
3. Importar cada página (`SomosOClima`, …) de `./pages/projectOverviewPages`.
4. Adicionar um bloco `Route` por slug, sempre no formato:

```jsx
<Route
  exact
  path="/project-overview/somosoclima"
  element={
    <MainPageLayout>
      <ProjectOverviewPageLayout>
        <SomosOClima />
      </ProjectOverviewPageLayout>
    </MainPageLayout>
  }
/>
```

Repetir para: `euroclima`, `festsauva`, `rosaluxredes`, `adaptacaoclimatica` (ajustar nomes de componente/arquivo ao kebab-case ou PascalCase que escolherem).

**Opcional:** rota `/project-overview` sem slug — lista de links, redirect para `/projetos`, ou 404; definir produto.

---

## 6. SEO e título da aba (opcional mas recomendado)

Se o projeto usar `react-helmet` ou similar, em cada página fina definir `<title>` e meta description em inglês. Se não houver Helmet, documentar para uma passagem futura.

---

## 7. Menu e links internos

Se quiserem entrada no `Menu` apontando para overview:

- Editar `src/components/Menu/Menu.jsx` (ou onde os links são definidos) e adicionar o(s) link(s) desejado(s) para `/project-overview/...`.

---

## 8. Checklist final

- [ ] `ProjectOverviewCard` implementado e responsivo (alinhado a `local/project-overview/data/card-exemplo.png` onde fizer sentido)
- [ ] `ProjectOverviewPageLayout` com margens / `max-width`
- [ ] Dados em inglês por projeto (`src/data/projectOverviews/...`), consistentes com `local/project-overview/data/text.md`
- [ ] Links do `text.md` mapeados para `links` / botões ghost no card
- [ ] Imagens em `public/images/project-overview/` referenciadas corretamente (`/images/project-overview/...`)
- [ ] Uma página fina por slug + `index.js` de exports
- [ ] Rotas explícitas no `App.js` com `MainPageLayout` → shell → página
- [ ] Links externos testados
- [ ] (Opcional) Menu / Helmet / rota índice `/project-overview`

---

## Ordem sugerida de trabalho

1. Componente de UI com **dados** tirados de `text.md` + imagens de `public/images/project-overview/...` e comparação com `card-exemplo.png` (as cinco rotas em `/project-overview/...` já servem de referência).
2. Shell de layout e ajuste visual no viewport real.
3. Extrair dados mock para arquivos em `projectOverviews` e duplicar o padrão da página fina para os demais slugs.
4. Registrar todas as rotas no `App.js` e remover rota de teste, se houver.

Assim o risco de refatorar o card várias vezes com cinco cópias de conteúdo cai.
