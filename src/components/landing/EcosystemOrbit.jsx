import { Badge } from '../ui/Badge'
import { ecosystem } from '../../data/landingContent'

function OrbitDiagram() {
  const nodes = ecosystem.nodes
  return (
    <div
      className="relative w-full max-w-[520px] mx-auto aspect-square flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Glow de fundo */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,101,254,0.18)_0%,transparent_60%)]" />

      {/* Anéis */}
      <div className="absolute inset-[8%]  rounded-full border border-[rgba(21,183,254,0.08)]" />
      <div className="absolute inset-[20%] rounded-full border border-[rgba(21,183,254,0.13)]" />
      <div className="absolute inset-[32%] rounded-full border border-[rgba(0,101,254,0.25)]" />

      {/* Núcleo */}
      <div className="relative z-10 flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-nucleo to-nebulosa shadow-[0_0_50px_rgba(0,101,254,0.55)]">
        <span
          className="text-white font-bold text-base tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          InBot
        </span>
        <span className="text-[rgba(255,255,255,0.6)] text-[10px]">núcleo</span>
      </div>

      {/* SVG linhas */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {nodes.map((_, i) => {
          const angle = (i * 360) / nodes.length
          const rad = ((angle - 90) * Math.PI) / 180
          const r = 38
          const x = 50 + r * Math.cos(rad)
          const y = 50 + r * Math.sin(rad)
          return (
            <line
              key={i}
              x1="50" y1="50"
              x2={x} y2={y}
              stroke="rgba(21,183,254,0.1)"
              strokeWidth="0.5"
              strokeDasharray="2 3"
            />
          )
        })}
      </svg>

      {/* Nós */}
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
            <div className="px-3 py-1.5 rounded-full text-[11px] font-semibold text-nebulosa bg-[rgba(12,10,59,0.9)] border border-[rgba(21,183,254,0.3)] shadow-[0_0_12px_rgba(21,183,254,0.15)] whitespace-nowrap">
              {label}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function EcosystemOrbit() {
  return (
    <section
      className="bg-aurora py-20 lg:py-28 overflow-hidden"
      aria-label="Ecossistema InBot"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Diagrama */}
          <div className="order-2 lg:order-1">
            <OrbitDiagram />
          </div>

          {/* Texto */}
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
      </div>
    </section>
  )
}
