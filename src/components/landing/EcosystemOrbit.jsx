import { Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { useLanguage } from '../../context/LanguageContext'

// Chip que orbita ao redor do centro.
// Técnica: wrapper roda em CW/CCW (transform-origin: 0 0 = centro do container),
// arm translada para fora, counter div contra-roda para o chip ficar sempre upright.
function OrbitingChip({ label, duration, index, total, reverse }) {
  const delay = `${(-(index / total) * duration).toFixed(2)}s`
  const spinFwd = `inbot-chip-orbit-${reverse ? 'ccw' : 'cw'} ${duration}s linear infinite`
  const spinRev = `inbot-chip-orbit-${reverse ? 'cw' : 'ccw'} ${duration}s linear infinite`
  const radiusVar = `var(--eco-orbit-${reverse ? 'inner' : 'outer'})`

  return (
    <div
      className="absolute left-1/2 top-1/2 w-0 h-0 will-change-transform"
      style={{ animation: spinFwd, animationDelay: delay, transformOrigin: '0 0' }}
    >
      <div style={{ transform: `translateX(${radiusVar})` }}>
        {/* contra-rotação — mantém chip upright */}
        <div style={{ animation: spinRev, animationDelay: delay }}>
          {/* centraliza o chip no ponto da órbita */}
          <div
            className="inbot-ecosystem-chip px-3 py-[6px] rounded-full text-[11px] font-semibold text-nebulosa bg-[rgba(12,10,59,0.92)] border border-[rgba(21,183,254,0.28)] whitespace-nowrap"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}

function OrbitDiagram({ nodes }) {
  // Outer orbit (CW): primeiros 5 nodes  |  Inner orbit (CCW): último node
  const outerNodes = nodes.slice(0, 5)
  const innerNodes = nodes.slice(5)

  return (
    <div
      className="relative w-full max-w-[520px] mx-auto aspect-square flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Ambient glow orbs */}
      <div className="inbot-ecosystem-glow inbot-ecosystem-glow--1 pointer-events-none" />
      <div className="inbot-ecosystem-glow inbot-ecosystem-glow--2 pointer-events-none" />
      <div className="inbot-ecosystem-glow inbot-ecosystem-glow--3 pointer-events-none" />

      {/* SVG: rings, tick marks, orbital beams */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        overflow="visible"
      >
        <defs>
          <filter id="eco-beam-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.55" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbital rings — outer (r=42), middle (r=30), inner (r=18) */}
        <circle cx="50" cy="50" r="42" stroke="rgba(21,183,254,0.09)" strokeWidth="0.28" />
        <circle cx="50" cy="50" r="30" stroke="rgba(21,183,254,0.13)" strokeWidth="0.28" />
        <circle cx="50" cy="50" r="18" stroke="rgba(0,101,254,0.22)"  strokeWidth="0.28" />

        {/* Tick marks on outer ring — 12 markers */}
        {Array.from({ length: 12 }).map((_, i) => {
          const ang = ((i * 30) - 90) * (Math.PI / 180)
          return (
            <line
              key={i}
              x1={50 + 41.1 * Math.cos(ang)} y1={50 + 41.1 * Math.sin(ang)}
              x2={50 + 42.9 * Math.cos(ang)} y2={50 + 42.9 * Math.sin(ang)}
              stroke="rgba(21,183,254,0.22)"
              strokeWidth="0.24"
            />
          )
        })}

        {/* Outer orbital beam — clockwise */}
        <circle
          cx="50" cy="50" r="42"
          stroke="rgba(21,183,254,0.82)"
          strokeWidth="0.62"
          strokeLinecap="round"
          pathLength="100"
          transform="rotate(-90 50 50)"
          className="inbot-ecosystem-beam inbot-ecosystem-beam--outer"
          filter="url(#eco-beam-glow)"
        />

        {/* Inner orbital beam — counterclockwise */}
        <circle
          cx="50" cy="50" r="30"
          stroke="rgba(0,101,254,0.65)"
          strokeWidth="0.48"
          strokeLinecap="round"
          pathLength="100"
          transform="rotate(60 50 50)"
          className="inbot-ecosystem-beam inbot-ecosystem-beam--inner"
        />
      </svg>

      {/* Center nucleus */}
      <div
        className="relative z-10 flex flex-col items-center justify-center w-24 h-24 rounded-2xl inbot-ecosystem-core"
        style={{ background: 'linear-gradient(145deg, #0c0a3b 0%, #0d3690 48%, #0065fe 100%)' }}
      >
        <div className="absolute inset-[7px] rounded-[14px] border border-[rgba(21,183,254,0.20)]" />
        <div className="absolute inset-[13px] rounded-[10px] border border-[rgba(21,183,254,0.11)]" />
        <span
          className="relative z-10 text-white font-bold text-base tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          InBot
        </span>
        <span className="relative z-10 text-[rgba(21,183,254,0.72)] text-[8.5px] tracking-[0.14em] uppercase mt-[3px]">
          núcleo
        </span>
      </div>

      {/* Outer orbiting chips — CW, 24s */}
      {outerNodes.map((label, i) => (
        <OrbitingChip
          key={label}
          label={label}
          duration={24}
          index={i}
          total={outerNodes.length}
          reverse={false}
        />
      ))}

      {/* Inner orbiting chips — CCW, 16s */}
      {innerNodes.map((label, i) => (
        <OrbitingChip
          key={label}
          label={label}
          duration={16}
          index={i}
          total={Math.max(innerNodes.length, 1)}
          reverse={true}
        />
      ))}
    </div>
  )
}

export function EcosystemOrbit() {
  const { content } = useLanguage()
  const { ecosystem } = content

  return (
    <section
      className="bg-aurora py-20 lg:py-28 overflow-hidden"
      aria-label="Ecossistema InBot"
    >
      <Reveal className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <OrbitDiagram nodes={ecosystem.nodes} />
          </div>
          <div className="order-1 lg:order-2">
            <Badge variant="brand" className="mb-4">{ecosystem.badge}</Badge>
            <h2
              className="text-3xl lg:text-4xl font-bold text-cintilante mb-5 leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {ecosystem.headline}
            </h2>
            <p className="text-[rgba(235,235,237,0.55)] text-lg leading-relaxed mb-8">
              {ecosystem.subtext}
            </p>
            <div className="flex flex-wrap gap-2">
              {ecosystem.nodes.map((node) => (
                <span
                  key={node}
                  className="px-3 py-1 rounded-full text-xs font-medium text-nebulosa bg-[rgba(21,183,254,0.08)] border border-[rgba(21,183,254,0.2)]"
                >
                  {node}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
