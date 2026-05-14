# InBot Landing Page — Redesign

Projeto de redesign da landing page da InBot.
Status atual: **Fase 1 concluída + Landing V1 implementada** (branch `feature/landing-v1`).

---

## Stack

- [Vite](https://vitejs.dev/) — bundler e dev server
- [React 18](https://react.dev/) — UI
- [Tailwind CSS 3](https://tailwindcss.com/) — utility classes
- JavaScript (JSX) — sem TypeScript por ora
- CSS custom properties — tokens de design

---

## Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## Estrutura de Pastas

```
inbot-landing/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes de interface reutilizáveis
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Section.jsx
│   │   │   ├── MetricCard.jsx
│   │   │   └── Navbar.jsx
│   │   └── design-system/   # Componentes de preview do design system
│   │       ├── ColorSwatches.jsx
│   │       ├── TypographyScale.jsx
│   │       └── ComponentPreview.jsx
│   ├── data/
│   │   ├── brandTokens.js   # Paleta, tipografia, espaçamento documentados
│   │   └── navigation.js    # Links de navegação
│   ├── styles/
│   │   ├── tokens.css       # CSS custom properties (design tokens)
│   │   └── brand.css        # Estilos globais de marca
│   ├── App.jsx              # Preview do design system (não é a landing final)
│   ├── main.jsx
│   └── index.css
├── docs/
│   ├── brand-foundation.md          # Posicionamento, tom, identidade visual
│   ├── visual-benchmark.md          # Análise das referências (Sqala, Apple, Insany)
│   ├── design-system.md             # Sistema de design completo
│   ├── content-principles.md        # Princípios editoriais e de copy
│   ├── landing-information-architecture.md  # Arquitetura de seções da landing
│   ├── implementation-plan.md       # Plano de fases
│   └── figma-handoff-plan.md        # Integração Figma ↔ código (tokens, componentes, checklist)
├── assets/
│   └── README.md            # Instruções para assets (logotipo, ícones, imagens)
├── .gitignore
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Design System

### Cores da marca

| Nome | Hex | Tailwind |
|------|-----|---------|
| Azul Aurora | `#0c0a3b` | `bg-aurora` |
| Azul Abismo | `#023c8f` | `bg-abismo` |
| Azul Núcleo | `#0065fe` | `bg-nucleo` |
| Azul Nebulosa | `#15b7fe` | `bg-nebulosa` |
| Branco Cintilante | `#ebebed` | `bg-cintilante` |

### Tipografia

- **Títulos:** Noopla Bold (proprietária, sem autorização de uso ainda → fallback: Poppins Bold)
- **Corpo:** Poppins (Google Fonts)

---

## Documentação

| Documento | Conteúdo |
|-----------|----------|
| [brand-foundation.md](docs/brand-foundation.md) | Posicionamento, tom de voz, atributos e identidade visual |
| [visual-benchmark.md](docs/visual-benchmark.md) | Análise das referências Sqala, Apple e Insany |
| [design-system.md](docs/design-system.md) | Tokens, componentes, estados e acessibilidade |
| [content-principles.md](docs/content-principles.md) | Princípios editoriais e guia de copy |
| [landing-information-architecture.md](docs/landing-information-architecture.md) | Arquitetura das 12 seções da landing |
| [implementation-plan.md](docs/implementation-plan.md) | Plano de 6 fases com critérios de aceite |
| [figma-handoff-plan.md](docs/figma-handoff-plan.md) | Integração Figma ↔ código: tokens, componentes, naming e checklists |

---

## Referências Visuais

| Referência | Papel |
|------------|-------|
| [Sqala Tech](https://www.sqala.tech/pt-BR) | Principal — sofisticação visual e linguagem tecnológica |
| [Apple](https://www.apple.com/) | Clareza, respiro, hierarquia e acabamento |
| [Insany](https://insany.com.br/) | Presença digital e ritmo de seções |

Nenhuma referência deve ser copiada — apenas inspiração de princípios visuais.

---

## Status Atual

- [x] Projeto Vite + React inicializado
- [x] Tailwind configurado com paleta InBot
- [x] Design tokens (CSS custom properties)
- [x] Componentes base (Button, Badge, Card, MetricCard, Container, Section, Navbar)
- [x] Documentação completa em `/docs`
- [x] **Landing V1 implementada** (branch `feature/landing-v1`)
  - Header com scroll behavior
  - Hero com elemento orbital
  - Métricas (placeholders — aguardando dados reais)
  - Soluções por setor (7 cards) — posicionada antes da plataforma para ritmo L/D
  - Visão geral da plataforma (6 pilares)
  - Operação Conversacional (antes/depois)
  - Ecossistema Orbit (diagrama SVG)
  - Diferenciais (6 cards)
  - CTA intermediário (banda gradiente horizontal)
  - Cases (placeholders — aguardando aprovação)
  - Conteúdos (placeholders)
  - FAQ (acordeão acessível, 6 perguntas)
  - CTA Final
  - Footer completo
- [ ] Logotipo SVG oficial (aguardando asset)
- [ ] Fonte Noopla (aguardando autorização de uso)
- [ ] Métricas reais validadas (aguardando dados verificados)
- [ ] Cases reais aprovados pelos clientes

---

## Landing V1 — Componentes

```
src/components/landing/
├── Header.jsx              # Navegação com scroll behavior
├── Hero.jsx                # Headline + CTA + elemento orbital        [D]
├── Metrics.jsx             # Métricas (placeholders)                  [D]
├── Solutions.jsx           # 7 soluções por setor                     [L]
├── PlatformOverview.jsx    # 6 pilares da plataforma                  [D]
├── ConversationalOperation.jsx  # Antes/depois                        [D]
├── EcosystemOrbit.jsx      # Diagrama SVG de ecossistema              [D]
├── Differentials.jsx       # 6 diferenciais                           [D]
├── MidCTA.jsx              # Banda CTA intermediária (gradiente)      [G]
├── CasesPreview.jsx        # 3 cases (placeholders)                   [L]
├── ContentPreview.jsx      # 3 artigos (placeholders)                 [D]
├── FAQ.jsx                 # Acordeão acessível, 6 perguntas          [L]
├── FinalCTA.jsx            # CTA de conversão                         [D]
└── Footer.jsx              # Rodapé completo                          [D]

# Ritmo visual: D=escuro  L=claro  G=gradiente

src/data/landingContent.js  # Fonte de verdade do conteúdo
```

---

## Próximos Passos

1. Revisar Landing V1 com `npm run dev`
2. Fornecer métricas reais para substituir os placeholders
3. Aprovar cases antes de publicar
4. Obter logotipo SVG oficial e substituir o logotipo textual
5. Configurar Noopla Bold quando autorizada
6. Refinamento responsivo mobile (Fase 4)
7. Melhorias de média prioridade (benchmark Sqala): reformular Soluções por necessidade, adicionar sub-features nos pilares, elevar visual da seção Operação Conversacional
8. Merge da branch `feature/landing-v1` após aprovação
