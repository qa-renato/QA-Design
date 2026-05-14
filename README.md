# InBot Landing Page — Redesign

Projeto de redesign da landing page da InBot.
Status atual: **Fase 1 — Design System Base** (landing final ainda não implementada).

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
- [x] Preview do design system em `App.jsx`
- [x] Documentação completa em `/docs`
- [ ] Landing page final (Fase 3 — ainda não iniciada)
- [ ] Logotipo SVG oficial (aguardando asset)
- [ ] Fonte Noopla (aguardando autorização de uso)
- [ ] Métricas reais da InBot (aguardando dados)

---

## Próximos Passos

1. Validar visualmente o preview do design system (`npm run dev`)
2. Obter logotipo SVG oficial, ícones e imagens de produto
3. Confirmar métricas reais para a seção de prova de escala
4. Aprovar textos das seções antes de implementar
5. Iniciar Fase 3 — construção da landing completa
