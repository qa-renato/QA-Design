// HeroRobot — avatar SVG inline, zero dependências externas
// Visual: esfera gradiente Aurora→Abismo, visor Nebulosa, orbit ring com beam
// Motion: float CSS + orbit beam CSS, entrance com delay 0.72s
// wrapperClassName controla visibilidade/display — default: hidden md:flex
// size: 'default' (220/260px) | 'large' (300/360px)

export function HeroRobot({ wrapperClassName = 'hidden md:flex', size = 'default' }) {
  const sizeClass = size === 'large'
    ? 'w-[300px] xl:w-[360px]'
    : 'w-[220px] lg:w-[260px]'

  return (
    <div
      className={`${wrapperClassName} justify-center items-center inbot-robot-appear`}
      aria-hidden="true"
    >
      <div className={`relative ${sizeClass} inbot-robot-float`}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Gradiente da cabeça — highlight Abismo no centro, Aurora na borda */}
            <radialGradient id="rb-head" cx="42%" cy="36%" r="60%">
              <stop offset="0%"   stopColor="#023c8f" />
              <stop offset="55%"  stopColor="#0c0a3b" />
              <stop offset="100%" stopColor="#060524" />
            </radialGradient>

            {/* Gradiente do visor — Núcleo nas bordas, Nebulosa no centro */}
            <linearGradient id="rb-visor" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(0,101,254,0.28)" />
              <stop offset="32%"  stopColor="rgba(21,183,254,0.95)" />
              <stop offset="68%"  stopColor="rgba(21,183,254,0.95)" />
              <stop offset="100%" stopColor="rgba(0,101,254,0.28)" />
            </linearGradient>

            {/* Glow backdrop radial */}
            <radialGradient id="rb-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="rgba(0,101,254,0.16)" />
              <stop offset="62%"  stopColor="rgba(21,183,254,0.05)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>

          {/* Glow de fundo — integra com o bg-aurora do Hero */}
          <circle cx="100" cy="100" r="92" fill="url(#rb-bg)" />

          {/* Orbit ring estático */}
          <circle
            cx="100" cy="100" r="74"
            stroke="rgba(21,183,254,0.09)" strokeWidth="0.5" fill="none"
          />

          {/* Orbit beam animado (reusa keyframe inbot-orbit-sweep) */}
          <circle
            cx="100" cy="100" r="74"
            stroke="rgba(21,183,254,0.60)" strokeWidth="0.6" strokeLinecap="round"
            fill="none" pathLength="100"
            transform="rotate(-90 100 100)"
            className="inbot-robot-orbit-beam"
          />

          {/* Shadow/glow da cabeça — layer deslocada para dar profundidade */}
          <circle
            cx="100" cy="104" r="46"
            fill="rgba(0,101,254,0.10)"
            style={{ filter: 'blur(9px)' }}
          />

          {/* Esfera da cabeça */}
          <circle cx="100" cy="100" r="46" fill="url(#rb-head)" />

          {/* Borda da cabeça — glow Nebulosa suave */}
          <circle
            cx="100" cy="100" r="46"
            stroke="rgba(21,183,254,0.36)" strokeWidth="0.9" fill="none"
          />

          {/* Anel interno — cria sensação de profundidade/lente */}
          <circle
            cx="100" cy="100" r="37"
            stroke="rgba(21,183,254,0.055)" strokeWidth="0.4" fill="none"
          />

          {/* Highlight especular — reflexo de luz top-left */}
          <ellipse
            cx="88" cy="82" rx="12" ry="7"
            fill="rgba(235,235,237,0.042)"
          />

          {/* Visor glow (backdrop blur) */}
          <rect
            x="66" y="94" width="68" height="12" rx="6"
            fill="rgba(21,183,254,0.13)"
            style={{ filter: 'blur(4px)' }}
          />

          {/* Visor bar — elemento de identidade principal */}
          <rect
            x="72" y="96" width="56" height="8" rx="4"
            fill="url(#rb-visor)"
          />

          {/* Linha de queixo — detalhe geométrico sutil */}
          <line
            x1="88" y1="116" x2="112" y2="116"
            stroke="rgba(21,183,254,0.10)" strokeWidth="0.6"
          />

          {/* Conector de pescoço — ancora a esfera visualmente */}
          <rect
            x="95" y="146" width="10" height="5" rx="2.5"
            fill="rgba(0,101,254,0.26)"
          />
        </svg>
      </div>
    </div>
  )
}
