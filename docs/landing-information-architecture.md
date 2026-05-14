# InBot Landing — Arquitetura de Informação

> Planejamento estrutural da landing page. **Ainda não implementada.**
> Este documento define o que cada seção comunica, por quê existe e como se conecta à próxima.

---

## Princípio de Arquitetura

A landing segue uma progressão narrativa em quatro atos:

1. **Identidade** — Quem é a InBot e qual a promessa
2. **Evidência** — Que escala, que produto, que operação
3. **Profundidade** — Como funciona, o que diferencia, quem usa
4. **Conversão** — Próxima etapa clara e sem atrito

---

## Mapa de Seções

### 00 — Header / Navbar

| | |
|---|---|
| **Objetivo** | Orientação e confiança imediata |
| **Mensagem principal** | Logo + navegação + CTA primário |
| **Conteúdo** | Logo InBot, links de seção, botão "Fale com um especialista" |
| **Componente** | `Navbar` — fixed, backdrop-blur, borda sutil |
| **Prioridade** | Crítico |

**Notas:** Sticky no topo. Deve desaparecer levemente no scroll e reaparecer. Links ancorados às seções. CTA sempre visível.

---

### 01 — Hero

| | |
|---|---|
| **Objetivo** | Declarar posição, criar impacto, capturar atenção |
| **Mensagem principal** | "Infraestrutura conversacional para operações que não podem falhar." |
| **Conteúdo** | Badge de contexto + headline display + subheadline + 2 CTAs (primário + secundário) + elemento visual (mockup ou abstrato gráfico) |
| **Componente** | Hero custom — fundo Aurora com glow radial |
| **Prioridade** | Crítico |

**Notas:** Sem carrossel. Sem vídeo autoplay. Um único foco visual. Headline máximo de 8 palavras. Badge de contexto como "Plataforma Conversacional B2B" para orientar o leitor antes do headline.

---

### 02 — Métricas / Prova de Escala

| | |
|---|---|
| **Objetivo** | Construir credibilidade imediata com números reais |
| **Mensagem principal** | A InBot opera em escala — não é promessa, é fato |
| **Conteúdo** | 4–6 MetricCards: interações/mês, empresas, uptime, canais integrados, anos de operação |
| **Componente** | Grid de `MetricCard` |
| **Prioridade** | Alto |

**Notas:** Somente métricas reais e verificáveis. Sem "mais de X clientes satisfeitos" sem dado concreto. Fundo levemente diferente do hero para criar separação visual.

---

### 03 — Plataforma (Visão Geral)

| | |
|---|---|
| **Objetivo** | Explicar o que é a InBot de forma visual e concisa |
| **Mensagem principal** | "Uma plataforma. Quatro pilares. Uma operação." |
| **Conteúdo** | Diagrama ou cards dos 4 pilares: Dados / Agentes / Canais / Jornadas |
| **Componente** | Grid de `Card` com ícone + título + descrição |
| **Prioridade** | Crítico |

**Notas:** Esta seção define o vocabulário da plataforma para o restante da landing. Cada pilar deve ter uma frase que explica o que resolve, não apenas o que é.

---

### 04 — Operação Conversacional

| | |
|---|---|
| **Objetivo** | Aprofundar o conceito de "infraestrutura conversacional" com contexto operacional |
| **Mensagem principal** | "Cada conversa é uma operação. A InBot garante que ela funcione." |
| **Conteúdo** | Mockup de interface ou diagrama de fluxo + texto explicativo lateral |
| **Componente** | Layout split (visual + texto) — seção clara ou escura alternada |
| **Prioridade** | Alto |

**Notas:** Mostrar o produto antes de prometer. Se houver screenshot real, usar aqui. Se não, usar representação abstrata que comunique operação/controle.

---

### 05 — Dados, Agentes, Canais e Jornadas

| | |
|---|---|
| **Objetivo** | Detalhar cada pilar com evidência funcional |
| **Mensagem principal** | Cada pilar resolve um problema real de operação |
| **Conteúdo** | 4 blocos: um para cada pilar com feature list ou destaque visual |
| **Componente** | Tabs ou cards expandidos ou grid 2×2 |
| **Prioridade** | Alto |

