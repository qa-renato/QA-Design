import { AnimatedCTA } from '../ui/AnimatedCTA'
import { HeroEyebrow } from '../ui/HeroEyebrow'
import { HeroRobot } from './HeroRobot'
import { useLanguage } from '../../context/LanguageContext'

export function Hero() {
  const { content } = useLanguage()
  const { hero } = content

  return (
    <section
      data-hero-section
      className="relative min-h-screen pt-16 overflow-hidden bg-aurora"
      aria-label="Hero — InBot"
    >
      {/* Fundos decorativos */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div data-hero-glow-top className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(0,101,254,0.15)_0%,transparent_65%)] inbot-glow-breathe" />
        <div data-hero-glow-br className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(21,183,254,0.13)_0%,transparent_65%)] inbot-glow-float-delayed" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(2,60,143,0.3)_0%,transparent_65%)]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(21,183,254,0.07)_0%,transparent_65%)] inbot-glow-breathe-delayed" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-14 lg:pt-20 pb-24 w-full">
        <div className="max-w-[720px] mx-auto text-center flex flex-col items-center gap-8">

          <div data-hero-eyebrow>
            <HeroEyebrow>{hero.eyebrow}</HeroEyebrow>
          </div>

          <h1
            data-hero-h1
            className="text-4xl md:text-[56px] lg:text-[68px] font-bold leading-[1.08] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="bg-gradient-to-r from-cintilante via-cintilante to-nebulosa bg-clip-text text-transparent">
              {hero.headline}
            </span>
          </h1>

          <p data-hero-sub className="text-[rgba(235,235,237,0.62)] text-lg md:text-xl leading-relaxed max-w-[560px]">
            {hero.subtext}
          </p>

          <div data-hero-cta>
            <AnimatedCTA href={hero.cta.href} variant="light">
              {hero.cta.label}
            </AnimatedCTA>
          </div>

          <HeroRobot />

        </div>
      </div>
    </section>
  )
}
