import { Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { useLanguage } from '../../context/LanguageContext'

function OrbitDiagram({ nodes }) {
  return (
    <div
      className="relative w-full max-w-[520px] mx-auto aspect-square flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,101,254,0.2)_0%,transparent_62%)] pointer-events-none" />

      {/* SVG: rings, radial guides, pulse beams */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        overflow="visible"
      >
        {/* Static rings — outer (r=42), middle (r=30), inner (r=18) */}
        <circle cx="50" cy="50" r="42" stroke="rgba(21,183,254,0.09)" strokeWidth="0.28" />
        <circle cx="50" cy="50" r="30" stroke="rgba(21,183,254,0.13)" strokeWidth="0.28" />
        <circle cx="50" cy="50" r="18" stroke="rgba(0,101,254,0.22)"  strokeWidth="0.28" />

        {/* Static radial lines — dashed guide from center to each node */}
        {nodes.map((_, i) => {
          const angle = (i * 360) / nodes.length
          const rad = ((angle - 90) * Math.PI) / 180
          const r = 38
          const x = 50 + r * Math.cos(rad)
          const y = 50 + r * Math.sin(rad)
          return (
            <line
              key={i}
              x1="50" y1="50" x2={x} y2={y}
              stroke="rgba(21,183,254,0.11)"
              strokeWidth="0.22"
              strokeDasharray="1.5 2.5"
            />
          )
        })}

        {/* Radial pulse beams — energy shooting from center to each node.
            stroke-dasharray: 5 33 → 5-unit segment on a 38-unit line (exact fit).
            Each beam is staggered by 0.65s so the firing ripples around the orbit. */}
        {nodes.map((_, i) => {
          const angle = (i * 360) / nodes.length
          const rad = ((angle - 90) * Math.PI) / 180
          const r = 38
          const x = 50 + r * Math.cos(rad)
          const y = 50 + r * Math.sin(rad)
          return (
            <line
              key={`p${i}`}
              x1="50" y1="50" x2={x} y2={y}
              stroke="rgba(21,183,254,0.52)"
              strokeWidth="0.38"
              strokeLinecap="round"
              className="inbot-radial-pulse"
              style={{ animationDelay: `${(i * 0.65).toFixed(2)}s` }}
            />
          )
        })}

        {/* Outer ring beam — clockwise, starts at 12 o'clock */}
        <circle
          cx="50" cy="50" r="42"
          stroke="rgba(21,183,254,0.72)"
          strokeWidth="0.55"
          strokeLinecap="round"
          pathLength="100"
          transform="rotate(-90 50 50)"
          className="inbot-orbit-beam"
        />

        {/* Middle ring beam — counterclockwise, offset to ~2 o'clock for visual variety */}
        <circle
          cx="50" cy="50" r="30"
          stroke="rgba(0,101,254,0.55)"
          strokeWidth="0.45"
          strokeLinecap="round"
          pathLength="100"
          transform="rotate(60 50 50)"
          className="inbot-orbit-beam-ccw"
        />
      </svg>

      {/* Center nucleus */}
      <div className="relative z-10 flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-nucleo to-nebulosa inbot-orbit-nucleus">
        <span
          className="text-white font-bold text-base tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          InBot
        </span>
        <span className="text-[rgba(255,255,255,0.6)] text-[10px]">núcleo</span>
      </div>

      {/* Node chips */}
      {nodes.map((label, i) => {
        const angle = (i * 360) / nodes.length
        const rad = ((angle - 90) * Math.PI) / 180
        const r = 38
        const x = 50 + r * Math.cos(rad)
        const y = 50 + r * Math.sin(rad)
        return (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
          >
            <div className="inbot-orbit-chip px-3 py-1.5 rounded-full text-[11px] font-semibold text-nebulosa bg-[rgba(12,10,59,0.92)] border border-[rgba(21,183,254,0.28)] whitespace-nowrap">
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
