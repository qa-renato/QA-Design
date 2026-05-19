// AnimatedCTA v4 — contorno SVG animado + troca de setas no hover
// SVG <rect> com pathLength="500" normaliza o perímetro: stroke-dasharray="150 350"
// → beam de 30% do perímetro percorre o pill em loop linear 1.5s.
// Layout: CSS Grid 40px|auto|40px na <a> — colunas fixas garantem que o
// texto não se mova quando as setas trocam de estado (scale+opacity, não width).
// Variantes: light (Hero escuro), dark (seções claras), gradient (MidCTA Abismo).
// prefers-reduced-motion: animação do stroke parada, transitions das setas removidas.

const ArrowIcon = ({ dir }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    {dir === 'right' ? (
      <path
        d="M2 7h10M8.5 3.5 12 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M12 7H2M5.5 3.5 2 7l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
)

const VARIANTS = {
  light: {
    // FinalCTA e contextos de fundo escuro (Aurora)
    wrapperBorder: 'border-[rgba(21,183,254,0.22)]',
    stroke:        '#15b7fe',                                         // Nebulosa
    inner:         'bg-[#0c0a3b]',                                    // Aurora
    text:          'text-[#ebebed]',                                  // Cintilante
    arrowBg:       'bg-[rgba(21,183,254,0.14)] border border-[rgba(21,183,254,0.28)]',
    arrowColor:    'text-[#ebebed]',
    ring:          'focus-visible:ring-[#15b7fe] focus-visible:ring-offset-[#0c0a3b]',
  },
  dark: {
    // Seções com fundo claro
    wrapperBorder: 'border-[rgba(0,101,254,0.22)]',
    stroke:        '#0065fe',                                         // Núcleo
    inner:         'bg-[#f5f7ff]',
    text:          'text-[#0c0a3b]',                                  // Aurora
    arrowBg:       'bg-[rgba(0,101,254,0.10)] border border-[rgba(0,101,254,0.2)]',
    arrowColor:    'text-[#0c0a3b]',
    ring:          'focus-visible:ring-[#0065fe] focus-visible:ring-offset-white',
  },
  gradient: {
    // MidCTA — fundo Abismo (#023c8f)
    wrapperBorder: 'border-[rgba(235,235,237,0.2)]',
    stroke:        '#ebebed',                                         // Cintilante
    inner:         'bg-[#023c8f]',                                    // Abismo
    text:          'text-[#ebebed]',
    arrowBg:       'bg-[rgba(235,235,237,0.12)] border border-[rgba(235,235,237,0.24)]',
    arrowColor:    'text-[#ebebed]',
    ring:          'focus-visible:ring-white focus-visible:ring-offset-[#023c8f]',
  },
}

export function AnimatedCTA({ href, children, variant = 'light', className = '' }) {
  const v = VARIANTS[variant] ?? VARIANTS.light

  return (
    <div
      data-animated-cta
      className={[
        'relative inline-flex rounded-full p-1 border',
        v.wrapperBorder,
        className,
      ].join(' ')}
      style={{ '--inbot-discover-stroke': v.stroke }}
    >
      {/* Contorno SVG animado — inset-0, stroke percorre o pill em loop */}
      {/* viewBox 300×56 + preserveAspectRatio="none" estica para qualquer largura */}
      {/* pathLength="500" normaliza perímetro → dasharray independente de tamanho */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 300 56"
        preserveAspectRatio="none"
      >
        <rect
          x="1" y="1"
          width="298" height="54"
          rx="27"
          fill="none"
          stroke="var(--inbot-discover-stroke)"
          strokeWidth="1.5"
          pathLength="500"
          className="inbot-discover-border"
        />
      </svg>

      {/* Link interno — z-10 acima do SVG */}
      {/* Grid 40px|auto|40px: colunas fixas → texto não se move quando setas trocam */}
      <a
        href={href}
        className={[
          'relative z-10 grid grid-cols-[40px_auto_40px] items-center',
          'rounded-full overflow-hidden h-[44px] px-2',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          v.inner,
          v.ring,
        ].join(' ')}
      >
        {/* Seta esquerda — scale(0)/opacity:0 em repouso, aparece no hover */}
        <span
          aria-hidden="true"
          className={['inbot-discover-arrow inbot-discover-arrow-left', v.arrowBg, v.arrowColor].join(' ')}
        >
          <ArrowIcon dir="left" />
        </span>

        {/* Texto — centrado na coluna auto; não se move porque colunas são fixas */}
        <span
          className={[
            'text-center text-sm font-semibold tracking-wide whitespace-nowrap px-3',
            v.text,
          ].join(' ')}
        >
          {children}
        </span>

        {/* Seta direita — scale(1)/opacity:1 em repouso, some no hover */}
        <span
          aria-hidden="true"
          className={['inbot-discover-arrow inbot-discover-arrow-right', v.arrowBg, v.arrowColor].join(' ')}
        >
          <ArrowIcon dir="right" />
        </span>
      </a>
    </div>
  )
}
