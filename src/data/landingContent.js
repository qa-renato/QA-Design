// ============================================================
// InBot Landing — Conteúdo Central
// Fonte de verdade para textos de todas as seções.
// IMPORTANTE: validar métricas reais antes da publicação.
// ============================================================

export const nav = {
  brand: 'InBot',
  links: [
    { label: 'Soluções',   href: '#solucoes' },
    { label: 'Cases',      href: '#cases' },
    { label: 'Tecnologia', href: '#plataforma' },  // provisório — âncora futura: #tecnologia
    { label: 'Vantagens',  href: '#diferenciais' },
    { label: 'Sobre',      href: '#plataforma' },  // provisório — âncora futura: #sobre
    { label: 'Blog',       href: '#conteudo' },
  ],
  actions: [
    { label: 'Contato', href: '#contato', primary: true },
    { label: 'Login',   href: '#',        primary: false },
  ],
}

export const hero = {
  badge: 'Infraestrutura Conversacional B2B',
  headline: 'InBot é a infraestrutura conversacional para operações em escala',
  subtext:
    'Organize dados, agentes, canais e jornadas em uma única operação conversacional, com governança, inteligência e consistência.',
  ctas: [
    { label: 'Falar com a InBot', href: '#contato', variant: 'primary' },
    { label: 'Conhecer a plataforma', href: '#plataforma', variant: 'secondary' },
  ],
}

// VALIDAR MÉTRICAS REAIS ANTES DA PUBLICAÇÃO
export const metrics = [
  { value: '—', label: 'ROI médio',            description: 'Retorno sobre investimento em operações conversacionais' },
  { value: '—', label: 'Retenção',             description: 'Taxa de retenção de usuários em jornadas automatizadas' },
  { value: '—', label: 'Conversão',            description: 'Incremento em conversão via canais conversacionais' },
  { value: '—', label: 'Redução no TMA',       description: 'Tempo médio de atendimento com agentes inteligentes' },
  { value: '—', label: 'NPS operacional',      description: 'Satisfação medida em operações gerenciadas pela InBot' },
]

export const platform = {
  badge: 'Plataforma',
  headline: 'Uma plataforma. Cada pilar em seu lugar.',
  subtext:
    'A InBot centraliza o que antes estava disperso: dados, agentes, canais, jornadas, relatórios e governança em uma única operação coerente.',
  pillars: [
    {
      icon: '◈',
      title: 'Dados',
      description:
        'Visibilidade completa sobre cada interação. Logs, histórico e análise em tempo real para decisões com embasamento.',
    },
    {
      icon: '◎',
      title: 'Agentes',
      description:
        'Agentes inteligentes orquestrados com regras de negócio. Cada resposta tem contexto, escopo e governança.',
    },
    {
      icon: '⬡',
      title: 'Canais',
      description:
        'WhatsApp, e-mail, voz, portais e mais — todos conectados em uma operação única, coerente e auditável.',
    },
    {
      icon: '◷',
      title: 'Jornadas',
      description:
        'Fluxos conversacionais planejados e monitorados do primeiro contato à resolução, sem gaps operacionais.',
    },
    {
      icon: '▣',
      title: 'Relatórios',
      description:
        'Dashboards e indicadores que mostram o que está funcionando, o que precisa de ajuste e onde há risco.',
    },
    {
      icon: '◉',
      title: 'Governança',
      description:
        'Regras, permissões, auditoria e controle. A operação escala sem perder consistência nem rastreabilidade.',
    },
  ],
}

export const operation = {
  badge: 'Operação Conversacional',
  headline: 'Do caos de canais à operação centralizada',
  before: {
    title: 'Antes da InBot',
    items: [
      'Canais soltos sem visibilidade unificada',
      'Automações isoladas que não se comunicam',
      'Dados dispersos em ferramentas diferentes',
      'Jornadas sem controle de ponta a ponta',
      'Retrabalho e inconsistência entre equipes',
    ],
  },
  after: {
    title: 'Com a InBot',
    items: [
      'Operação conversacional centralizada',
      'Agentes orquestrados com governança',
      'Dados organizados e visíveis em tempo real',
      'Jornadas planejadas e monitoradas',
      'Consistência e escala com rastreabilidade',
    ],
  },
}

