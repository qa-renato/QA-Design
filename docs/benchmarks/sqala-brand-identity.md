# Benchmark Visual — Sqala Tech

> **Propósito**: Análise exclusivamente para inspiração de sofisticação visual, ritmo, hierarquia e padrões de UI.
> Nada desta análise deve ser copiado diretamente para a InBot.
> A identidade da InBot permanece soberana.

---

## 1. Resumo da Extração

- **Fonte**: `firecrawl_scrape` (formatos: `branding` + `markdown`)
- **URL**: https://www.sqala.tech/pt-BR
- **Data**: 2026-05-14
- **Confiança do scraper**: 90% (buttons, colors, overall)
- **Agência responsável pelo design**: Insany Design
- **Stack**: Next.js + Sanity CMS

---

## 2. Paleta Detectada

| Papel | Cor | Hex |
|-------|-----|-----|
| Primary | Azul puro (link/text) | `#0000EE` |
| Secondary | Cinza-quente | `#9D968E` |
| Accent / CTA / Link | Amarelo-dourado vibrante | `#FFCC00` |
| Background | Off-white suave | `#F7F7F7` |
| Text Primary | Quase-preto | `#111111` |
| Theme base | Preto (meta tag) | `#000000` |

**Observação crítica**: A cor de destaque da Sqala é o amarelo-ouro `#FFCC00`. É o elemento mais diferenciador e proprietário da identidade deles. Não deve ser usada na InBot.

---

## 3. Fontes Detectadas

| Família | Papel |
|---------|-------|
| **Outfit** | Fonte principal — headings e parágrafos |
| Times New Roman | Fallback de body stack (não intencional) |
| Arial | Fallback de sistema |

**Observações**:
- `Outfit` é uma sans-serif geométrica moderna, com personalidade tech limpa.
- A InBot usa família tipográfica própria; não substituir. Avaliar se o ritmo de tamanhos serve de referência.

---

## 4. Escala Tipográfica

| Elemento | Tamanho |
|----------|---------|
| H1 | 64px |
| H2 | 48px |
| Body | 16px |

**Observação**: H1 grande (64px) cria impacto imediato no hero. A InBot pode se beneficiar de um hero com headline acima de 56px para competir em presença visual.

---

## 5. Padrões de Espaçamento

- **Base unit**: 4px (grid de 4px)
- **Border radius global**: 20px (componentes em geral)
- **Botão primário**: 80px de raio (pill completamente arredondado)
- **Botão secundário**: 0px de raio (sharp, quadrado — contraste proposital)
- **Input**: 4px de raio (quase reto)

**Observação**: A Sqala usa contraste de forma intencional entre pill (CTA principal) e square (CTA secundário). É um padrão sofisticado de hierarquia visual por geometria.

---

## 6. Padrões de Botões

### Botão Primário (CTA principal)
- Shape: **Pill** (`border-radius: 80px`)
- Background: `#F7F7F7` (quase transparente no fundo claro)
- Texto: `#0000EE`
- Borda: `#FFCC00` (amarelo — o accent define o CTA)
- Exemplo de texto: "Falar com especialista"

### Botão Secundário
- Shape: **Square** (`border-radius: 0px`)
- Background: `#111111` (preto)
- Texto: `#FFCC00` (amarelo)
- Exemplo de texto: "Ver mais perguntas"

**Padrão detectado**: CTAs sempre carregam o accent color (amarelo) como borda ou texto. O primário é mais suave no fill, o secundário é mais contrastante.

---

## 7. Padrões de Cards

A Sqala não usa cards tradicionais. Em vez disso, usa:

- **Feature list** com ícone 20x20px + texto inline
- **Cards de produto** com ícone 32x32px e título em bold
- **Slides de dashboard** como prova visual de produto (screenshots fullwidth)
- **Cards de FAQ** como accordion com chevron colorido (amarelo)

**Padrão detectado**: Conteúdo estruturado em listas iconificadas, não em cards com borda. Sensação de leveza e modernidade.

---

## 8. Padrões de CTA

- **Eyebrow label** antes do H2: texto uppercase pequeno com ícone ou tag (`SOMOS A SQALA`, `nossos DIFERENCIAIS`)
- **CTA duplo** em seções de conversão: um principal (pill, accent) + um secundário (link ou outline)
- **CTA na navbar**: Login como link simples, menu hamburguer no mobile
- **CTA de seção final**: dois botões lado a lado — "Falar com especialista" + "Testar checkout Sqala"
- **CTA no footer FAQ**: "Quero conhecer" com ícone SVG inline

**Padrão detectado**: Toda seção terminal tem um CTA de conversão. Nunca deixam uma seção sem saída.

---

## 9. Uso de Contraste

