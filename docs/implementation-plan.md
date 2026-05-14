# InBot Landing — Plano de Implementação

> Roteiro técnico por fase para a construção da landing page da InBot.

---

## Visão Geral das Fases

| Fase | Objetivo | Status |
|------|----------|--------|
| Fase 1 | Base técnica e design system | ✅ Em andamento |
| Fase 2 | Preview visual do design system | ✅ Concluído (junto à Fase 1) |
| Fase 3 | Primeira versão da landing | ⏳ Pendente |
| Fase 4 | Refinamento responsivo | ⏳ Pendente |
| Fase 5 | Performance e acessibilidade | ⏳ Pendente |
| Fase 6 | Deploy | ⏳ Pendente |

---

## Fase 1 — Base Técnica e Design System

**Objetivo:** Criar a fundação técnica e visual do projeto.

### Entregas

- [x] Projeto Vite + React inicializado
- [x] Tailwind CSS configurado com paleta da InBot
- [x] CSS custom properties (tokens de design)
- [x] Componentes base: Button, Badge, Card, MetricCard, Container, Section, Navbar
- [x] Componentes de design system: ColorSwatches, TypographyScale, ComponentPreview
- [x] Dados de marca: brandTokens.js, navigation.js
- [x] Documentação: brand-foundation.md, visual-benchmark.md, design-system.md, content-principles.md, landing-information-architecture.md, implementation-plan.md
- [x] .gitignore e README.md

### Critério de aceite

- `npm run build` passa sem erros
- Preview de design system acessível via `npm run dev`
- Landing final não iniciada

---

## Fase 2 — Preview Visual

**Objetivo:** Validar a linguagem visual antes de construir a landing.

### Entregas

- [x] App.jsx com página de preview do design system
- [x] Paleta de cores renderizada
- [x] Escala tipográfica visível
- [x] Componentes base renderizados com dados de exemplo
- [x] Seção em fundo claro e escuro
- [x] Navbar funcional com links

### Critério de aceite

- Visual consistente com a identidade da InBot
- Sem erros no console
- Fontes carregando (Poppins via Google Fonts, Noopla como fallback)

---

## Fase 3 — Primeira Versão da Landing

**Objetivo:** Construir todas as seções da landing conforme a arquitetura planejada.

### Entregas previstas

- [ ] Componente Hero com headline, subtext, CTAs e elemento visual
- [ ] Seção de Métricas com MetricCards reais
- [ ] Seção Plataforma — 4 pilares
- [ ] Seção Operação Conversacional — split layout
- [ ] Seção Dados/Agentes/Canais/Jornadas — tabs ou grid
- [ ] Seção Soluções — cards por caso de uso
- [ ] Seção Diferenciais
- [ ] Seção Cases (ou logos de clientes como placeholder)
- [ ] Seção Conteúdo (opcional)
- [ ] Seção CTA Final
- [ ] Footer completo

### Prerequisitos

- Aprovação do preview de design system (Fase 2)
- Definição de conteúdo real (textos, métricas, logos)
- Assets finais: logotipo SVG, ícones, imagens de produto

### Critério de aceite

- Todas as seções implementadas
- Conteúdo real (não lorem ipsum)
- Navegação por âncora funcionando
- Mobile básico funcional

---

## Fase 4 — Refinamento Responsivo

**Objetivo:** Garantir experiência de qualidade em todos os tamanhos de tela.

### Entregas previstas

- [ ] Mobile (< 640px): hero, navegação hambúrguer, grids 1 coluna
- [ ] Tablet (640–1024px): adaptações de grid e tipografia
- [ ] Desktop (≥ 1024px): layout completo
- [ ] Testes em dispositivos reais ou emuladores

### Critério de aceite

- Nenhum overflow horizontal em nenhum breakpoint
- Tipografia legível em todos os tamanhos
- CTAs acessíveis no mobile (área de toque mínima 44px)

---

## Fase 5 — Performance e Acessibilidade

**Objetivo:** Garantir qualidade técnica da entrega.

### Entregas previstas

- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 90
- [ ] Imagens otimizadas (WebP, lazy loading)
- [ ] Fonte com `font-display: swap`
- [ ] Todos os elementos interativos com `focus-visible`
- [ ] Alt text em todas as imagens
- [ ] Semântica HTML correta (nav, main, section, article)
- [ ] Meta tags: title, description, og:image
- [ ] Favicon final

---

## Fase 6 — Deploy

**Objetivo:** Publicar a landing em produção.

### Decisões pendentes

- [ ] Definir plataforma de deploy (Vercel, Netlify, servidor próprio)
- [ ] Definir domínio ou subdomínio
- [ ] Configurar CI/CD se necessário
- [ ] Definir estratégia de analytics (GA4, Plausible, outro)

### Critério de aceite

- Build de produção funcionando
- HTTPS ativo
- Performance validada em produção

---

## Dependências Críticas

| Dependência | Status | Impacto se ausente |
|-------------|--------|--------------------|
| Logotipo InBot (SVG) | Pendente | Usar placeholder até ter o asset |
| Fonte Noopla | Pendente (proprietária) | Usar Poppins Bold como fallback |
| Métricas reais da InBot | Pendente | Não publicar sem dados verificados |
| Textos de seção aprovados | Pendente | Bloqueia Fase 3 |
| Assets de produto (screenshot/mockup) | Pendente | Seção de produto fica com placeholder |
| Cases/logos de clientes | Pendente | Seção de cases com placeholder |

---

## Stack Técnica Final

| Camada | Tecnologia |
|--------|------------|
| Framework | Vite + React 18 |
| Estilo | Tailwind CSS 3 + CSS custom properties |
| Linguagem | JavaScript (JSX) |
| Fontes | Poppins (Google Fonts) + Noopla (local, quando disponível) |
| Deploy | A definir |
| Analytics | A definir |
