import { Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { useLanguage } from '../../context/LanguageContext'

function OrbitDiagram({ nodes }) {
  return (
    <div
      className="relative w-full max-w-[520px] mx-auto aspect-square flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Ambient glow orbs — blurred radial gradients behind everything */}
      <div className="inbot-ecosystem-glow inbot-ecosystem-glow--1 pointer-events-none" />
      <div className="inbot-ecosystem-glow inbot-ecosystem-glow--2 pointer-events-none" />
      <div className="inbot-ecosystem-glow inbot-ecosystem-glow--3 pointer-events-none" />

      {/* SVG: rings, tick marks, radial guides, pulse beams, orbital beams */}
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

        {/* Static orbital rings — outer (r=42), middle (r=30), inner (r=18) */}
        <circle cx="50" cy="50" r="42" stroke="rgba(21,183,254,0.09)" strokeWidth="0.28" />
        <circle cx="50" cy="50" r="30" stroke="rgba(21,183,254,0.13)" strokeWidth="0.28" />
        <circle cx="50" cy="50" r="18" stroke="rgba(0,101,254,0.22)"  strokeWidth="0.28" />

        {/* Tick marks on outer ring — 12 evenly spaced markers */}
        {Array.from({ length: 12 }).map((_, i) => {
          const ang = ((i * 30) - 90) * (Math.PI / 180)
          const r1 = 41.1, r2 = 42.9
          return (
            <line
              key={i}
              x1={50 + r1 * Math.cos(ang)} y1={50 + r1 * Math.sin(ang)}
              x2={50 + r2 * Math.cos(ang)} y2={50 + r2 * Math.sin(ang)}
              stroke="rgba(21,183,254,0.22)"
              strokeWidth="0.24"
            />
          )
        })}

        {/* Connection dots on outer ring at each chip angle */}
        {nodes.map((_, i) => {
          const ang = ((i * 360 / nodes.length) - 90) * (Math.PI / 180)
          return (
            <circle
              key={`cdot${i}`}
              cx={50 + 42 * Math.cos(ang)}
              cy={50 + 42 * Math.sin(ang)}
              r="0.85"
              fill="rgba(21,183,254,0.50)"
            />
          )
        })}

        {/* Static radial guide lines — dashed from center to each chip */}
        {nodes.map((_, i) => {
          const ang = ((i * 360 / nodes.length) - 90) * (Math.PI / 180)
          const x = 50 + 38 * Math.cos(ang)
          const y = 50 + 38 * Math.sin(ang)
          return (
            <line
              key={`g${i}`}
              x1="50" y1="50" x2={x} y2={y}
              stroke="rgba(21,183,254,0.09)"
              strokeWidth="0.2"
              strokeDasharray="1.4 2.2"
            />
          )
        })}

        {/* Radial pulse lines — energy pulses traveling from nucleus to each chip */}
        {nodes.map((_, i) => {
          const ang = ((i * 360 / nodes.length) - 90) * (Math.PI / 180)
          const x = 50 + 38 * Math.cos(ang)
          const y = 50 + 38 * Math.sin(ang)
          return (
            <line
              key={`p${i}`}
              x1="50" y1="50" x2={x} y2={y}
              stroke="rgba(21,183,254,0.58)"
              strokeWidth="0.36"
              strokeLinecap="round"
              className="inbot-ecosystem-pulse"
              style={{ animationDelay: `${(i * 0.55).toFixed(2)}s` }}
            />
          )
        })}

        {/* Outer orbital beam — clockwise, glowing Nebulosa */}
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

        {/* Middle orbital beam — counterclockwise, Núcleo blue */}
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
        {/* Concentric inner ring accents */}
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

      {/* Node chips — staggered entry animation */}
      {nodes.map((label, i) => {
        const ang = ((i * 360 / nodes.length) - 90) * (Math.PI / 180)
        const x = 50 + 38 * Math.cos(ang)
        const y = 50 + 38 * Math.sin(ang)
        return (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
          >
            <div
              className="inbot-ecosystem-chip px-3 py-[6px] rounded-full text-[11px] font-semibold text-nebulosa bg-[rgba(12,10,59,0.92)] border border-[rgba(21,183,254,0.28)] whitespace-nowrap"
              style={{ animationDelay: `${(0.4 + i * 0.12).toFixed(2)}s` }}
            >
              {label}
            </div>
          </div>
        )
      })}
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
