// Eyebrow premium do Hero: "›› SOMOS A INBOT ‹‹"
// Chevrons animados nas laterais com glide suave e stagger.
// Respeita prefers-reduced-motion via CSS.

function Chevron({ char, delay }) {
  const isLeft = char === '‹'
  return (
    <span
      aria-hidden="true"
      className={isLeft ? 'inbot-eyebrow-chevron-left' : 'inbot-eyebrow-chevron-right'}
      style={{ animationDelay: delay }}
    >
      {char}
    </span>
  )
}

export function HeroEyebrow({ children }) {
  return (
    <div
      className="inline-flex items-center justify-center gap-2.5"
      role="text"
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {/* Chevrons esquerdos (animam para a direita) */}
      <span className="flex items-center gap-[3px]">
        <Chevron char="›" delay="0.18s" />
        <Chevron char="›" delay="0s"    />
      </span>

      {/* Texto do eyebrow */}
      <span className="text-[14px] lg:text-[16px] font-semibold tracking-[0.2em] uppercase text-[rgba(21,183,254,0.75)]">
        {children}
      </span>

      {/* Chevrons direitos (animam para a esquerda) */}
      <span className="flex items-center gap-[3px]">
        <Chevron char="‹" delay="0s"    />
        <Chevron char="‹" delay="0.18s" />
      </span>
    </div>
  )
}
