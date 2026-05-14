import { useId } from 'react'

// Variant configs keyed by background context
const VARIANTS = {
  // Dark backgrounds — Hero, FinalCTA
  light: {
    pill: 'bg-[rgba(255,255,255,0.04)] text-cintilante',
    circle: 'bg-[rgba(21,183,254,0.14)] border border-[rgba(21,183,254,0.45)]',
    arrowColor: 'text-nebulosa',
    ring: 'focus-visible:ring-nebulosa focus-visible:ring-offset-aurora',
    stopA: '#15b7fe',
    stopB: '#0065fe',
    dashOp: 0.65,
    trackOp: 0.17,
    dashHoverOp: 1,
    trackHoverOp: 0.36,
  },
  // Light backgrounds
  dark: {
    pill: 'bg-[rgba(0,101,254,0.05)] text-aurora',
    circle: 'bg-[rgba(0,101,254,0.1)] border border-[rgba(0,101,254,0.35)]',
    arrowColor: 'text-nucleo',
    ring: 'focus-visible:ring-nucleo focus-visible:ring-offset-white',
    stopA: '#0065fe',
    stopB: '#023c8f',
    dashOp: 0.7,
    trackOp: 0.2,
    dashHoverOp: 1,
    trackHoverOp: 0.4,
  },
  // Gradient backgrounds — MidCTA
  gradient: {
    pill: 'bg-[rgba(255,255,255,0.05)] text-cintilante',
    circle: 'bg-[rgba(255,255,255,0.13)] border border-[rgba(255,255,255,0.35)]',
    arrowColor: 'text-cintilante',
    ring: 'focus-visible:ring-white focus-visible:ring-offset-nucleo',
    stopA: '#ebebed',
    stopB: '#15b7fe',
    dashOp: 0.55,
    trackOp: 0.17,
    dashHoverOp: 0.95,
    trackHoverOp: 0.35,
  },
}

export function AnimatedCTA({ href, children, variant = 'light', className = '' }) {
  const uid = useId().replace(/:/g, '')
  const gradId = `ib-g-${uid}`
  const v = VARIANTS[variant] ?? VARIANTS.light

  return (
    <div
      data-animated-cta
      className={`relative inline-flex ${className}`}
      style={{
        '--inbot-dash-op': v.dashOp,
        '--inbot-track-op': v.trackOp,
        '--inbot-dash-hover-op': v.dashHoverOp,
        '--inbot-track-hover-op': v.trackHoverOp,
      }}
    >
      {/* SVG animated border — pointer-events-none, never blocks clicks */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={v.stopA} />
            <stop offset="100%" stopColor={v.stopB} />
          </linearGradient>
        </defs>
        {/* Borda sutil estática */}
        <rect
          x="0" y="0" width="100%" height="100%" rx="999"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="1"
          className="inbot-cta-track"
        />
        {/* Traço animado percorrendo o contorno */}
        <rect
          x="0" y="0" width="100%" height="100%" rx="999"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="1.5"
          pathLength="100"
          strokeDasharray="22 78"
          className="inbot-cta-dash"
        />
      </svg>

      {/* Pill link: [ texto ] [ ○ → ] */}
      <a
        href={href}
        className={[
          'relative inline-flex items-center h-12 rounded-full',
          'pl-6 pr-2 gap-3',
          'text-sm font-semibold tracking-wide whitespace-nowrap',
          'transition-colors duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          v.pill,
          v.ring,
        ].join(' ')}
      >
        <span>{children}</span>

        {/* Círculo com seta — círculo fixo, seta desloca no hover */}
        <span
          aria-hidden="true"
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${v.circle}`}
        >
          <span className={`inbot-cta-arrow inline-block text-sm leading-none ${v.arrowColor}`}>
            →
          </span>
        </span>
      </a>
    </div>
  )
}
