# InBot — Design System

> Documento de referência para o sistema de design da landing page InBot.
> Versão: 1.0 — Fase 1 (Design System Base)

---

## Princípios Visuais

1. **Clareza acima de complexidade.** Cada elemento existe por uma razão.
2. **Hierarquia rigorosa.** O usuário sabe o que ler primeiro, segundo, terceiro.
3. **Respiro como intenção.** Espaço vazio não é desperdício — é ritmo.
4. **Cor com propósito.** Cada token de cor tem semântica definida.
5. **Sofisticação sem ostentação.** Premium pela precisão, não pela decoração.
6. **Consistência sistemática.** Tokens usados, não valores arbitrários.
7. **Acessibilidade embutida.** Contraste, foco e semântica desde o início.

---

## Paleta de Cores

### Primitivas

| Nome | Hex | Uso primário |
|------|-----|--------------|
| Azul Aurora | `#0c0a3b` | Background principal |
| Azul Abismo | `#023c8f` | Superfícies médias, fundos de seção |
| Azul Núcleo | `#0065fe` | Ação primária, gradient start |
| Azul Nebulosa | `#15b7fe` | Accent, destaque, gradient end |
| Branco Cintilante | `#ebebed` | Texto sobre fundo escuro |

### Tokens Semânticos

```css
--color-background:      #0c0a3b    /* Aurora */
--color-surface:         #12103d    /* Levemente mais claro que aurora */
--color-surface-raised:  #181660    /* Cards, modais */
--color-surface-light:   #f5f7ff    /* Seções claras */

--color-primary:         #0065fe    /* Núcleo */
--color-primary-strong:  #023c8f    /* Abismo */
--color-accent:          #15b7fe    /* Nebulosa */

--color-text:            #ebebed    /* Cintilante */
--color-text-muted:      rgba(235,235,237,0.55)
--color-text-subtle:     rgba(235,235,237,0.35)

--color-border:          rgba(21,183,254,0.15)
--color-border-subtle:   rgba(235,235,237,0.08)
--color-border-strong:   rgba(21,183,254,0.4)
```

### Gradientes

| Nome | Definição | Uso |
|------|-----------|-----|
| Primary | Núcleo → Nebulosa (135°) | Botão, texto de destaque, ícones |
| Aurora | Aurora → Abismo (180°) | Background de seção alternada |
| Deep | Aurora → Abismo → Núcleo | Hero background |
| Nebula | Radial Nebulosa → transparente | Glow decorativo |
| Text | Cintilante → Nebulosa | Headline de destaque máximo |

---

## Tipografia

### Famílias

| Família | Uso | Fallback |
|---------|-----|---------|
| Noopla Bold | Títulos (Display, H1, H2) | Poppins Bold |
| Poppins | Corpo, subtítulos, UI | system-ui, sans-serif |

> **Noopla** é fonte proprietária. Não baixar nem commitar sem autorização. Usar `font-display: swap` e declarar o fallback Poppins no CSS.

### Escala Tipográfica

| Token | Tamanho | Peso | Uso |
|-------|---------|------|-----|
| Display XL | 72px / 4.5rem | 700 | Hero principal, impacto máximo |
| Display L | 60px / 3.75rem | 700 | Hero alternativo |
| H1 | 48px / 3rem | 700 | Títulos de seção principais |
| H2 | 36px / 2.25rem | 600 | Títulos de subsecção |
| H3 | 30px / 1.875rem | 600 | Subtítulos de seção |
| H4 | 24px / 1.5rem | 600 | Títulos de card |
| Body L | 18px / 1.125rem | 400 | Texto de destaque, lead |
| Body | 16px / 1rem | 400 | Corpo padrão |
| Small | 14px / 0.875rem | 400 | Textos auxiliares |
| XS | 12px / 0.75rem | 500 | Labels, badges, captions |

### Line Height

| Contexto | Valor |
|----------|-------|
| Títulos (Display/H1/H2) | 1.1–1.15 |
| Subtítulos (H3/H4) | 1.3 |
| Corpo | 1.5–1.65 |
| Labels | 1.2 |

### Letter Spacing

| Contexto | Valor |
|----------|-------|
| Display e H1 | -0.03em (tight) |
| H2/H3 | -0.02em |
| Corpo | 0 (normal) |
| Labels/badges | 0.05–0.1em (wide) |

---

## Espaçamento

Escala de base 4px:

| Token | Valor | Uso |
|-------|-------|-----|
| space-1 | 4px | Gap mínimo |
| space-2 | 8px | Gaps internos pequenos |
| space-3 | 12px | Gaps internos médios |
| space-4 | 16px | Padding padrão de elemento |
| space-6 | 24px | Padding de card |
| space-8 | 32px | Gap entre grupos |
| space-12 | 48px | Padding de seção pequena |
| space-16 | 64px | Espaço entre blocos |
| space-20 | 80px | Padding vertical de seção |
| space-24 | 96px | Padding de seção principal |
| space-32 | 128px | Seção hero/especial |

