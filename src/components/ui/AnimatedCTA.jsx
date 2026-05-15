const VARIANTS = {
  // Fundos escuros — Hero, FinalCTA
  light: {
    inner:      'bg-[rgba(12,10,59,0.97)] text-cintilante',
    circle:     'bg-[rgba(21,183,254,0.14)] border border-[rgba(21,183,254,0.45)]',
    arrowColor: 'text-nebulosa',
    ring:       'focus-visible:ring-nebulosa focus-visible:ring-offset-aurora',
    track:      'rgba(21,183,254,0.12)',
    chaseA:     'rgba(0,101,254,0.85)',
    chaseB:     'rgba(21,183,254,1.0)',
  },
  // Fundos claros
  dark: {
    inner:      'bg-[rgba(245,247,255,0.97)] text-aurora',
    circle:     'bg-[rgba(0,101,254,0.1)] border border-[rgba(0,101,254,0.35)]',
    arrowColor: 'text-nucleo',
    ring:       'focus-visible:ring-nucleo focus-visible:ring-offset-white',
    track:      'rgba(0,101,254,0.12)',
    chaseA:     'rgba(0,101,254,0.9)',
    chaseB:     'rgba(0,101,254,1.0)',
  },
  // Fundo gradiente — MidCTA
  gradient: {
    inner:      'bg-[rgba(2,60,143,0.9)] text-cintilante',
    circle:     'bg-[rgba(255,255,255,0.13)] border border-[rgba(255,255,255,0.35)]',
    arrowColor: 'text-cintilante',
    ring:       'focus-visible:ring-white focus-visible:ring-offset-nucleo',
    track:      'rgba(255,255,255,0.12)',
    chaseA:     'rgba(235,235,237,0.65)',
    chaseB:     'rgba(21,183,254,0.9)',
  },
}

export function AnimatedCTA({ href, children, variant = 'light', className = '' }) {
  const v = VARIANTS[variant] ?? VARIANTS.light

  // Gradiente do rotator: trilha faint + arco de chase
  const borderBg = `conic-gradient(from 0deg, ${v.track} 0%, ${v.track} 80%, ${v.chaseA} 90%, ${v.chaseB} 94%, ${v.chaseA} 98%, ${v.track} 100%)`

  return (
    <a
      href={href}
      data-animated-cta
      className={[
        // Wrapper: o p-[1px] cria o espaço de 1px onde a borda aparece
        'group relative inline-flex rounded-full p-[1px] overflow-hidden',
        // Foco acessível
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        v.ring,
        className,
      ].join(' ')}
    >
      {/* Rotator da borda — quadrado grande, clipado ao pill pelo overflow-hidden do pai */}
      <span
        aria-hidden="true"
        className="inbot-cta-border absolute"
        style={{ background: borderBg }}
      />

      {/* Conteúdo interno — cobre o centro, deixa apenas o 1px de borda visível */}
      <span
        className={[
          'relative z-10 inline-flex items-center h-12 rounded-full',
          'pl-6 pr-2 gap-3',
          'text-sm font-semibold tracking-wide whitespace-nowrap',
          'transition-colors duration-300',
          v.inner,
        ].join(' ')}
      >
        <span>{children}</span>

        {/* Círculo com seta */}
        <span
          aria-hidden="true"
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${v.circle}`}
        >
          <span className={`inbot-cta-arrow inline-block text-sm leading-none ${v.arrowColor}`}>
            →
          </span>
        </span>
      </span>
    </a>
  )
}
