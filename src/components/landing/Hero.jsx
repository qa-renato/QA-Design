import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { AnimatedCTA } from '../ui/AnimatedCTA'
import { hero } from '../../data/landingContent'

function OrbitalCore() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto aspect-square flex items-center justify-center select-none pointer-events-none">

      {/* Glow central */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,101,254,0.22)_0%,transparent_65%)]" />

      {/* Anel externo */}
      <div className="absolute inset-[10%] rounded-full border border-[rgba(21,183,254,0.12)]" />

      {/* Anel médio */}
      <div className="absolute inset-[22%] rounded-full border border-[rgba(21,183,254,0.18)]" />

      {/* Anel interno */}
      <div className="absolute inset-[34%] rounded-full border border-[rgba(0,101,254,0.3)]" />

      {/* Núcleo */}
      <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-nucleo to-nebulosa flex items-center justify-center shadow-[0_0_40px_rgba(0,101,254,0.5)]">
        <span
          className="text-white font-bold text-lg tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          InBot
        </span>
      </div>

      {/* Nós orbitais */}
      {[
        { label: 'Dados',      angle: 0   },
        { label: 'Agentes',   angle: 60  },
        { label: 'Canais',    angle: 120 },
        { label: 'Jornadas',  angle: 180 },
        { label: 'Dados',     angle: 240 },
        { label: 'Gov.',      angle: 300 },
      ].map((node, i) => {
        const rad = (node.angle * Math.PI) / 180
        const r = 42
        const x = 50 + r * Math.cos(rad)
        const y = 50 + r * Math.sin(rad)
        return (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
          >
            <div className="px-2 py-1 rounded-full text-[10px] font-medium text-nebulosa bg-[rgba(21,183,254,0.1)] border border-[rgba(21,183,254,0.25)] whitespace-nowrap">
              {node.label}
            </div>
          </div>
        )
      })}

      {/* Linhas de conexão — SVG */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const r = 42
          const x2 = 50 + r * Math.cos(rad)
          const y2 = 50 + r * Math.sin(rad)
          return (
            <line
              key={i}
              x1="50%" y1="50%"
              x2={`${x2}%`} y2={`${y2}%`}
              stroke="rgba(21,183,254,0.12)"
              strokeWidth="1"
            />
          )
        })}
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-aurora"
      aria-label="Hero — InBot infraestrutura conversacional"
    >
      {/* Fundos decorativos */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Ambiente central — Núcleo, presença principal */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[radial-gradient(ellipse,rgba(0,101,254,0.20)_0%,transparent_65%)]" />
        {/* Brilho de borda — Nebulosa, bottom-right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(21,183,254,0.13)_0%,transparent_65%)]" />
        {/* Profundidade lateral — Abismo, left */}
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(2,60,143,0.3)_0%,transparent_65%)]" />
        {/* Reflexo difuso — Nebulosa, bottom-left */}
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(21,183,254,0.07)_0%,transparent_65%)]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <Badge variant="accent">{hero.badge}</Badge>

            <h1
              className="text-4xl md:text-[52px] lg:text-[64px] font-bold leading-[1.1] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="bg-gradient-to-r from-cintilante via-cintilante to-nebulosa bg-clip-text text-transparent">
                {hero.headline}
              </span>
            </h1>

            <p className="text-[rgba(235,235,237,0.65)] text-lg leading-relaxed max-w-xl">
              {hero.subtext}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <AnimatedCTA href={hero.ctas[0].href} variant="light">
                {hero.ctas[0].label}
              </AnimatedCTA>
              <Button href={hero.ctas[1].href} variant="secondary" size="lg">
                {hero.ctas[1].label}
              </Button>
            </div>

            {/* Linha de confiança */}
            <p className="text-[rgba(235,235,237,0.35)] text-sm pt-2">
              Dados · Agentes · Canais · Jornadas · Governança
            </p>
          </div>

          {/* Visual orbital */}
          <div className="hidden lg:flex items-center justify-center">
            <OrbitalCore />
          </div>
        </div>
      </div>
    </section>
  )
}
