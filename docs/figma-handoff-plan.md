# InBot — Figma Handoff Plan

> Plano de integração entre o design system do código React e o arquivo Figma.
> Versão: 1.0 — Fase 1 (Design System Base)
> Arquivo Figma: [QA-Design](https://www.figma.com/design/A7HhKkaqiLZ1SU7rx1qqMM/QA-Design)

---

## Objetivo do Figma dentro do projeto

O Figma não é só uma ferramenta de prototipagem — dentro do projeto InBot ele funciona como:

1. **Fonte de verdade visual:** onde decisões de layout, proporção e composição são tomadas antes de codificar
2. **Vocabulário compartilhado:** onde tokens de design e componentes têm nomes idênticos ao código
3. **Espaço de exploração:** onde wireframes, visual direction e iterações acontecem sem risco de quebrar o projeto
4. **Handoff estruturado:** onde quem for implementar a landing encontra especificações precisas

O Figma **não substitui** a documentação em `/docs` — os dois convivem e se complementam.

---

## O que deve viver no Figma

| Categoria | O que fica no Figma |
|-----------|---------------------|
| Brand Foundation | Paleta visual, exemplos de uso de cor, hierarquia tipográfica renderizada |
| Design Tokens | Color styles / variables com os mesmos nomes do `tokens.css` |
| Componentes | Button, Badge, Card, MetricCard, Navbar — com variantes e estados |
| Wireframes | Estrutura de baixa fidelidade das seções da landing |
| Visual Direction | Exploração de composição e estética sem implementar |
| Assets | Logotipo (quando disponível), ícones, elementos gráficos aprovados |
| Decisões de layout | Grid, container, breakpoints documentados em frames |
| Seções da landing | Cada seção desenhada antes de codificar |

---

## O que deve viver no código

| Categoria | O que fica no código |
|-----------|----------------------|
| CSS custom properties | Fonte de verdade dos valores de token (`tokens.css`) |
| Lógica de componente | Props, variantes, estados, comportamento |
| Responsividade | Breakpoints e adaptações mobile/tablet/desktop |
| Animações e transições | Não replicar no Figma — documentar apenas intenção |
| Dados dinâmicos | Conteúdo real, métricas, navigation links |
| Acessibilidade | ARIA, semântica HTML, foco — não existe no Figma |

---

## Como evitar divergência entre Figma e código

A divergência acontece quando uma mudança é feita em um lugar e não refletida no outro. As regras abaixo minimizam esse risco:

### Regra 1 — Token primeiro, sempre

Nunca use um valor arbitrário no Figma que não exista em `tokens.css`.
Se precisar de um novo valor, adicione ao `tokens.css` primeiro, depois use no Figma.

### Regra 2 — Nomes idênticos

O nome de um color style no Figma deve ser **exatamente** o mesmo que o token CSS, exceto pela notação:

| CSS | Figma |
|-----|-------|
| `--color-azul-abismo` | `color/primitive/azul-abismo` |
| `--color-background` | `color/semantic/background` |
| `--space-6` | `spacing/6` |
| `--radius-2xl` | `radius/2xl` |

### Regra 3 — Componentes espelham props

Cada variante de componente no Figma deve corresponder a uma prop real do componente React.
Não criar variantes no Figma que não existem no código, e vice-versa.

### Regra 4 — Checklist de alinhamento antes de cada fase

Antes de iniciar qualquer nova fase de desenvolvimento, rodar o checklist de revisão (seção mais abaixo).

### Regra 5 — Nenhum valor hardcode no Figma

Usar sempre variables/styles criadas a partir dos tokens — nunca pegar um hex diretamente de uma paleta externa.

### Regra 6 — Decisões documentadas

Qualquer decisão que diverge do design system (exceção, adaptação, experimentação) deve ser anotada no frame de Notes/Decisions no Figma e, se aprovada, documentada no `/docs`.

---

## Estrutura recomendada de páginas no Figma

```
QA-Design (arquivo)
├── 01 — Brand Foundation
├── 02 — Design Tokens
├── 03 — Components
├── 04 — Landing Wireframe
├── 05 — Landing Visual Direction
├── 06 — Assets
└── 07 — Notes / Decisions
```

### 01 — Brand Foundation

**O que contém:**
- Frame com a paleta de cores renderizada (swatches com hex e nome)
- Frame com a escala tipográfica visível (Display XL até XS)
- Frame com o posicionamento de marca (texto da brand-foundation.md)
- Frame com os gradientes principais aplicados
- Frame com exemplos de uso correto e incorreto da marca

**Por que:** Este é o frame que qualquer novo colaborador deve ver primeiro. Estabelece a linguagem visual antes de qualquer componente.

---

### 02 — Design Tokens

**O que contém:**
- Todas as color variables criadas e organizadas em grupos
- Text styles para cada nível da escala tipográfica
- Spacing tokens documentados em régua visual (frames de 4px, 8px, 16px...)
- Radius tokens com exemplos visuais
- Shadow/effect styles

**Por que:** Esta página é o espelho visual do `tokens.css`. Se os dois não estiverem sincronizados, há divergência.

---

### 03 — Components

**O que contém:**
- `Button` com variantes primary / secondary / ghost e tamanhos sm / md / lg
- `Badge` com variantes brand / accent / muted / dark
- `Card` com variante padrão e glow
- `MetricCard` com exemplo de valor, label e descrição
- `Navbar` desktop (mobile documentado separadamente se necessário)
- `Section` — exemplos de seção escura e clara
- `Container` — frame ilustrando largura máxima e padding

**Organização dentro da página:**
```
Components/
├── Button/
│   ├── Primary (sm, md, lg)
│   ├── Secondary (md)
│   └── Ghost (md)
├── Badge/
│   ├── Brand
│   ├── Accent
│   ├── Muted
│   └── Dark
├── Card/
│   ├── Default
│   └── Glow
├── MetricCard/
├── Navbar/
│   └── Desktop
└── Section/
    ├── Dark
    └── Light
```

---

### 04 — Landing Wireframe

**O que contém:**
- Wireframe de baixa fidelidade de cada seção da landing
- Apenas estrutura e hierarquia — sem cor, sem tipografia final, sem assets
- Anotações de objetivo e conteúdo de cada seção
- Baseado em `landing-information-architecture.md`

**Seções a wirefrear (em ordem):**
1. Navbar
2. Hero
3. Métricas
4. Plataforma
5. Operação Conversacional
6. Dados / Agentes / Canais / Jornadas
7. Soluções
8. Diferenciais
9. Cases
10. Conteúdo
11. CTA Final
12. Footer

**Por que:** Resolver estrutura antes de cor e tipografia economiza retrabalho.

---

### 05 — Landing Visual Direction

**O que contém:**
- Frames de exploração visual com o design system aplicado
- Moodboard de referência (Sqala, Apple, Insany — prints ou descrições visuais)
- Exploração de composição para a seção Hero
- Exploração de estilo para cards, gradientes e glow
- **Não é a landing final** — é exploração antes de codificar

**Regra:** Qualquer exploração aqui deve usar apenas os tokens do `02 — Design Tokens`. Nenhum valor hardcode.

---

### 06 — Assets

**O que contém:**
- Logotipo InBot (quando o SVG oficial for recebido)
- Ícones de produto
- Elementos gráficos aprovados (linhas orbitais, texturas sutis)
- Frames de og:image e favicon para referência

**Regra:** Nenhum asset externo sem autorização. Nenhuma fonte proprietária carregada no Figma antes de confirmação legal.

---

### 07 — Notes / Decisions

**O que contém:**
- Decisões de design não óbvias e o porquê por trás delas
- Exceções ao design system (com justificativa)
- Perguntas abertas e pendências
- Histórico de mudanças importantes

**Formato sugerido para cada decisão:**
```
[DATA] DECISÃO: ...
MOTIVO: ...
IMPACTO NO CÓDIGO: ...
STATUS: aprovado / em revisão / descartado
```

---

## Naming Convention — Tokens no Figma

### Cores

Usar estrutura de pasta com `/` como separador:

```
color/
├── primitive/
│   ├── azul-abismo       → #023c8f
│   ├── azul-nebulosa     → #15b7fe
│   ├── azul-nucleo       → #0065fe
│   ├── azul-aurora       → #0c0a3b
│   └── branco-cintilante → #ebebed
└── semantic/
    ├── background        → #0c0a3b
    ├── surface           → #12103d
    ├── surface-raised    → #181660
    ├── surface-light     → #f5f7ff
    ├── primary           → #0065fe
    ├── primary-strong    → #023c8f
    ├── accent            → #15b7fe
    ├── text              → #ebebed
    ├── text-muted        → rgba(235,235,237,0.55)
    ├── text-subtle       → rgba(235,235,237,0.35)
    ├── border            → rgba(21,183,254,0.15)
    ├── border-subtle     → rgba(235,235,237,0.08)
    └── border-strong     → rgba(21,183,254,0.4)
```

### Tipografia (Text Styles)

```
typography/
├── display/
│   ├── xl    → 72px / 700 / display
│   └── l     → 60px / 700 / display
├── heading/
│   ├── h1    → 48px / 700 / display
│   ├── h2    → 36px / 600 / display
│   ├── h3    → 30px / 600 / display
│   └── h4    → 24px / 600 / display
└── body/
    ├── l     → 18px / 400
    ├── base  → 16px / 400
    ├── small → 14px / 400
    └── xs    → 12px / 500
```

### Espaçamento

```
spacing/
├── 1   → 4px
├── 2   → 8px
├── 3   → 12px
├── 4   → 16px
├── 6   → 24px
├── 8   → 32px
├── 12  → 48px
├── 16  → 64px
├── 20  → 80px
├── 24  → 96px
└── 32  → 128px
```

### Radius

```
radius/
├── sm   → 4px
├── md   → 8px
├── lg   → 12px
├── xl   → 16px
├── 2xl  → 24px
└── full → 9999px
```

### Sombras / Effects

```
effect/
├── shadow-sm
├── shadow-md
├── shadow-lg
├── glow
└── glow-strong
```

---

## Naming Convention — Componentes no Figma

Componentes Figma usam `/` como separador de grupo e `=` para variantes (padrão Figma):

```
Button/Primary/Large
Button/Primary/Medium
Button/Primary/Small
Button/Secondary/Medium
Button/Ghost/Medium

Badge/Brand
Badge/Accent
Badge/Muted
Badge/Dark

Card/Default
Card/Glow

MetricCard/Default

Navbar/Desktop
Navbar/Mobile

Section/Dark
Section/Light

Container/Default
Container/Wide
```

---

## Mapeamento — Tokens do Código para Figma Variables

| Token no código | Nome no Figma | Valor | Tipo | Observação |
|----------------|---------------|-------|------|------------|
| `--color-azul-abismo` | `color/primitive/azul-abismo` | `#023c8f` | Color | Cor primitiva |
| `--color-azul-nebulosa` | `color/primitive/azul-nebulosa` | `#15b7fe` | Color | Cor primitiva |
| `--color-azul-nucleo` | `color/primitive/azul-nucleo` | `#0065fe` | Color | Cor primitiva |
| `--color-azul-aurora` | `color/primitive/azul-aurora` | `#0c0a3b` | Color | Cor primitiva |
| `--color-branco-cintilante` | `color/primitive/branco-cintilante` | `#ebebed` | Color | Cor primitiva |
| `--color-background` | `color/semantic/background` | `#0c0a3b` | Color | Alias de aurora |
| `--color-surface` | `color/semantic/surface` | `#12103d` | Color | Sem token primitivo direto |
| `--color-surface-raised` | `color/semantic/surface-raised` | `#181660` | Color | Cards e modais |
| `--color-surface-light` | `color/semantic/surface-light` | `#f5f7ff` | Color | Seções claras |
| `--color-primary` | `color/semantic/primary` | `#0065fe` | Color | Alias de nucleo |
| `--color-primary-strong` | `color/semantic/primary-strong` | `#023c8f` | Color | Alias de abismo |
| `--color-accent` | `color/semantic/accent` | `#15b7fe` | Color | Alias de nebulosa |
| `--color-text` | `color/semantic/text` | `#ebebed` | Color | Alias de cintilante |
| `--color-text-muted` | `color/semantic/text-muted` | `rgba(235,235,237,0.55)` | Color | Opacidade — usar opacity no Figma |
| `--color-text-subtle` | `color/semantic/text-subtle` | `rgba(235,235,237,0.35)` | Color | Opacidade |
| `--color-text-dark` | `color/semantic/text-dark` | `#0c0a3b` | Color | Para seções claras |
| `--color-border` | `color/semantic/border` | `rgba(21,183,254,0.15)` | Color | Borda padrão |
| `--color-border-subtle` | `color/semantic/border-subtle` | `rgba(235,235,237,0.08)` | Color | Separadores |
| `--color-border-strong` | `color/semantic/border-strong` | `rgba(21,183,254,0.4)` | Color | Hover, destaque |
| `--space-1` | `spacing/1` | `4px` | Number | Base da escala |
| `--space-2` | `spacing/2` | `8px` | Number | |
| `--space-3` | `spacing/3` | `12px` | Number | |
| `--space-4` | `spacing/4` | `16px` | Number | |
| `--space-6` | `spacing/6` | `24px` | Number | Padding de card |
| `--space-8` | `spacing/8` | `32px` | Number | |
| `--space-12` | `spacing/12` | `48px` | Number | |
| `--space-16` | `spacing/16` | `64px` | Number | |
| `--space-20` | `spacing/20` | `80px` | Number | Padding de seção |
| `--space-24` | `spacing/24` | `96px` | Number | |
| `--space-32` | `spacing/32` | `128px` | Number | Hero |
| `--radius-sm` | `radius/sm` | `4px` | Number | |
| `--radius-md` | `radius/md` | `8px` | Number | |
| `--radius-lg` | `radius/lg` | `12px` | Number | |
| `--radius-xl` | `radius/xl` | `16px` | Number | |
| `--radius-2xl` | `radius/2xl` | `24px` | Number | Cards principais |
| `--radius-full` | `radius/full` | `9999px` | Number | Badges, pills |
| `--shadow-sm` | `effect/shadow-sm` | `0 1px 3px rgba(0,0,0,0.3)` | Effect | |
| `--shadow-md` | `effect/shadow-md` | `0 4px 16px rgba(0,0,0,0.4)` | Effect | |
| `--shadow-lg` | `effect/shadow-lg` | `0 8px 32px rgba(0,0,0,0.5)` | Effect | |
| `--shadow-glow` | `effect/glow` | `0 0 40px rgba(21,183,254,0.15)` | Effect | |
| `--shadow-glow-strong` | `effect/glow-strong` | `0 0 60px rgba(0,101,254,0.25)` | Effect | |
| `--transition-fast` | — | `150ms ease` | — | Não existe como variable no Figma — documentar em Notes |
| `--transition-normal` | — | `250ms ease` | — | Anotar em Notes/Decisions |
| `--container-max` | `layout/container-max` | `1200px` | Number | Usar como constraint em frames |
| `--container-wide` | `layout/container-wide` | `1400px` | Number | |

> **Nota sobre gradientes:** O Figma suporta gradientes nativamente mas não como variable tipada. Criar os gradientes como fill styles com os nomes `gradient/primary`, `gradient/aurora`, `gradient/deep`, `gradient/nebula`, `gradient/text`.

> **Nota sobre cores com opacidade:** No Figma, criar a cor sólida e aplicar opacidade por layer ou usar a opacidade diretamente no fill. Não inventar uma cor diferente.

---

## Mapeamento — Componentes React para Figma

| Componente React | Componente Figma | Variantes | Estados | Observações |
|-----------------|------------------|-----------|---------|-------------|
| `Button` | `Button` | variant: primary / secondary / ghost; size: sm / md / lg | Default, Hover, Focus, Disabled | Gradiente no primary não é suportado como variable — usar fill style `gradient/primary` |
| `Badge` | `Badge` | variant: brand / accent / muted / dark | Default apenas (sem interação) | Sempre uppercase, radius full, texto xs |
| `Card` | `Card` | glow: false / true | Default, Hover | Hover é sutil — documentar intenção em Notes, não replicar no Figma |
| `MetricCard` | `MetricCard` | — | Default, Hover | Valor usa gradient de texto — replicar com gradiente em fill de texto |
| `Navbar` | `Navbar` | layout: desktop / mobile | Default, Scrolled | Backdrop blur: anotar como intenção em Notes, não replicável no Figma |
| `Section` | `Section` | theme: dark / light | — | Usar como frame base para composição de seções da landing |
| `Container` | `Container` | wide: false / true | — | Usar como Auto Layout frame com max-width e padding definidos |

### Detalhamento por componente

#### Button

```
Props React          →  Variantes Figma
──────────────────────────────────────
variant="primary"    →  Variant=Primary
variant="secondary"  →  Variant=Secondary
variant="ghost"      →  Variant=Ghost
size="sm"            →  Size=Small
size="md"            →  Size=Medium
size="lg"            →  Size=Large
```

**Estados a criar:**
- Default
- Hover (redução de opacidade + glow leve — simular com opacidade)
- Focus (outline 2px nebulosa)
- Disabled (opacity 40%)

#### Badge

```
Props React          →  Variantes Figma
──────────────────────────────────────
variant="brand"      →  Variant=Brand
variant="accent"     →  Variant=Accent
variant="muted"      →  Variant=Muted
variant="dark"       →  Variant=Dark
```

#### Card

```
Props React          →  Variantes Figma
──────────────────────────────────────
glow={false}         →  Style=Default
glow={true}          →  Style=Glow
```

**Obs:** O slot `children` é livre — criar versões de exemplo com Badge + título + texto.

#### MetricCard

**Estrutura interna do componente:**
```
MetricCard
├── value  → texto grande, gradient fill
├── label  → texto médio, cintilante
└── description → texto pequeno, muted (opcional)
```

#### Navbar

**Estrutura interna:**
```
Navbar
├── Logo (placeholder quadrado + texto "InBot")
├── NavLinks (hidden em mobile)
└── CTA Button (primary/sm)
```

---

## Checklist — Montagem do Design System no Figma

### Etapa 1 — Configuração inicial do arquivo

- [ ] Criar o arquivo com nome `QA-Design` (já existe)
- [ ] Criar as 7 páginas na ordem definida
- [ ] Configurar grid padrão de 12 colunas em todos os frames principais

### Etapa 2 — Página 01: Brand Foundation

- [ ] Frame com paleta primitiva (5 cores com swatch + hex + nome)
- [ ] Frame com tokens semânticos (background, surface, primary, accent, text, border)
- [ ] Frame com gradientes aplicados (primary, aurora, deep, text)
- [ ] Frame com escala tipográfica renderizada (Display XL a XS)
- [ ] Frame com exemplo de seção escura e clara lado a lado

### Etapa 3 — Página 02: Design Tokens

- [ ] Criar variable collection "Colors" com grupos primitive/ e semantic/
- [ ] Criar todos os color tokens da tabela de mapeamento
- [ ] Criar text styles para todos os 10 níveis da escala tipográfica
  - [ ] Configurar Poppins como fonte principal
  - [ ] Documentar que Noopla é o display font pretendido (em Notes)
- [ ] Criar spacing frames visuais (régua de espaçamento)
- [ ] Criar radius frames visuais (comparação de 6 valores)
- [ ] Criar effect styles para as 5 sombras

### Etapa 4 — Página 03: Components

- [ ] Criar componente `Button`
  - [ ] Variante Primary (sm, md, lg)
  - [ ] Variante Secondary (md)
  - [ ] Variante Ghost (md)
  - [ ] Estado Hover em cada variante
  - [ ] Estado Focus em cada variante
  - [ ] Estado Disabled em cada variante
- [ ] Criar componente `Badge`
  - [ ] Variante Brand
  - [ ] Variante Accent
  - [ ] Variante Muted
  - [ ] Variante Dark
- [ ] Criar componente `Card`
  - [ ] Estilo Default (sem glow)
  - [ ] Estilo Glow
  - [ ] Exemplo com conteúdo interno (Badge + título + texto)
- [ ] Criar componente `MetricCard`
  - [ ] Com valor, label e description
  - [ ] Sem description (variante)
- [ ] Criar componente `Navbar`
  - [ ] Desktop
  - [ ] Mobile (menu colapsado)
- [ ] Criar frame `Section`
  - [ ] Tema Dark
  - [ ] Tema Light
- [ ] Criar frame `Container`
  - [ ] Max-width 1200px
  - [ ] Max-width 1400px (wide)

### Etapa 5 — Página 04: Landing Wireframe

- [ ] Frame wireframe para cada uma das 12 seções (Navbar a Footer)
- [ ] Usar apenas blocos cinzas e texto placeholder
- [ ] Anotar objetivo e mensagem principal de cada seção (baseado em landing-information-architecture.md)
- [ ] Montar o wireframe completo em scroll vertical (desktop)
- [ ] Montar versão mobile simplificada

### Etapa 6 — Página 05: Landing Visual Direction

- [ ] Frame de exploração visual do Hero (sem implementar)
- [ ] Frame de exploração de paleta e gradientes aplicados em layout
- [ ] Moodboard com referências visuais (prints de Sqala, Apple, Insany — apenas para uso interno)
- [ ] Exploração de card com glow em contexto de seção escura
- [ ] Exploração de tipografia Display em contexto real

### Etapa 7 — Página 06: Assets

- [ ] Placeholder para logotipo (aguardando SVG oficial)
- [ ] Placeholder para ícones de produto
- [ ] Favicon placeholder

### Etapa 8 — Página 07: Notes / Decisions

- [ ] Registrar decisão sobre Noopla (proprietária, aguardando autorização)
- [ ] Registrar decisão sobre gradientes (não replicáveis como variables)
- [ ] Registrar decisão sobre backdrop-blur da Navbar (apenas código)
- [ ] Registrar pendências de assets

---

## Checklist — Revisão de Alinhamento Figma ↔ Código

Executar antes de iniciar qualquer nova fase de implementação:

### Cores

- [ ] Cada color variable no Figma tem token correspondente em `tokens.css`?
- [ ] Os valores hex são idênticos?
- [ ] Tokens de opacidade (text-muted, border) estão usando opacidade de layer, não cor diferente?

### Tipografia

- [ ] Cada text style do Figma corresponde a um nível da escala em `tokens.css`?
- [ ] Os tamanhos em px são idênticos (72, 60, 48, 36, 30, 24, 18, 16, 14, 12)?
- [ ] Os pesos são idênticos (700, 600, 500, 400)?
- [ ] O line-height está configurado corretamente em cada style?

### Componentes

- [ ] Cada variante no Figma existe como prop no componente React?
- [ ] Não há variante no Figma sem equivalente no código?
- [ ] O padding interno de Card (24px) corresponde ao `--space-6`?
- [ ] O radius de Card (24px) corresponde ao `--radius-2xl`?
- [ ] A altura da Navbar (64px) é a mesma nos dois lugares?
- [ ] O Container max-width (1200px) é o mesmo?

### Espaçamento

- [ ] Gaps e paddings nos componentes Figma usam os spacing tokens?
- [ ] Padding vertical de Section (80px = `--space-20`) está correto?

### Nomes

- [ ] Nomes de componentes seguem a naming convention definida?
- [ ] Nomes de tokens usam a estrutura de pasta com `/` correto?

---

## Próximos Passos — Antes de Criar a Landing Visual

1. **Abrir o arquivo Figma** e criar as 7 páginas na estrutura definida
2. **Criar os color tokens** (Página 02) — começar pelos primitivos, depois os semânticos
3. **Criar os text styles** (Página 02) — Poppins nos 10 níveis
4. **Montar a Brand Foundation** (Página 01) usando os tokens criados
5. **Criar os 7 componentes base** (Página 03) com variantes e estados
6. **Wirefrear as 12 seções** (Página 04) antes de qualquer decisão visual
7. **Fazer a Visual Direction** (Página 05) com o design system aplicado
8. **Só então iniciar a Fase 3** (código da landing) com o design validado no Figma

> Não iniciar nenhuma seção da landing no código sem que ela esteja desenhada e aprovada no Figma primeiro.
