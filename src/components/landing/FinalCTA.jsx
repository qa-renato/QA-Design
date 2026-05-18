import { AnimatedCTA } from '../ui/AnimatedCTA'
import { Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { useLanguage } from '../../context/LanguageContext'

export function FinalCTA() {
  const { content } = useLanguage()
  const { finalCTA } = content

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#0e0c3a] py-24 lg:py-32"
      aria-label="Contato e chamada para ação"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(0,101,254,0.18)_0%,transparent_65%)] inbot-glow-breathe" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(21,183,254,0.10)_0%,transparent_65%)] inbot-glow-float-delayed" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[radial-gradient(ellipse,rgba(21,183,254,0.07)_0%,transparent_65%)] inbot-glow-breathe-delayed" />
      </div>

      <Reveal className="relative max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-6" aria-hidden="true">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[rgba(21,183,254,0.3)]" />
          <div className="w-2 h-2 rounded-full bg-nebulosa opacity-60" />
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[rgba(21,183,254,0.3)]" />
        </div>

        <div className="flex justify-center mb-6">
          <Badge variant="accent">{finalCTA.badge}</Badge>
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-cintilante mb-6 leading-tight tracking-tight max-w-3xl mx-auto"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {finalCTA.headline}
        </h2>

        <p className="text-[rgba(235,235,237,0.55)] text-lg leading-relaxed max-w-xl mx-auto mb-10">
          {finalCTA.subtext}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <AnimatedCTA href={finalCTA.cta.href} variant="light">
            {finalCTA.cta.label}
          </AnimatedCTA>
          <a
            href={finalCTA.ctaSecondary.href}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-lg border border-[rgba(21,183,254,0.35)] text-cintilante text-sm font-semibold tracking-wide transition-all duration-200 hover:border-nebulosa hover:bg-[rgba(21,183,254,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebulosa focus-visible:ring-offset-[#0e0c3a]"
          >
            {finalCTA.ctaSecondary.label}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