export const ecosystem = {
  badge: 'Ecossistema',
  headline: 'Tudo orbita um núcleo único de operação',
  subtext:
    'Dados, agentes, canais e jornadas convergem para um único ponto de controle. A InBot é o núcleo que mantém a operação coesa.',
  nodes: ['Dados', 'Agentes', 'Canais', 'Jornadas', 'Relatórios', 'Governança'],
}

export const solutions = {
  badge: 'Soluções',
  headline: 'Operação conversacional para cada contexto',
  subtext: 'A InBot opera em setores que exigem precisão, escala e consistência.',
  items: [
    {
      title: 'Atendimento',
      description:
        'Centralize o atendimento ao cliente em todos os canais com agentes que entendem contexto e operam com governança.',
    },
    {
      title: 'RH',
      description:
        'Jornadas de onboarding, dúvidas frequentes, gestão de benefícios e comunicação interna em uma operação conversacional.',
    },
    {
      title: 'Corporativo',
      description:
        'Comunicação interna, suporte a times e automação de processos corporativos com rastreabilidade total.',
    },
    {
      title: 'Cobranças',
      description:
        'Fluxos de cobrança conversacional com abordagem contextual, réguas automáticas e controle de resultado.',
    },
    {
      title: 'Prefeituras',
      description:
        'Atendimento ao cidadão em escala, com múltiplos canais, governança e visibilidade para gestão pública.',
    },
    {
      title: 'Consultórios',
      description:
        'Agendamento, confirmação, pré-atendimento e pós-consulta em fluxos conversacionais integrados.',
    },
    {
      title: 'Assistentes Virtuais',
      description:
        'Personagens e assistentes com identidade própria, comportamento curado e operação monitorada.',
    },
  ],
}

export const differentials = {
  badge: 'Diferenciais',
  headline: 'Infraestrutura que sustenta operações de verdade',
  subtext:
    'Não é promessa de feature. É a estrutura que operações em escala precisam para funcionar com consistência.',
  items: [
    {
      icon: '◈',
      title: 'IA generativa com curadoria',
      description:
        'LLMs orquestrados com regras de negócio, limites definidos e supervisão. IA que opera dentro do seu contexto.',
    },
    {
      icon: '▣',
      title: 'BI e inteligência de dados',
      description:
        'Dashboards, relatórios e indicadores que transformam conversas em dados acionáveis para decisão.',
    },
    {
      icon: '◉',
      title: 'Governança nativa',
      description:
        'Permissões, auditoria, histórico de decisão e conformidade embutidos — não adicionados depois.',
    },
    {
      icon: '⬡',
      title: 'Integração multicanal',
      description:
        'WhatsApp, e-mail, voz, portais e APIs conectados em uma única camada de operação coerente.',
    },
    {
      icon: '◷',
      title: 'Escalabilidade operacional',
      description:
        'Volume cresce, consistência permanece. Infraestrutura projetada para operações de missão crítica.',
    },
    {
      icon: '◎',
      title: 'Metodologia InBot',
      description:
        'Estrutura de implementação, onboarding e evolução contínua para garantir resultado real, não só entrega técnica.',
    },
  ],
}

export const cases = {
  badge: 'Cases',
  headline: 'Operações conversacionais em produção',
  subtext: 'Empresas que estruturaram sua operação conversacional com a InBot.',
  items: [
    {
      tag: 'Atendimento',
      title: 'Operação conversacional em escala',
      description: 'Case em validação — resultados serão publicados após aprovação do cliente.',
      metric: '—',
      metricLabel: 'Em validação',
    },
    {
      tag: 'RH',
      title: 'Jornada de onboarding automatizada',
      description: 'Case em validação — resultados serão publicados após aprovação do cliente.',
      metric: '—',
      metricLabel: 'Em validação',
    },
    {
      tag: 'Cobrança',
      title: 'Régua de cobrança conversacional',
      description: 'Case em validação — resultados serão publicados após aprovação do cliente.',
      metric: '—',
      metricLabel: 'Em validação',
    },
  ],
}