- Contraste claro: background `#F7F7F7` com texto `#111111` — alto contraste WCAG AA
- Contraste escuro: background `#111111` com texto `#FFCC00` — alto contraste
- Accent `#FFCC00` sobre `#111111`: contraste >7:1 (WCAG AAA)
- Blur SVGs: camadas decorativas sem impacto em legibilidade

**Observação**: A Sqala usa dualidade claro/escuro em componentes individuais (botão escuro/amarelo ao lado de botão claro/amarelo), não como modo global de tema.

---

## 10. Ritmo Visual

1. **Hero** — máximo impacto (H1 grande + CTA único)
2. **Social proof inline** — marquee de features como confirmação imediata
3. **Problema/solução** — antes/depois com ícone disabled/enabled
4. **Produto** — tabs ou orbit animado com features detalhadas
5. **Prova visual** — slider de screenshots do produto real
6. **Credibilidade técnica** — seção de API/documentação
7. **Números** — métricas com contadores animados
8. **Urgência + CTA** — seção "Pronto para começar?"
9. **Relacionamento** — formulário de captura
10. **FAQ** — quebra de objeções
11. **Footer** — encerramento institucional

**Padrão detectado**: Ritmo de "aquecimento progressivo". A Sqala nunca pede conversão sem antes construir confiança.

---

## 11. Elementos Decorativos

- **Blur SVGs radiais** no background de seções (blur-hero, blur-product, blur-diffs)
- **Animated circles** no orbit de produto (3 círculos SVG em rotação)
- **Gradientes de blur** simulando luzes ambientes
- **SVG ornamentos de seção** (scalable.svg, numbers.svg, products.svg)

**Observação**: Os blurs criam profundidade sem peso visual. É o principal recurso estético da Sqala para dar "sofisticação tech" sem poluição.

---

## 12. O que PODE Inspirar a InBot

| Achado Sqala | Potencial de Inspiração para InBot |
|---|---|
| Blur radial como ornamento de fundo | InBot já usa algo similar; intensificar nos blurs azuis Aurora/Nebulosa |
| Eyebrow labels uppercase antes dos H2 | Adotar como padrão consistente em todas as seções |
| Hierarquia pill (primário) vs sharp (secundário) | AnimatedCTA já é pill; criar variante "sharp" para CTAs de apoio |
| Ritmo de 10–11 seções com aquecimento progressivo | Avaliar se a Landing V1 tem seções suficientes antes do CTA final |
| Feature marquee horizontal (scroll de badges) | Criar um "trust band" com features da InBot em scroll suave |
| CTA duplo nas seções terminais | Implementar par de CTAs em pelo menos 2 seções da Landing V1 |
| Slider de prova de produto | Screenshots do produto InBot em carousel |
| Seção de métricas animadas | InBot pode ter métricas de QA/automação com contadores |
| FAQ accordion | Reduz objeções; considerar para Landing V1 |
| Orbits/círculos animados decorativos | Adicionar elemento orbital sutil na seção de produto |

---

## 13. O que NÃO DEVE ser Copiado

| Elemento | Por quê não copiar |
|---|---|
| Cor accent `#FFCC00` | É a identidade proprietária da Sqala |
| Cor primária `#0000EE` | Conflita com o azul InBot e é fraco visualmente |
| Logotipo SVG | Propriedade intelectual da Sqala |
| Textos e headlines | Contexto de negócio completamente diferente |
| Layout de seções | Estrutura proprietária da Insany Design |
| Imagens de produto | Screenshots e assets da Sqala |
| Fonte `Outfit` | Pode colidir com a identidade tipográfica da InBot (verificar) |
| Tom de voz "Sqalar" | Neologismo de marca registrado da Sqala |
| Padrão de botão secondary `border-radius: 0px` | Muito agressivo para o posicionamento da InBot |

---

## 14. Adaptação Segura para InBot

> Esta seção transforma os achados da Sqala em recomendações compatíveis com a identidade da InBot.

### Paleta InBot (base inalterada)
- Azul Aurora `#0c0a3b`
- Azul Abismo `#023c8f`
- Azul Núcleo `#0065fe`
- Azul Nebulosa `#15b7fe`
- Branco Cintilante `#ebebed`

---

### 14.1 Blurs e Profundidade

**Sqala usa**: Blur SVGs radiais em laranja/amarelo para criar profundidade.

**Adaptar para InBot**:
```
background blur radial — Azul Nebulosa (#15b7fe) com opacity: 0.08–0.12
background blur radial — Azul Núcleo (#0065fe) com opacity: 0.06–0.10
posicionar em: hero (topo-direita), seção de produto (esquerda), CTA final (centro)
```

---

### 14.2 Eyebrow Labels

**Sqala usa**: `SOMOS A SQALA`, `nossos DIFERENCIAIS` — uppercase, pequeno, com ícone ou linha antes.

