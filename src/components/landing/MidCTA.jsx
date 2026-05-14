import { AnimatedCTA } from '../ui/AnimatedCTA'
import { midCTA } from '../../data/landingContent'

export function MidCTA() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      aria-label="Chamada para ação intermediária"
      style={{
        background: 'linear-gradient(135deg, #023c8f 0%, #0065fe 50%, #0c0a3b 100%)',
      }}
    >
      {/* Textura sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(21,183,254,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(2,60,143,0.4) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Texto */}
          <div className="max-w-2xl text-center lg:text-left">
            <h2
              className="text-2xl lg:text-3xl font-bold text-cintilante mb-3 leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {midCTA.headline}
            </h2>
            <p className="text-[rgba(235,235,237,0.65)] text-base lg:text-lg leading-relaxed">
              {midCTA.subtext}
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <AnimatedCTA href={midCTA.cta.href} variant="gradient">
              {midCTA.cta.label}
            </AnimatedCTA>
          </div>
        </div>
      </div>
    </section>
  )
}
