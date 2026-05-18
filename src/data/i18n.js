// ============================================================
// InBot Landing — i18n (internacionalização estática)
// Idiomas: pt-BR, en, es
// Tom: B2B, institucional, tecnológico.
// VALIDAR métricas e cases reais antes da publicação.
// ============================================================

export const languages = [
  { code: 'pt-BR', short: 'PT-BR', label: 'Português', flag: '🇧🇷' },
  { code: 'en',    short: 'EN',    label: 'English',   flag: '🇺🇸' },
  { code: 'es',    short: 'ES',    label: 'Español',   flag: '🇪🇸' },
]

export const translations = {
  'pt-BR': {
    nav: {
      brand: 'InBot',
      links: [
        { label: 'Soluções',   href: '#solucoes' },
        { label: 'Cases',      href: '#cases' },
        { label: 'Tecnologia', href: '#plataforma' },
        { label: 'Vantagens',  href: '#diferenciais' },
        { label: 'Sobre',      href: '#plataforma' },
        { label: 'Blog',       href: '#conteudo' },
      ],
      actions: [
        { label: 'Contato', href: '#contato', primary: true },
        { label: 'Login',   href: '#',        primary: false },
      ],
    },

    loginMenu: {
      title: 'Acesse uma plataforma',
      items: [
        { title: 'InBot',   description: 'Administração da plataforma conversacional', href: 'https://in.bot/inbot-admin' },
        { title: 'InTable', description: 'Gestão de tabelas e dados operacionais',    href: 'https://intable.inbot.com.br/' },
      ],
    },

    hero: {
      eyebrow:  'SOMOS A INBOT',
      headline: 'Sua marca falando com inteligência.',
      subtext:  'A InBot une IA Generativa e conversação para criar experiências mais humanas, eficientes e escaláveis.',
      cta:      { label: 'Falar com a InBot', href: '#contato' },
    },

    metrics: {
      badge: 'Escala operacional',
      validationNote: 'Métricas em validação — serão publicadas com dados verificados.',
      items: [
        { value: '—', label: 'ROI médio',       description: 'Retorno sobre investimento em operações conversacionais' },
        { value: '—', label: 'Retenção',        description: 'Taxa de retenção de usuários em jornadas automatizadas' },
        { value: '—', label: 'Conversão',       description: 'Incremento em conversão via canais conversacionais' },
        { value: '—', label: 'Redução no TMA',  description: 'Tempo médio de atendimento com agentes inteligentes' },
        { value: '—', label: 'NPS operacional', description: 'Satisfação medida em operações gerenciadas pela InBot' },
      ],
    },

    platform: {
      badge: 'Plataforma',
      headline: 'Uma plataforma. Cada pilar em seu lugar.',
      subtext:
        'A InBot centraliza o que antes estava disperso: dados, agentes, canais, jornadas, relatórios e governança em uma única operação coerente.',
      pillars: [
        { icon: '◈', title: 'Dados',      description: 'Visibilidade completa sobre cada interação. Logs, histórico e análise em tempo real para decisões com embasamento.' },
        { icon: '◎', title: 'Agentes',    description: 'Agentes inteligentes orquestrados com regras de negócio. Cada resposta tem contexto, escopo e governança.' },
        { icon: '⬡', title: 'Canais',     description: 'WhatsApp, e-mail, voz, portais e mais — todos conectados em uma operação única, coerente e auditável.' },
        { icon: '◷', title: 'Jornadas',   description: 'Fluxos conversacionais planejados e monitorados do primeiro contato à resolução, sem gaps operacionais.' },
        { icon: '▣', title: 'Relatórios', description: 'Dashboards e indicadores que mostram o que está funcionando, o que precisa de ajuste e onde há risco.' },
        { icon: '◉', title: 'Governança', description: 'Regras, permissões, auditoria e controle. A operação escala sem perder consistência nem rastreabilidade.' },
      ],
    },

    operation: {
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
    },

    ecosystem: {
      badge: 'Ecossistema',
      headline: 'Tudo orbita um núcleo único de operação',
      subtext:
        'Dados, agentes, canais e jornadas convergem para um único ponto de controle. A InBot é o núcleo que mantém a operação coesa.',
      nodes: ['Dados', 'Agentes', 'Canais', 'Jornadas', 'Relatórios', 'Governança'],
    },

    solutions: {
      badge: 'Soluções',
      headline: 'Operação conversacional para cada contexto',
      subtext: 'A InBot opera em setores que exigem precisão, escala e consistência.',
      items: [
        { title: 'Atendimento',         description: 'Centralize o atendimento ao cliente em todos os canais com agentes que entendem contexto e operam com governança.' },
        { title: 'RH',                  description: 'Jornadas de onboarding, dúvidas frequentes, gestão de benefícios e comunicação interna em uma operação conversacional.' },
        { title: 'Corporativo',         description: 'Comunicação interna, suporte a times e automação de processos corporativos com rastreabilidade total.' },
        { title: 'Cobranças',           description: 'Fluxos de cobrança conversacional com abordagem contextual, réguas automáticas e controle de resultado.' },
        { title: 'Prefeituras',         description: 'Atendimento ao cidadão em escala, com múltiplos canais, governança e visibilidade para gestão pública.' },
        { title: 'Consultórios',        description: 'Agendamento, confirmação, pré-atendimento e pós-consulta em fluxos conversacionais integrados.' },
        { title: 'Assistentes Virtuais', description: 'Personagens e assistentes com identidade própria, comportamento curado e operação monitorada.' },
      ],
    },

    differentials: {
      badge: 'Diferenciais',
      headline: 'Infraestrutura que sustenta operações de verdade',
      subtext:
        'Não é promessa de feature. É a estrutura que operações em escala precisam para funcionar com consistência.',
      items: [
        { icon: '◈', title: 'IA generativa com curadoria',  description: 'LLMs orquestrados com regras de negócio, limites definidos e supervisão. IA que opera dentro do seu contexto.' },
        { icon: '▣', title: 'BI e inteligência de dados',   description: 'Dashboards, relatórios e indicadores que transformam conversas em dados acionáveis para decisão.' },
        { icon: '◉', title: 'Governança nativa',            description: 'Permissões, auditoria, histórico de decisão e conformidade embutidos — não adicionados depois.' },
        { icon: '⬡', title: 'Integração multicanal',        description: 'WhatsApp, e-mail, voz, portais e APIs conectados em uma única camada de operação coerente.' },
        { icon: '◷', title: 'Escalabilidade operacional',   description: 'Volume cresce, consistência permanece. Infraestrutura projetada para operações de missão crítica.' },
        { icon: '◎', title: 'Metodologia InBot',            description: 'Estrutura de implementação, onboarding e evolução contínua para garantir resultado real, não só entrega técnica.' },
      ],
    },

    midCTA: {
      headline: 'Sua operação conversacional já pode funcionar como infraestrutura.',
      subtext:
        'Conecte canais, organize dados e dê aos times uma base única para operar conversas com inteligência e governança.',
      cta: { label: 'Falar com a InBot', href: '#contato' },
    },

    interactiveFeatures: {
      eyebrow: 'COMECE A ESCALAR',
      title: 'Transforme conversas em operação inteligente',
      tabs: [
        {
          id: 'generative',
          title: 'IA Generativa aplicada',
          texts: [
            'Sua marca precisa responder com naturalidade sem perder consistência?',
            'A InBot combina IA Generativa e conversação para criar assistentes com tom, personalidade e respostas alinhadas ao seu negócio.',
          ],
          highlight: 'Mais criatividade, consistência e fluidez em cada interação.',
        },
        {
          id: 'context',
          title: 'Respostas com contexto',
          texts: [
            'Atendimentos sem histórico geram conversas repetitivas e pouco humanas.',
            'Com contexto, memória da jornada e busca semântica, a InBot ajuda o assistente a responder de forma mais relevante e personalizada.',
          ],
          highlight: 'Conversas mais naturais, úteis e conectadas à jornada do usuário.',
        },
        {
          id: 'curation',
          title: 'Treinamento e curadoria',
          texts: [
            'Um assistente virtual precisa evoluir continuamente para manter precisão.',
            'A InBot apoia o treinamento com exemplos, curadoria constante e melhoria contínua das respostas e fluxos.',
          ],
          highlight: 'Evolução contínua para manter qualidade, precisão e aderência ao negócio.',
        },
        {
          id: 'data',
          title: 'Dados, relatórios e BI',
          texts: [
            'Conversas geram sinais valiosos sobre clientes, dúvidas e oportunidades.',
            'A InBot transforma dados conversacionais em relatórios e inteligência para apoiar decisões, evolução de jornada e performance.',
          ],
          highlight: 'Mais visibilidade para entender, medir e otimizar sua operação.',
        },
        {
          id: 'methodology',
          title: 'Metodologia para escalar',
          texts: [
            'Escalar atendimento exige mais do que tecnologia: exige processo.',
            'Com metodologia, definição de KPIs, planejamento de jornadas e acompanhamento especializado, a InBot estrutura a evolução da operação.',
          ],
          highlight: 'Uma operação conversacional mais organizada, mensurável e pronta para crescer.',
        },
      ],
    },

    cases: {
      eyebrow: 'WE BELIEVE IN.BOT',
      title: 'Vozes que confiam na InBot',
      subtitle: 'Clientes que estruturaram suas operações conversacionais com a InBot.',
      // Depoimentos originais em português — mantidos literalmente, sem edição
      testimonials: [
        {
          wordmark: 'Bradesco',
          logo: '/assets/testimonials/bradesco.png',
          quote: 'A InBot deu oportunidade de reduzir a quantidade de mensagens respondidas por um analista e agilizou o nosso atendimento no facebook. Com isso nossos analistas pode se ocupar em resolver problemas mais complexos, e deixar que o bot responda as perguntas mais simples e corriqueiras.',
          person: 'Rosane Ferreira Silva',
          area: 'Bradesco-CDEC',
        },
        {
          wordmark: 'TecBan',
          logo: '/assets/testimonials/tecban.png',
          quote: 'Foi e continua sendo uma parceria de muito sucesso. Conseguimos implantar nosso chatbot, construímos juntos a jornada do cliente e assim entregamos o Téo. Ainda temos muito para fazer, mas como fase inicial foi um sucesso!!!',
          person: 'Alexandra Muniz',
          area: 'Atendimento aos clientes – Tecban',
        },
        {
          wordmark: 'Ambev',
          logo: '/assets/testimonials/logo-ambev.jpg',
          quote: 'Escolhemos a InBot como parceira na jornada de transformação digital da área de Gente, onde uma das estratégias é lançar mão da automação e inteligência artificial, sem nunca perder a humanização de vista. Estamos apenas no início, mas com grandes conquistas até aqui! Lupi nasceu para somar na experiência dos nossos usuários, entregando não só fácil acesso e aumento de produtividade como, principalmente, valor e cuidado.',
          person: 'Renata Guimarães Figueiredo',
          area: 'Gente & Gestão Ambev',
        },
      ],
    },

    content: {
      badge: 'Conteúdo',
      headline: 'Operação conversacional: aprenda com quem opera',
      subtext: 'Conteúdo técnico e estratégico para quem decide e quem executa.',
      items: [
        { tag: 'Estratégia', title: 'O que é infraestrutura conversacional e por que sua empresa precisa',                   date: 'Em breve' },
        { tag: 'Produto',    title: 'Como estruturar agentes com governança em operações de grande porte',                  date: 'Em breve' },
        { tag: 'Dados',      title: 'Da conversa ao dado: como transformar interações em inteligência operacional',          date: 'Em breve' },
      ],
    },

    faq: {
      badge: 'Dúvidas frequentes',
      headline: 'Perguntas que todo decisor faz',
      items: [
        {
          question: 'A InBot substitui meu atendimento humano?',
          answer: 'Não. A InBot é infraestrutura conversacional — ela organiza, orquestra e escala a operação, mas o nível de automação e o papel das equipes humanas é definido junto ao cliente. A maioria das operações combina agentes inteligentes com intervenção humana nos momentos certos.',
        },
        {
          question: 'Quais canais a InBot pode integrar?',
          answer: 'A plataforma suporta integração com WhatsApp, e-mail, voz e portais web. A disponibilidade de cada canal depende da configuração da operação e dos requisitos técnicos do ambiente do cliente. Os detalhes são mapeados durante o processo de implantação.',
        },
        {
          question: 'A plataforma funciona com dados e bases internas?',
          answer: 'Sim. A InBot foi projetada para operar conectada a bases de dados, CRMs, ERPs e sistemas legados do cliente. A integração é planejada caso a caso, respeitando a arquitetura e as políticas de segurança de cada organização.',
        },
        {
          question: 'Como a InBot garante governança e consistência?',
          answer: 'Governança é nativa da plataforma — não um add-on. Isso inclui regras de negócio configuráveis, logs de interação, auditoria de decisões dos agentes e controle de permissões por perfil. A operação fica rastreável do início ao fim.',
        },
        {
          question: 'A InBot usa IA generativa?',
          answer: 'Sim, com curadoria. A plataforma permite o uso de modelos de linguagem (LLMs) dentro de limites de negócio definidos — escopo, contexto, restrições e regras de escalada. A IA opera dentro do que a operação permite, não de forma irrestrita.',
        },
        {
          question: 'Quanto tempo leva para iniciar uma operação?',
          answer: 'O tempo de implantação varia conforme a complexidade da operação, os canais envolvidos e o nível de integração com sistemas existentes. A InBot trabalha com metodologia estruturada de onboarding — o prazo é definido após o diagnóstico inicial.',
        },
      ],
    },

    finalCTA: {
      badge: 'Fale com a InBot',
      headline: 'Pronto para organizar sua operação conversacional?',
      subtext:
        'Fale com um especialista da InBot e entenda como estruturar dados, agentes, canais e jornadas em uma operação coesa.',
      cta:          { label: 'Falar com a InBot',    href: '#contato' },
      ctaSecondary: { label: 'Conhecer a plataforma', href: '#plataforma' },
    },

    footerLocation: {
      badge: 'Localização',
      headline: 'Onde estamos',
      subtext: 'Nosso espaço em São Paulo para inovação, tecnologia e conversação.',
      addressLabel: 'Endereço',
      mapsLink: 'Abrir no Google Maps',
      iframeTitle: 'Localização InBot — Espaço InovaBra Habitat, Av. Angélica 2529, São Paulo SP',
      ariaLabel: 'Localização da InBot em São Paulo',
    },

    footer: {
      brand: 'InBot',
      tagline: 'Infraestrutura conversacional para operações em escala.',
      columns: [
        {
          title: 'Plataforma',
          links: [
            { label: 'Dados',    href: '#plataforma' },
            { label: 'Agentes',  href: '#plataforma' },
            { label: 'Canais',   href: '#plataforma' },
            { label: 'Jornadas', href: '#plataforma' },
          ],
        },
        {
          title: 'Soluções',
          links: [
            { label: 'Atendimento', href: '#solucoes' },
            { label: 'RH',          href: '#solucoes' },
            { label: 'Cobranças',   href: '#solucoes' },
            { label: 'Prefeituras', href: '#solucoes' },
          ],
        },
        {
          title: 'Conteúdo',
          links: [
            { label: 'Blog',  href: '#conteudo' },
            { label: 'Cases', href: '#cases' },
          ],
        },
        {
          title: 'Contato',
          links: [
            { label: 'Fale com a InBot', href: '#contato' },
            { label: 'InTable',          href: 'https://intable.inbot.com.br/' },
          ],
        },
      ],
      legal: '© 2025 InBot. Todos os direitos reservados.',
    },
  },

  // ── English ───────────────────────────────────────────────────────────────

  en: {
    nav: {
      brand: 'InBot',
      links: [
        { label: 'Solutions',   href: '#solucoes' },
        { label: 'Cases',       href: '#cases' },
        { label: 'Technology',  href: '#plataforma' },
        { label: 'Advantages',  href: '#diferenciais' },
        { label: 'About',       href: '#plataforma' },
        { label: 'Blog',        href: '#conteudo' },
      ],
      actions: [
        { label: 'Contact', href: '#contato', primary: true },
        { label: 'Login',   href: '#',        primary: false },
      ],
    },

    loginMenu: {
      title: 'Access a platform',
      items: [
        { title: 'InBot',   description: 'Conversational platform administration', href: 'https://in.bot/inbot-admin' },
        { title: 'InTable', description: 'Tables and operational data management', href: 'https://intable.inbot.com.br/' },
      ],
    },

    hero: {
      eyebrow:  'WE ARE INBOT',
      headline: 'Your brand speaking with intelligence.',
      subtext:  'InBot combines Generative AI and conversation to create more human, efficient, and scalable experiences.',
      cta:      { label: 'Talk to InBot', href: '#contato' },
    },

    metrics: {
      badge: 'Operational scale',
      validationNote: 'Metrics under validation — will be published with verified data.',
      items: [
        { value: '—', label: 'Average ROI',        description: 'Return on investment in conversational operations' },
        { value: '—', label: 'Retention',          description: 'User retention rate in automated journeys' },
        { value: '—', label: 'Conversion',         description: 'Conversion uplift via conversational channels' },
        { value: '—', label: 'AHT Reduction',      description: 'Average handling time with intelligent agents' },
        { value: '—', label: 'Operational NPS',    description: 'Satisfaction measured in InBot-managed operations' },
      ],
    },

    platform: {
      badge: 'Platform',
      headline: 'One platform. Each pillar in its place.',
      subtext:
        'InBot centralizes what was once scattered: data, agents, channels, journeys, reports, and governance in a single coherent operation.',
      pillars: [
        { icon: '◈', title: 'Data',       description: 'Full visibility into every interaction. Logs, history, and real-time analysis for evidence-based decisions.' },
        { icon: '◎', title: 'Agents',     description: 'Intelligent agents orchestrated with business rules. Every response has context, scope, and governance.' },
        { icon: '⬡', title: 'Channels',   description: 'WhatsApp, email, voice, portals, and more — all connected in a single, coherent, auditable operation.' },
        { icon: '◷', title: 'Journeys',   description: 'Conversational flows planned and monitored from first contact to resolution, with no operational gaps.' },
        { icon: '▣', title: 'Reports',    description: 'Dashboards and metrics that show what is working, what needs adjustment, and where risk exists.' },
        { icon: '◉', title: 'Governance', description: 'Rules, permissions, audit trails, and controls. Operations scale without losing consistency or traceability.' },
      ],
    },

    operation: {
      badge: 'Conversational Operation',
      headline: 'From channel chaos to centralized operation',
      before: {
        title: 'Before InBot',
        items: [
          'Disconnected channels with no unified visibility',
          'Isolated automations that do not communicate',
          'Data scattered across different tools',
          'Journeys without end-to-end control',
          'Rework and inconsistency across teams',
        ],
      },
      after: {
        title: 'With InBot',
        items: [
          'Centralized conversational operation',
          'Agents orchestrated with governance',
          'Data organized and visible in real time',
          'Planned and monitored journeys',
          'Consistency and scale with full traceability',
        ],
      },
    },

    ecosystem: {
      badge: 'Ecosystem',
      headline: 'Everything orbits a single operational core',
      subtext:
        'Data, agents, channels, and journeys converge to a single control point. InBot is the core that keeps the operation cohesive.',
      nodes: ['Data', 'Agents', 'Channels', 'Journeys', 'Reports', 'Governance'],
    },

    solutions: {
      badge: 'Solutions',
      headline: 'Conversational operation for every context',
      subtext: 'InBot operates in sectors that demand precision, scale, and consistency.',
      items: [
        { title: 'Customer Service',     description: 'Centralize customer service across all channels with agents that understand context and operate with governance.' },
        { title: 'HR',                   description: 'Onboarding journeys, FAQs, benefits management, and internal communication in a single conversational operation.' },
        { title: 'Corporate',            description: 'Internal communication, team support, and automation of corporate processes with full traceability.' },
        { title: 'Collections',          description: 'Conversational collection flows with contextual approach, automated rules, and outcome control.' },
        { title: 'Local Government',     description: 'Citizen service at scale, with multiple channels, governance, and visibility for public management.' },
        { title: 'Healthcare',           description: 'Scheduling, confirmation, pre-consultation, and post-visit in integrated conversational flows.' },
        { title: 'Virtual Assistants',   description: 'Characters and assistants with their own identity, curated behavior, and monitored operation.' },
      ],
    },

    differentials: {
      badge: 'Differentials',
      headline: 'Infrastructure that sustains real operations',
      subtext:
        'Not a feature promise. The structure that operations at scale need to function with consistency.',
      items: [
        { icon: '◈', title: 'Curated generative AI',   description: 'Orchestrated LLMs with business rules, defined boundaries, and supervision. AI that operates within your context.' },
        { icon: '▣', title: 'BI and data intelligence', description: 'Dashboards, reports, and metrics that turn conversations into actionable data for decision-making.' },
        { icon: '◉', title: 'Native governance',        description: 'Permissions, audit trails, decision history, and compliance built in — not bolted on afterward.' },
        { icon: '⬡', title: 'Multichannel integration', description: 'WhatsApp, email, voice, portals, and APIs connected in a single coherent operational layer.' },
        { icon: '◷', title: 'Operational scalability',  description: 'Volume grows, consistency remains. Infrastructure designed for mission-critical operations.' },
        { icon: '◎', title: 'InBot methodology',        description: 'Implementation framework, onboarding, and continuous evolution to ensure real results, not just technical delivery.' },
      ],
    },

    midCTA: {
      headline: 'Your conversational operation can already function as infrastructure.',
      subtext:
        'Connect channels, organize data, and give your teams a single foundation to operate conversations with intelligence and governance.',
      cta: { label: 'Talk to InBot', href: '#contato' },
    },

    interactiveFeatures: {
      eyebrow: 'START SCALING',
      title: 'Transform conversations into intelligent operation',
      tabs: [
        {
          id: 'generative',
          title: 'Applied Generative AI',
          texts: [
            'Does your brand need to respond naturally without losing consistency?',
            'InBot combines Generative AI and conversation to create assistants with tone, personality, and responses aligned with your business.',
          ],
          highlight: 'More creativity, consistency, and fluidity in every interaction.',
        },
        {
          id: 'context',
          title: 'Context-aware responses',
          texts: [
            'Support without history leads to repetitive, impersonal conversations.',
            'With context, journey memory, and semantic search, InBot helps the assistant respond in a more relevant and personalized way.',
          ],
          highlight: 'More natural, useful conversations connected to the user journey.',
        },
        {
          id: 'curation',
          title: 'Training and curation',
          texts: [
            'A virtual assistant must continuously evolve to maintain accuracy.',
            'InBot supports training with examples, ongoing curation, and continuous improvement of responses and flows.',
          ],
          highlight: 'Continuous evolution to maintain quality, accuracy, and business alignment.',
        },
        {
          id: 'data',
          title: 'Data, reports, and BI',
          texts: [
            'Conversations generate valuable signals about customers, questions, and opportunities.',
            'InBot turns conversational data into reports and intelligence to support decisions, journey evolution, and performance.',
          ],
          highlight: 'More visibility to understand, measure, and optimize your operation.',
        },
        {
          id: 'methodology',
          title: 'Methodology to scale',
          texts: [
            'Scaling support requires more than technology — it requires process.',
            'With methodology, KPI definition, journey planning, and specialized follow-up, InBot structures the evolution of your operation.',
          ],
          highlight: 'A more organized, measurable conversational operation ready to grow.',
        },
      ],
    },

    cases: {
      eyebrow: 'WE BELIEVE IN.BOT',
      title: 'Voices that trust InBot',
      subtitle: 'Clients that structured their conversational operations with InBot.',
      // Testimonials kept in original Portuguese — editorial translation pending client approval
      testimonials: [
        {
          wordmark: 'Bradesco',
          logo: '/assets/testimonials/bradesco.png',
          quote: 'A InBot deu oportunidade de reduzir a quantidade de mensagens respondidas por um analista e agilizou o nosso atendimento no facebook. Com isso nossos analistas pode se ocupar em resolver problemas mais complexos, e deixar que o bot responda as perguntas mais simples e corriqueiras.',
          person: 'Rosane Ferreira Silva',
          area: 'Bradesco-CDEC',
        },
        {
          wordmark: 'TecBan',
          logo: '/assets/testimonials/tecban.png',
          quote: 'Foi e continua sendo uma parceria de muito sucesso. Conseguimos implantar nosso chatbot, construímos juntos a jornada do cliente e assim entregamos o Téo. Ainda temos muito para fazer, mas como fase inicial foi um sucesso!!!',
          person: 'Alexandra Muniz',
          area: 'Customer Service – Tecban',
        },
        {
          wordmark: 'Ambev',
          logo: '/assets/testimonials/logo-ambev.jpg',
          quote: 'Escolhemos a InBot como parceira na jornada de transformação digital da área de Gente, onde uma das estratégias é lançar mão da automação e inteligência artificial, sem nunca perder a humanização de vista. Estamos apenas no início, mas com grandes conquistas até aqui! Lupi nasceu para somar na experiência dos nossos usuários, entregando não só fácil acesso e aumento de produtividade como, principalmente, valor e cuidado.',
          person: 'Renata Guimarães Figueiredo',
          area: 'People & Management Ambev',
        },
      ],
    },

    content: {
      badge: 'Content',
      headline: 'Conversational operations: learn from those who operate',
      subtext: 'Technical and strategic content for those who decide and those who execute.',
      items: [
        { tag: 'Strategy', title: 'What is conversational infrastructure and why your company needs it',                date: 'Coming soon' },
        { tag: 'Product',  title: 'How to structure agents with governance in large-scale operations',                  date: 'Coming soon' },
        { tag: 'Data',     title: 'From conversation to data: how to turn interactions into operational intelligence',  date: 'Coming soon' },
      ],
    },

    faq: {
      badge: 'FAQ',
      headline: 'Questions every decision-maker asks',
      items: [
        {
          question: 'Does InBot replace human customer service?',
          answer: 'No. InBot is conversational infrastructure — it organizes, orchestrates, and scales the operation, but the level of automation and the role of human teams is defined together with each client. Most operations combine intelligent agents with human intervention at the right moments.',
        },
        {
          question: 'Which channels can InBot integrate?',
          answer: 'The platform supports integration with WhatsApp, email, voice, and web portals. The availability of each channel depends on the operation configuration and the technical requirements of the client\'s environment. Details are mapped during the onboarding process.',
        },
        {
          question: 'Does the platform work with internal data and databases?',
          answer: 'Yes. InBot is designed to operate connected to databases, CRMs, ERPs, and legacy systems. The integration is planned case by case, respecting each organization\'s architecture and security policies.',
        },
        {
          question: 'How does InBot ensure governance and consistency?',
          answer: 'Governance is native to the platform — not an add-on. This includes configurable business rules, interaction logs, agent decision audit trails, and role-based permission controls. The operation is fully traceable from start to finish.',
        },
        {
          question: 'Does InBot use generative AI?',
          answer: 'Yes, with curation. The platform allows the use of language models (LLMs) within defined business boundaries — scope, context, restrictions, and escalation rules. AI operates within what the operation allows, not in an unrestricted way.',
        },
        {
          question: 'How long does it take to start an operation?',
          answer: 'Onboarding time varies depending on the complexity of the operation, the channels involved, and the level of integration with existing systems. InBot follows a structured onboarding methodology — the timeline is defined after the initial diagnostic.',
        },
      ],
    },

    finalCTA: {
      badge: 'Talk to InBot',
      headline: 'Ready to organize your conversational operation?',
      subtext:
        'Talk to an InBot specialist and understand how to structure data, agents, channels, and journeys into a cohesive operation.',
      cta:          { label: 'Talk to InBot',       href: '#contato' },
      ctaSecondary: { label: 'Explore the platform', href: '#plataforma' },
    },

    footerLocation: {
      badge: 'Location',
      headline: 'Where we are',
      subtext: 'Our space in São Paulo for innovation, technology, and conversation.',
      addressLabel: 'Address',
      mapsLink: 'Open in Google Maps',
      iframeTitle: 'InBot Location — Espaço InovaBra Habitat, Av. Angélica 2529, São Paulo SP',
      ariaLabel: 'InBot location in São Paulo',
    },

    footer: {
      brand: 'InBot',
      tagline: 'Conversational infrastructure for operations at scale.',
      columns: [
        {
          title: 'Platform',
          links: [
            { label: 'Data',      href: '#plataforma' },
            { label: 'Agents',    href: '#plataforma' },
            { label: 'Channels',  href: '#plataforma' },
            { label: 'Journeys',  href: '#plataforma' },
          ],
        },
        {
          title: 'Solutions',
          links: [
            { label: 'Customer Service', href: '#solucoes' },
            { label: 'HR',               href: '#solucoes' },
            { label: 'Collections',      href: '#solucoes' },
            { label: 'Local Government', href: '#solucoes' },
          ],
        },
        {
          title: 'Content',
          links: [
            { label: 'Blog',  href: '#conteudo' },
            { label: 'Cases', href: '#cases' },
          ],
        },
        {
          title: 'Contact',
          links: [
            { label: 'Talk to InBot', href: '#contato' },
            { label: 'InTable',       href: 'https://intable.inbot.com.br/' },
          ],
        },
      ],
      legal: '© 2025 InBot. All rights reserved.',
    },
  },

  // ── Español ───────────────────────────────────────────────────────────────

  es: {
    nav: {
      brand: 'InBot',
      links: [
        { label: 'Soluciones', href: '#solucoes' },
        { label: 'Casos',      href: '#cases' },
        { label: 'Tecnología', href: '#plataforma' },
        { label: 'Ventajas',   href: '#diferenciais' },
        { label: 'Sobre',      href: '#plataforma' },
        { label: 'Blog',       href: '#conteudo' },
      ],
      actions: [
        { label: 'Contacto', href: '#contato', primary: true },
        { label: 'Login',    href: '#',        primary: false },
      ],
    },

    loginMenu: {
      title: 'Accede a una plataforma',
      items: [
        { title: 'InBot',   description: 'Administración de la plataforma conversacional', href: 'https://in.bot/inbot-admin' },
        { title: 'InTable', description: 'Gestión de tablas y datos operativos',           href: 'https://intable.inbot.com.br/' },
      ],
    },

    hero: {
      eyebrow:  'SOMOS INBOT',
      headline: 'Tu marca hablando con inteligencia.',
      subtext:  'InBot une IA Generativa y conversación para crear experiencias más humanas, eficientes y escalables.',
      cta:      { label: 'Habla con InBot', href: '#contato' },
    },

    metrics: {
      badge: 'Escala operativa',
      validationNote: 'Métricas en validación — se publicarán con datos verificados.',
      items: [
        { value: '—', label: 'ROI promedio',      description: 'Retorno sobre inversión en operaciones conversacionales' },
        { value: '—', label: 'Retención',         description: 'Tasa de retención de usuarios en jornadas automatizadas' },
        { value: '—', label: 'Conversión',        description: 'Incremento en conversión vía canales conversacionales' },
        { value: '—', label: 'Reducción del TMO', description: 'Tiempo medio de operación con agentes inteligentes' },
        { value: '—', label: 'NPS operativo',     description: 'Satisfacción medida en operaciones gestionadas por InBot' },
      ],
    },

    platform: {
      badge: 'Plataforma',
      headline: 'Una plataforma. Cada pilar en su lugar.',
      subtext:
        'InBot centraliza lo que antes estaba disperso: datos, agentes, canales, jornadas, informes y gobernanza en una única operación coherente.',
      pillars: [
        { icon: '◈', title: 'Datos',      description: 'Visibilidad completa sobre cada interacción. Registros, historial y análisis en tiempo real para decisiones fundamentadas.' },
        { icon: '◎', title: 'Agentes',    description: 'Agentes inteligentes orquestados con reglas de negocio. Cada respuesta tiene contexto, alcance y gobernanza.' },
        { icon: '⬡', title: 'Canales',    description: 'WhatsApp, correo, voz, portales y más — todos conectados en una operación única, coherente y auditable.' },
        { icon: '◷', title: 'Jornadas',   description: 'Flujos conversacionales planificados y monitoreados desde el primer contacto hasta la resolución, sin brechas operativas.' },
        { icon: '▣', title: 'Informes',   description: 'Dashboards e indicadores que muestran lo que funciona, lo que necesita ajuste y dónde existe riesgo.' },
        { icon: '◉', title: 'Gobernanza', description: 'Reglas, permisos, auditoría y control. La operación escala sin perder consistencia ni trazabilidad.' },
      ],
    },

    operation: {
      badge: 'Operación Conversacional',
      headline: 'Del caos de canales a la operación centralizada',
      before: {
        title: 'Antes de InBot',
        items: [
          'Canales desconectados sin visibilidad unificada',
          'Automatizaciones aisladas que no se comunican',
          'Datos dispersos en distintas herramientas',
          'Jornadas sin control de extremo a extremo',
          'Retrabajo e inconsistencia entre equipos',
        ],
      },
      after: {
        title: 'Con InBot',
        items: [
          'Operación conversacional centralizada',
          'Agentes orquestados con gobernanza',
          'Datos organizados y visibles en tiempo real',
          'Jornadas planificadas y monitoreadas',
          'Consistencia y escala con trazabilidad total',
        ],
      },
    },

    ecosystem: {
      badge: 'Ecosistema',
      headline: 'Todo orbita un núcleo único de operación',
      subtext:
        'Datos, agentes, canales y jornadas convergen en un único punto de control. InBot es el núcleo que mantiene la operación cohesionada.',
      nodes: ['Datos', 'Agentes', 'Canales', 'Jornadas', 'Informes', 'Gobernanza'],
    },

    solutions: {
      badge: 'Soluciones',
      headline: 'Operación conversacional para cada contexto',
      subtext: 'InBot opera en sectores que exigen precisión, escala y consistencia.',
      items: [
        { title: 'Atención al cliente',   description: 'Centralice la atención en todos los canales con agentes que entienden el contexto y operan con gobernanza.' },
        { title: 'RRHH',                  description: 'Jornadas de onboarding, preguntas frecuentes, gestión de beneficios y comunicación interna en una operación conversacional.' },
        { title: 'Corporativo',           description: 'Comunicación interna, soporte a equipos y automatización de procesos corporativos con trazabilidad total.' },
        { title: 'Cobros',                description: 'Flujos de cobro conversacional con enfoque contextual, reglas automáticas y control de resultados.' },
        { title: 'Municipios',            description: 'Atención ciudadana a escala, con múltiples canales, gobernanza y visibilidad para la gestión pública.' },
        { title: 'Consultorios',          description: 'Agendamiento, confirmación, pre-atención y post-consulta en flujos conversacionales integrados.' },
        { title: 'Asistentes Virtuales',  description: 'Personajes y asistentes con identidad propia, comportamiento curado y operación monitorizada.' },
      ],
    },

    differentials: {
      badge: 'Diferenciales',
      headline: 'Infraestructura que sostiene operaciones reales',
      subtext:
        'No es una promesa de funcionalidad. Es la estructura que las operaciones a escala necesitan para funcionar con consistencia.',
      items: [
        { icon: '◈', title: 'IA generativa con curación',    description: 'LLMs orquestados con reglas de negocio, límites definidos y supervisión. IA que opera dentro de su contexto.' },
        { icon: '▣', title: 'BI e inteligencia de datos',    description: 'Dashboards, informes e indicadores que convierten conversaciones en datos accionables para la toma de decisiones.' },
        { icon: '◉', title: 'Gobernanza nativa',             description: 'Permisos, auditoría, historial de decisiones y cumplimiento incorporados — no agregados después.' },
        { icon: '⬡', title: 'Integración multicanal',        description: 'WhatsApp, correo, voz, portales y APIs conectados en una única capa de operación coherente.' },
        { icon: '◷', title: 'Escalabilidad operativa',       description: 'El volumen crece, la consistencia permanece. Infraestructura diseñada para operaciones de misión crítica.' },
        { icon: '◎', title: 'Metodología InBot',             description: 'Estructura de implementación, onboarding y evolución continua para garantizar resultados reales, no solo entrega técnica.' },
      ],
    },

    midCTA: {
      headline: 'Su operación conversacional ya puede funcionar como infraestructura.',
      subtext:
        'Conecte canales, organice datos y dé a sus equipos una base única para operar conversaciones con inteligencia y gobernanza.',
      cta: { label: 'Hablar con InBot', href: '#contato' },
    },

    interactiveFeatures: {
      eyebrow: 'EMPIEZA A ESCALAR',
      title: 'Transforma conversaciones en operación inteligente',
      tabs: [
        {
          id: 'generative',
          title: 'IA Generativa aplicada',
          texts: [
            '¿Tu marca necesita responder con naturalidad sin perder consistencia?',
            'InBot combina IA Generativa y conversación para crear asistentes con tono, personalidad y respuestas alineadas con tu negocio.',
          ],
          highlight: 'Más creatividad, consistencia y fluidez en cada interacción.',
        },
        {
          id: 'context',
          title: 'Respuestas con contexto',
          texts: [
            'Las atenciones sin historial generan conversaciones repetitivas y poco humanas.',
            'Con contexto, memoria del recorrido y búsqueda semántica, InBot ayuda al asistente a responder de forma más relevante y personalizada.',
          ],
          highlight: 'Conversaciones más naturales, útiles y conectadas al recorrido del usuario.',
        },
        {
          id: 'curation',
          title: 'Entrenamiento y curación',
          texts: [
            'Un asistente virtual necesita evolucionar continuamente para mantener precisión.',
            'InBot apoya el entrenamiento con ejemplos, curación constante y mejora continua de respuestas y flujos.',
          ],
          highlight: 'Evolución continua para mantener calidad, precisión y adherencia al negocio.',
        },
        {
          id: 'data',
          title: 'Datos, informes y BI',
          texts: [
            'Las conversaciones generan señales valiosas sobre clientes, dudas y oportunidades.',
            'InBot transforma datos conversacionales en informes e inteligencia para apoyar decisiones, evolución de recorrido y rendimiento.',
          ],
          highlight: 'Más visibilidad para entender, medir y optimizar tu operación.',
        },
        {
          id: 'methodology',
          title: 'Metodología para escalar',
          texts: [
            'Escalar la atención exige más que tecnología: exige proceso.',
            'Con metodología, definición de KPIs, planificación de recorridos y seguimiento especializado, InBot estructura la evolución de la operación.',
          ],
          highlight: 'Una operación conversacional más organizada, medible y lista para crecer.',
        },
      ],
    },

    cases: {
      eyebrow: 'WE BELIEVE IN.BOT',
      title: 'Voces que confían en InBot',
      subtitle: 'Clientes que estructuraron sus operaciones conversacionales con InBot.',
      // Testimonios en portugués original — traducción editorial pendiente de aprobación
      testimonials: [
        {
          wordmark: 'Bradesco',
          logo: '/assets/testimonials/bradesco.png',
          quote: 'A InBot deu oportunidade de reduzir a quantidade de mensagens respondidas por um analista e agilizou o nosso atendimento no facebook. Com isso nossos analistas pode se ocupar em resolver problemas mais complexos, e deixar que o bot responda as perguntas mais simples e corriqueiras.',
          person: 'Rosane Ferreira Silva',
          area: 'Bradesco-CDEC',
        },
        {
          wordmark: 'TecBan',
          logo: '/assets/testimonials/tecban.png',
          quote: 'Foi e continua sendo uma parceria de muito sucesso. Conseguimos implantar nosso chatbot, construímos juntos a jornada do cliente e assim entregamos o Téo. Ainda temos muito para fazer, mas como fase inicial foi um sucesso!!!',
          person: 'Alexandra Muniz',
          area: 'Atención al cliente – Tecban',
        },
        {
          wordmark: 'Ambev',
          logo: '/assets/testimonials/logo-ambev.jpg',
          quote: 'Escolhemos a InBot como parceira na jornada de transformação digital da área de Gente, onde uma das estratégias é lançar mão da automação e inteligência artificial, sem nunca perder a humanização de vista. Estamos apenas no início, mas com grandes conquistas até aqui! Lupi nasceu para somar na experiência dos nossos usuários, entregando não só fácil acesso e aumento de produtividade como, principalmente, valor e cuidado.',
          person: 'Renata Guimarães Figueiredo',
          area: 'Gente y Gestión Ambev',
        },
      ],
    },

    content: {
      badge: 'Contenido',
      headline: 'Operación conversacional: aprenda de quienes operan',
      subtext: 'Contenido técnico y estratégico para quienes deciden y quienes ejecutan.',
      items: [
        { tag: 'Estrategia', title: 'Qué es la infraestructura conversacional y por qué su empresa la necesita',                   date: 'Próximamente' },
        { tag: 'Producto',   title: 'Cómo estructurar agentes con gobernanza en operaciones de gran escala',                       date: 'Próximamente' },
        { tag: 'Datos',      title: 'De la conversación al dato: cómo transformar interacciones en inteligencia operativa',         date: 'Próximamente' },
      ],
    },

    faq: {
      badge: 'Preguntas frecuentes',
      headline: 'Preguntas que todo decisor hace',
      items: [
        {
          question: '¿InBot reemplaza mi atención humana?',
          answer: 'No. InBot es infraestructura conversacional — organiza, orquesta y escala la operación, pero el nivel de automatización y el rol de los equipos humanos se define junto al cliente. La mayoría de las operaciones combina agentes inteligentes con intervención humana en los momentos adecuados.',
        },
        {
          question: '¿Qué canales puede integrar InBot?',
          answer: 'La plataforma soporta integración con WhatsApp, correo electrónico, voz y portales web. La disponibilidad de cada canal depende de la configuración de la operación y los requisitos técnicos del entorno del cliente. Los detalles se mapean durante el proceso de implementación.',
        },
        {
          question: '¿La plataforma funciona con datos y bases internas?',
          answer: 'Sí. InBot está diseñada para operar conectada a bases de datos, CRMs, ERPs y sistemas legados del cliente. La integración se planifica caso a caso, respetando la arquitectura y las políticas de seguridad de cada organización.',
        },
        {
          question: '¿Cómo garantiza InBot la gobernanza y la consistencia?',
          answer: 'La gobernanza es nativa de la plataforma — no es un complemento. Esto incluye reglas de negocio configurables, registros de interacción, auditoría de decisiones de los agentes y control de permisos por perfil. La operación es trazable de principio a fin.',
        },
        {
          question: '¿InBot usa IA generativa?',
          answer: 'Sí, con curación. La plataforma permite el uso de modelos de lenguaje (LLMs) dentro de límites de negocio definidos — alcance, contexto, restricciones y reglas de escalado. La IA opera dentro de lo que la operación permite, no de forma irrestricta.',
        },
        {
          question: '¿Cuánto tiempo lleva iniciar una operación?',
          answer: 'El tiempo de implementación varía según la complejidad de la operación, los canales involucrados y el nivel de integración con los sistemas existentes. InBot trabaja con una metodología estructurada de onboarding — el plazo se define tras el diagnóstico inicial.',
        },
      ],
    },

    finalCTA: {
      badge: 'Hablar con InBot',
      headline: '¿Listo para organizar su operación conversacional?',
      subtext:
        'Hable con un especialista de InBot y entienda cómo estructurar datos, agentes, canales y jornadas en una operación cohesionada.',
      cta:          { label: 'Hablar con InBot',     href: '#contato' },
      ctaSecondary: { label: 'Conocer la plataforma', href: '#plataforma' },
    },

    footerLocation: {
      badge: 'Ubicación',
      headline: 'Dónde estamos',
      subtext: 'Nuestro espacio en São Paulo para innovación, tecnología y conversación.',
      addressLabel: 'Dirección',
      mapsLink: 'Abrir en Google Maps',
      iframeTitle: 'Ubicación InBot — Espaço InovaBra Habitat, Av. Angélica 2529, São Paulo SP',
      ariaLabel: 'Ubicación de InBot en São Paulo',
    },

    footer: {
      brand: 'InBot',
      tagline: 'Infraestructura conversacional para operaciones a escala.',
      columns: [
        {
          title: 'Plataforma',
          links: [
            { label: 'Datos',    href: '#plataforma' },
            { label: 'Agentes',  href: '#plataforma' },
            { label: 'Canales',  href: '#plataforma' },
            { label: 'Jornadas', href: '#plataforma' },
          ],
        },
        {
          title: 'Soluciones',
          links: [
            { label: 'Atención al cliente', href: '#solucoes' },
            { label: 'RRHH',               href: '#solucoes' },
            { label: 'Cobros',             href: '#solucoes' },
            { label: 'Municipios',         href: '#solucoes' },
          ],
        },
        {
          title: 'Contenido',
          links: [
            { label: 'Blog',  href: '#conteudo' },
            { label: 'Casos', href: '#cases' },
          ],
        },
        {
          title: 'Contacto',
          links: [
            { label: 'Hablar con InBot', href: '#contato' },
            { label: 'InTable',          href: 'https://intable.inbot.com.br/' },
          ],
        },
      ],
      legal: '© 2025 InBot. Todos los derechos reservados.',
    },
  },
}