---

## Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| radius-sm | 4px | Tags, chips pequenos |
| radius-md | 8px | Inputs, elementos UI |
| radius-lg | 12px | Botões pequenos |
| radius-xl | 16px | Cards pequenos |
| radius-2xl | 24px | Cards principais |
| radius-full | 9999px | Badges, pills, avatares |

---

## Sombras

| Token | Definição | Uso |
|-------|-----------|-----|
| shadow-sm | `0 1px 3px rgba(0,0,0,0.3)` | Elementos flutuantes simples |
| shadow-md | `0 4px 16px rgba(0,0,0,0.4)` | Cards elevados |
| shadow-lg | `0 8px 32px rgba(0,0,0,0.5)` | Modais, dropdowns |
| shadow-glow | `0 0 40px rgba(21,183,254,0.15)` | Glow suave em cards especiais |
| shadow-glow-strong | `0 0 60px rgba(0,101,254,0.25)` | Glow forte em elementos de destaque |

---

## Bordas

- Padrão: `1px solid rgba(21,183,254,0.12)` — borda sutil azul
- Ativa/hover: `1px solid rgba(21,183,254,0.35)` — borda mais visível
- Sutil: `1px solid rgba(235,235,237,0.08)` — separadores internos
- Forte: `1px solid rgba(21,183,254,0.4)` — destaque, botão secundário

---

## Grid e Layout

| Configuração | Valor |
|-------------|-------|
| Container padrão | max-width: 1200px |
| Container wide | max-width: 1400px |
| Padding horizontal | 24px (mobile) / 32px (desktop) |
| Grid principal | 12 colunas |
| Gap de grid | 24px |
| Breakpoints | sm: 640px / md: 768px / lg: 1024px / xl: 1280px |

---

## Componentes Base

### Button

**Variantes:**
- `primary` — gradiente Núcleo → Nebulosa, texto branco
- `secondary` — transparente com borda Nebulosa
- `ghost` — apenas texto Nebulosa

**Tamanhos:** `sm` (px-4 py-2) / `md` (px-6 py-3) / `lg` (px-8 py-4)

**Estados:**
- Hover: opacidade 90% + glow suave
- Active: scale 0.98
- Focus: outline Nebulosa, offset 3px
- Disabled: opacity 40%, cursor not-allowed

### Badge

**Variantes:** `brand` / `accent` / `muted` / `dark`

Sempre: `border-radius: full` / `font-size: xs` / `uppercase` / `tracking-wide`

### Card

- Background: `#12103d` (surface)
- Borda: `rgba(21,183,254,0.12)`
- Radius: 24px (radius-2xl)
- Padding: 24px
- Hover: sombra mais pronunciada ou glow (variante `glow`)

### MetricCard

- Valor em gradient Núcleo → Nebulosa (text gradient)
- Label em Cintilante bold
- Descrição em texto muted
- Hover: border mais forte + glow suave

### Navbar

- Fundo: `rgba(12,10,59,0.85)` com `backdrop-blur`
- Borda inferior sutil
- Altura: 64px
- Logo + links centrais + CTA à direita
- Sticky / fixed no topo

### Container

- `max-width: 1200px` (padrão) ou `1400px` (wide)
- `padding-x: 24px` mobile / `32px` desktop
- Sempre centralizado com `margin: 0 auto`

### Section

- Variante `dark`: fundo Aurora, texto Cintilante
- Variante `light`: fundo `#f5f7ff`, texto Aurora
- Padding vertical padrão: `80px` (mobile) / `112px` (desktop)

---

## Estados de Interação

| Estado | Tratamento |
|--------|------------|
| Hover | Transição 200ms ease, leve glow ou mudança de border |
| Focus-visible | Outline 2px Nebulosa, offset 3px |
| Active | Scale 0.98, transição 150ms |
| Disabled | Opacity 40%, cursor not-allowed |
| Loading | Spinner ou skeleton em cor muted |

---

## Acessibilidade

- Contraste mínimo WCAG AA: 4.5:1 para texto normal, 3:1 para texto grande
- Todos os elementos interativos com `focus-visible` visível
- Semântica HTML correta (nav, main, section, article, button vs. a)
- Imagens com `alt` descritivo
- Não depender apenas de cor para transmitir informação
- ARIA labels em ícones sem texto visível
- Ordem de foco lógica no teclado

---

## Convenções de Código

- Componentes em PascalCase: `Button.jsx`, `MetricCard.jsx`
- Props com valores padrão explícitos
- CSS custom properties via `var(--token)` — nunca hardcode de cor
- Classes Tailwind preferidas para layout; `style={}` apenas para tokens CSS
- Sem `inline-style` para cores fora de contexto dinâmico
- Componentes pequenos e focados — uma responsabilidade cada
