// AnimatedCTA v3 — micro-animation refinada
// Arrow: 380ms cubic-bezier(0.16,1,0.3,1) + translate 6px
// Circle: width+filter transition — brightness boost dá presença antes de expandir
// Pill: scale(1.012) no hover
// Text: 420ms mesmo cubic-bezier para consistência
// prefers-reduced-motion: motion-safe:* desativa transitions e transforms

const VARIANTS = {
  light: {
    // Usado no Hero — fundo Aurora escuro
    pill:       'bg-[#0c0a3b] border border-[rgba(21,183,254,0.28)]',
    circle:     'bg-[#15b7fe]',           // Nebulosa — fill vibrante no hover
    arrowColor: 'text-[#0c0a3b]',         // Aurora — contraste sobre Nebulosa
    textBase:   'text-cintilante',
    textHover:  'group-hover:text-[#0c0a3b]',
    ring:       'focus-visible:ring-nebulosa focus-visible:ring-offset-aurora',
  },
  dark: {
    // Usado em seções claras — pill quase branco
    pill:       'bg-[#f5f7ff] border border-[rgba(0,101,254,0.2)]',
    circle:     'bg-[#0065fe]',           // Núcleo — fill azul sólido
    arrowColor: 'text-[#f5f7ff]',         // Branco — contraste sobre Núcleo
    textBase:   'text-aurora',
    textHover:  'group-hover:text-[#f5f7ff]',
    ring:       'focus-visible:ring-nucleo focus-visible:ring-offset-white',
  },
  gradient: {
    // Usado no MidCTA — fundo Abismo
    pill:       'bg-[#023c8f] border border-[rgba(235,235,237,0.18)]',
    circle:     'bg-[#ebebed]',           // Cintilante (quase branco)
    arrowColor: 'text-[#0c0a3b]',         // Aurora — contraste sobre Cintilante
    textBase:   'text-cintilante',
    textHover:  'group-hover:text-[#0c0a3b]',
    ring:       'focus-visible:ring-white focus-visible:ring-offset-nucleo',
  },
}

export function AnimatedCTA({ href, children, variant = 'light', className = '' }) {
  const v = VARIANTS[variant] ?? VARIANTS.light

  return (
    <div
      data-animated-cta
      className={['group relative inline-flex', className].join(' ')}
    >
      <a
        href={href}
        className={[
          'relative inline-flex h-[52px] items-center rounded-full overflow-hidden',
          'pl-1 pr-6',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          // Pill: scale sutil no hover — max 1.012 conforme spec
          'motion-safe:transition-transform motion-safe:duration-[420ms]',
          'motion-safe:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
          'motion-safe:group-hover:scale-[1.012]',
          v.pill,
          v.ring,
        ].join(' ')}
      >
        {/* Círculo expansível — z-0, absoluto, começa 44×44px e cresce até preencher o pill */}
        {/* brightness-[1.12] dá presença visual antes de expandir por completo */}
        <span
          aria-hidden="true"
          className={[
            'absolute left-1 top-1/2 -translate-y-1/2',
            'h-[44px] w-[44px] rounded-full',
            'motion-safe:transition-[width,filter] motion-safe:duration-[500ms]',
            'motion-safe:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
            'group-hover:w-[calc(100%_-_8px)]',
            'motion-safe:group-hover:brightness-[1.12]',
            v.circle,
          ].join(' ')}
        />

        {/* Seta — z-10, acima do círculo */}
        <span
          aria-hidden="true"
          className="relative z-10 flex h-[44px] w-[44px] shrink-0 items-center justify-center"
        >
          <span
            className={[
              'text-base leading-none font-medium select-none',
              'motion-safe:transition-transform motion-safe:duration-[380ms]',
              'motion-safe:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
              'motion-safe:group-hover:translate-x-[6px]',
              v.arrowColor,
            ].join(' ')}
          >
            →
          </span>
        </span>

        {/* Texto do botão */}
        <span
          className={[
            'relative z-10 pl-2',
            'text-sm font-semibold tracking-wide whitespace-nowrap',
            'motion-safe:transition-colors motion-safe:duration-[420ms]',
            'motion-safe:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
            v.textBase,
            v.textHover,
          ].join(' ')}
        >
          {children}
        </span>
      </a>
    </div>
  )
}