export const content = {
  badge: 'Conteúdo',
  headline: 'Operação conversacional: aprenda com quem opera',
  subtext: 'Conteúdo técnico e estratégico para quem decide e quem executa.',
  items: [
    {
      tag: 'Estratégia',
      title: 'O que é infraestrutura conversacional e por que sua empresa precisa',
      date: 'Em breve',
    },
    {
      tag: 'Produto',
      title: 'Como estruturar agentes com governança em operações de grande porte',
      date: 'Em breve',
    },
    {
      tag: 'Dados',
      title: 'Da conversa ao dado: como transformar interações em inteligência operacional',
      date: 'Em breve',
    },
  ],
}

export const finalCTA = {
  headline: 'Pronto para organizar sua operação conversacional?',
  subtext:
    'Fale com um especialista da InBot e entenda como estruturar dados, agentes, canais e jornadas em uma operação coesa.',
  cta: { label: 'Falar com a InBot', href: '#contato' },
}

export const midCTA = {
  headline: 'Sua operação conversacional já pode funcionar como infraestrutura.',
  subtext:
    'Conecte canais, organize dados e dê aos times uma base única para operar conversas com inteligência e governança.',
  cta: { label: 'Falar com a InBot', href: '#contato' },
}

export const faq = {
  badge: 'Dúvidas frequentes',
  headline: 'Perguntas que todo decisor faz',
  items: [
    {
      question: 'A InBot substitui meu atendimento humano?',
      answer:
        'Não. A InBot é infraestrutura conversacional — ela organiza, orquestra e escala a operação, mas o nível de automação e o papel das equipes humanas é definido junto ao cliente. A maioria das operações combina agentes inteligentes com intervenção humana nos momentos certos.',
    },
    {
      question: 'Quais canais a InBot pode integrar?',
      answer:
        'A plataforma suporta integração com WhatsApp, e-mail, voz e portais web. A disponibilidade de cada canal depende da configuração da operação e dos requisitos técnicos do ambiente do cliente. Os detalhes são mapeados durante o processo de implantação.',
    },
    {
      question: 'A plataforma funciona com dados e bases internas?',
      answer:
        'Sim. A InBot foi projetada para operar conectada a bases de dados, CRMs, ERPs e sistemas legados do cliente. A integração é planejada caso a caso, respeitando a arquitetura e as políticas de segurança de cada organização.',
    },
    {
      question: 'Como a InBot garante governança e consistência?',
      answer:
        'Governança é nativa da plataforma — não um add-on. Isso inclui regras de negócio configuráveis, logs de interação, auditoria de decisões dos agentes e controle de permissões por perfil. A operação fica rastreável do início ao fim.',
    },
    {
      question: 'A InBot usa IA generativa?',
      answer:
        'Sim, com curadoria. A plataforma permite o uso de modelos de linguagem (LLMs) dentro de limites de negócio definidos — escopo, contexto, restrições e regras de escalada. A IA opera dentro do que a operação permite, não de forma irrestrita.',
    },
    {
      question: 'Quanto tempo leva para iniciar uma operação?',
      answer:
        'O tempo de implantação varia conforme a complexidade da operação, os canais envolvidos e o nível de integração com sistemas existentes. A InBot trabalha com metodologia estruturada de onboarding — o prazo é definido após o diagnóstico inicial.',
    },
  ],
}

export const footer = {
  brand: 'InBot',
  tagline: 'Infraestrutura conversacional para operações em escala.',
  columns: [
    {
      title: 'Plataforma',
      links: [
        { label: 'Dados', href: '#plataforma' },
        { label: 'Agentes', href: '#plataforma' },
        { label: 'Canais', href: '#plataforma' },
        { label: 'Jornadas', href: '#plataforma' },
      ],
    },
    {
      title: 'Soluções',
      links: [
        { label: 'Atendimento', href: '#solucoes' },
        { label: 'RH', href: '#solucoes' },
        { label: 'Cobranças', href: '#solucoes' },
        { label: 'Prefeituras', href: '#solucoes' },
      ],
    },
    {
      title: 'Conteúdo',
      links: [
        { label: 'Blog', href: '#conteudo' },
        { label: 'Cases', href: '#cases' },
      ],
    },
    {
      title: 'Contato',
      links: [
        { label: 'Fale com a InBot', href: '#contato' },
        { label: 'InTable', href: '#' },
      ],
    },
  ],
  legal: '© 2025 InBot. Todos os direitos reservados.',
}