**Adaptar para InBot**:
```
"INBOT QA" / "POR QUE INBOT" / "RESULTADOS"
cor: Azul Nebulosa (#15b7fe)
font-size: 12px, letter-spacing: 0.1em, uppercase
adicionar dot ou linha antes: • INBOT QA
```

---

### 14.3 Botões — Hierarquia por Geometria

**Sqala usa**: Pill para primário, Square para secundário.

**Adaptar para InBot**:
```
CTA Primário (AnimatedCTA existente):
  - pill shape: border-radius: 9999px
  - background: Azul Núcleo (#0065fe) ou Nebulosa (#15b7fe)
  - cor de texto: Branco Cintilante (#ebebed)
  - hover: glow azul sutil

CTA Secundário (novo):
  - border-radius: 8px (não square zero, mas mais firme que o primário)
  - background: transparent
  - border: 1px solid Azul Nebulosa (#15b7fe)
  - cor de texto: Branco Cintilante (#ebebed)
  - hover: fill sutil com Azul Abismo
```

---

### 14.4 Feature Marquee / Trust Band

**Sqala usa**: Scroll horizontal de badges com ícone + texto.

**Adaptar para InBot**:
```
Criar <TrustBand> component com scroll infinito (CSS animation):
  badges: "CI/CD nativo • Zero falsos positivos • Relatórios em tempo real • Integração em 5 min • Suporte especializado"
  cor badge: background Azul Aurora escuro com borda Nebulosa sutil
  animação: translateX infinito, 30–40s de duração
```

---

### 14.5 CTA Duplo nas Seções Terminais

**Sqala usa**: Par de CTAs ao final de cada bloco de conversão.

**Adaptar para InBot**:
```
Estrutura padrão de CTA duplo:
  <AnimatedCTA> Começar Gratuitamente </AnimatedCTA>   ← primário, pill, Núcleo
  <LinkCTA> Ver Documentação → </LinkCTA>              ← secundário, underline/outline
```

---

### 14.6 Seção de Métricas

**Sqala usa**: Contadores animados com `+R$Xbi`, `+X%` — métricas de volume.

**Adaptar para InBot**:
```
Métricas de QA/automação com contadores:
  "+10.000 testes automatizados rodados"
  "98% de cobertura média nos projetos"
  "3x mais rápido que testes manuais"
  "< 2min para detectar regressões"
cor: Branco Cintilante com destaque Nebulosa no número
fundo: Azul Aurora (#0c0a3b) — seção escura para contraste
```

---

### 14.7 Ritmo de Seções — Checklist Landing V1

Verificar se a Landing V1 atual cobre este ritmo de aquecimento:

- [ ] Hero com H1 impactante (>56px) + CTA único claro
- [ ] Trust band / social proof imediato após o hero
- [ ] Problema/solução — "antes/depois" do mundo sem InBot
- [ ] Produto em detalhe — features com ícones
- [ ] Prova visual — screenshot ou demo do produto
- [ ] Credibilidade técnica (integrações, API, stack)
- [ ] Métricas animadas
- [ ] CTA de conversão forte com par de botões
- [ ] FAQ com 5–6 perguntas reais de objeção
- [ ] Footer limpo com links e social

---

## 15. Recomendações Concretas para Landing V1

### Prioridade Alta
1. **Eyebrow labels** — adicionar em todas as seções H2 que ainda não têm (deve ser padrão 100% das seções)
2. **Blur radial azul** — intensificar os blurs existentes na hero e criar um novo na seção de produto
3. **CTA duplo** — na hero e na seção final, sempre par (primário + secundário)
4. **H1 scale** — verificar se o hero está em ≥56px; se não, aumentar para competir em presença

### Prioridade Média
5. **Trust band / marquee** — criar componente de features em scroll horizontal após o hero
6. **Seção de métricas** — adicionar 3–4 números animados em fundo Aurora escuro
7. **FAQ section** — adicionar accordion com 5–6 perguntas de objeção real

### Prioridade Baixa
8. **Animated orbit** — elemento decorativo sutil na seção de produto
9. **CTA final duplo** — seção "Pronto para começar?" com par de botões antes do footer

---

## 16. O que a Sqala Faz Bem que a InBot Deve Aprender

1. **Nunca deixa uma seção sem saída** — toda seção tem CTA
2. **Eyebrow + H2 + subtítulo** é o padrão universal de seção — dá ritmo e identidade
3. **O accent color é implacável** — define hierarquia, foco e personalidade em todo o layout
4. **Blurs criam tech-feeling sem peso** — mais barato que animações complexas, mais sofisticado que gradientes chapados
5. **Prova antes da conversão** — números, screenshots e depoimentos chegam antes do CTA final

---

*Gerado em 2026-05-14 via Firecrawl MCP branding scrape. Uso restrito a benchmark interno da InBot.*
