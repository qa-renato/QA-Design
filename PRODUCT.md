# Product

## Register

brand

## Users

**Perfil primário — CTO / TI:** Decisor ou influenciador técnico em operações de médio e grande porte. Precisa entender arquitetura, capacidade de integração, escala e governança. Lê o detalhe.

**Perfil secundário — Diretor / C-Level:** Responsável por resultado operacional e custo. Precisa entender impacto de negócio, controle e visibilidade. Lê o headline e a métrica.

**Contexto de uso:** Avaliação de fornecedor B2B, decisão de compra de infraestrutura conversacional. O usuário chega com ceticismo — já viu muita promessa genérica de chatbot. Precisa ser convencido por evidência, não por discurso.

## Product Purpose

A InBot é uma plataforma de infraestrutura conversacional que unifica dados, agentes, canais e jornadas em uma única operação inteligente.

Não é um chatbot. Não é automação genérica. É a camada de operação conversacional que empresas usam para escalar atendimento com consistência, governança e inteligência — como infraestrutura, não como improviso.

**Promessa central:** "Cada conversa, organizada. Cada canal, conectado. Cada jornada, controlada."

**O que sucesso parece:** Um gestor de TI ou operações chega à landing, entende em 30 segundos o que a InBot faz de diferente, confia o suficiente para pedir uma conversa com um especialista.

## Brand Personality

**Três palavras:** Infraestrutura. Precisão. Governança.

**Tom:** Preciso, tecnológico, confiante, executivo, direto. Afirma sem arrogância. Mostra sem proclamar. O produto fala por si — o texto organiza a leitura.

**Voz:** Fala a língua de quem opera e de quem decide simultaneamente. Cada frase funciona para o CTO (âncora técnica) e para o Diretor (valor de negócio).

## Anti-references

- Visual genérico de chatbot: balões de conversa animados, robôs sorridentes, mascotes
- Templates de SaaS genérico com cream/verde/azul padrão e ícones ilustrativos
- Imagens de banco com pessoas sorrindo em frente a notebooks
- Excesso de animação ou elementos decorativos sem propósito
- Linguagem de startup: "revolucionário", "disruptivo", "transformacional", "simples e fácil"
- Hero metric template: número grande + label pequeno + gradiente accent (clichê SaaS)
- Grids de cards idênticos com ícone + título + texto repetidos sem variação

## Design Principles

1. **Infraestrutura, não ornamento.** Cada elemento visual existe por uma razão operacional. O design comunica solidez, não animação.
2. **Mostre, não prometa.** O produto aparece antes do discurso. Dados, fluxos e interfaces falam mais que adjetivos.
3. **Uma mensagem por seção.** O usuário encontra uma revelação por vez ao rolar. Não tentar dizer tudo de uma vez.
4. **Hierarquia sem ruído.** O usuário sabe o que ler primeiro, segundo, terceiro — sem esforço.
5. **Confiança pelo acabamento.** Premium pela precisão, não pela decoração. Respiro como intenção, não desperdício.

## Accessibility & Inclusion

- **WCAG AA** como padrão mínimo: 4.5:1 para texto normal, 3:1 para texto grande
- `prefers-reduced-motion` respeitado em todas as animações (já implementado em EcosystemOrbit e AnimatedCTA)
- Semântica HTML correta: `nav`, `main`, `section`, `button` vs `a`
- `focus-visible` visível em todos os elementos interativos (outline Nebulosa, offset 3px)
- Não depender apenas de cor para transmitir informação
- ARIA labels em ícones sem texto visível
- Ordem de foco lógica no teclado