**Notas:** Considerar uma seção com tabs (Dados / Agentes / Canais / Jornadas) para economizar espaço vertical e criar interação. Cada tab mostra contexto do pilar.

---

### 06 — Soluções por Caso de Uso

| | |
|---|---|
| **Objetivo** | Conectar a plataforma a contextos reais de uso |
| **Mensagem principal** | "A operação de quem faz acontecer." |
| **Conteúdo** | 3–4 cards de segmento/caso: atendimento, vendas, suporte, onboarding |
| **Componente** | `Card` com badge de segmento |
| **Prioridade** | Médio |

**Notas:** Permite que o visitante se reconheça em um caso específico. Não precisa cobrir todos os casos — 3–4 bem escolhidos são suficientes.

---

### 07 — Diferenciais

| | |
|---|---|
| **Objetivo** | Comunicar por que a InBot é a escolha correta (sem atacar concorrentes) |
| **Mensagem principal** | "Não é mais um chatbot. É operação com controle." |
| **Conteúdo** | Lista de 4–6 diferenciais com ícone, título e frase de explicação |
| **Componente** | Grid de `Card` ou lista estilizada |
| **Prioridade** | Médio |

**Notas:** Foco em: governança, escala, multicanal, dados, agentes inteligentes, integrações. Evitar comparação direta com concorrentes nomeados.

---

### 08 — Cases / Prova Social

| | |
|---|---|
| **Objetivo** | Legitimar a plataforma com evidência de uso real |
| **Mensagem principal** | "Operações reais. Resultados mensuráveis." |
| **Conteúdo** | 2–3 cases com logo, resultado quantificado e depoimento ou contexto |
| **Componente** | Cards de case com métrica em destaque |
| **Prioridade** | Alto |

**Notas:** Se não houver cases públicos ainda, pode usar uma seção com logos de clientes como prova de presença de mercado.

---

### 09 — Conteúdo / Insights

| | |
|---|---|
| **Objetivo** | Posicionar a InBot como referência de conhecimento na área |
| **Mensagem principal** | "Operação conversacional: aprenda com quem opera." |
| **Conteúdo** | 3 artigos/posts recentes — título, categoria, data |
| **Componente** | Card de conteúdo simplificado |
| **Prioridade** | Baixo |

**Notas:** Opcional para Fase 1 da landing. Relevante para SEO e posicionamento de autoridade.

---

### 10 — CTA Final

| | |
|---|---|
| **Objetivo** | Converter quem chegou até aqui |
| **Mensagem principal** | "Pronto para estruturar sua operação conversacional?" |
| **Conteúdo** | Headline forte + subtext + formulário simples ou botão de contato |
| **Componente** | Seção de conversão com fundo gradiente |
| **Prioridade** | Crítico |

**Notas:** Não deve ser um formulário longo. CTA direto para contato ou demo. O usuário já foi convencido ao longo da página — facilitar a ação.

---

### 11 — Footer

| | |
|---|---|
| **Objetivo** | Navegação secundária + informação institucional + credibilidade |
| **Mensagem principal** | — |
| **Conteúdo** | Logo + links de seção + links legais + contato + redes sociais |
| **Componente** | Footer com grid de colunas |
| **Prioridade** | Necessário |

---

## Fluxo Narrativo Completo

```
Quem é a InBot?   → Hero
Ela funciona?     → Métricas
O que ela faz?    → Plataforma + Operação Conversacional
Como ela faz?     → Dados/Agentes/Canais/Jornadas
Para quem?        → Soluções
Por que ela?      → Diferenciais
Quem já usa?      → Cases
O que posso aprender? → Conteúdo
Quero conversar   → CTA Final
```

---

## Responsividade Planejada

| Breakpoint | Adaptações principais |
|------------|----------------------|
| Mobile (< 640px) | 1 coluna, hero sem elemento lateral, nav em menu hambúrguer |
| Tablet (640–1024px) | 2 colunas em grids, hero centralizado |
| Desktop (≥ 1024px) | Layout completo, hero split, grids 3–4 colunas |
