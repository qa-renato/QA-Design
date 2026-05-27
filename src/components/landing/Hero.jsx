import { ShinyButton } from '../ui/ShinyButton'
import { HeroEyebrow } from '../ui/HeroEyebrow'
import { HeroRobot } from './HeroRobot'
import { useLanguage } from '../../context/LanguageContext'

// Crosshairs + grid sutil — adiciona profundidade editorial sem asset externo.
// Camada puramente decorativa, pointer-events-none, aria-hidden.
function HeroEditorialDecor() {
  const crosses = [
    'left-[9%] top-[26%]',
    'right-[11%] top-[31%]',
    'left-[15%] bottom-[22%]',
    'right-[17%] bottom-[18%]',
  ]
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {crosses.map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} text-3xl font-thin text-[#ebebed]/[0.10] leading-none`}
        >
          +
        </span>
      ))}
      <div
        className="absolute inset-0 opacity-[0.042]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(235,235,237,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(235,235,237,0.25) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  )
}

// Painel visual direito — robot grande + chips flutuantes decorativos.
// Visível apenas em lg+, renderizado no grid column direito.
function HeroVisualPanel() {
  return (
    <div
      className="relative flex items-center justify-center min-h-[460px] xl:min-h-[520px]"
      aria-hidden="true"
    >
      {/* Glow atmosférico concentrado — âncora visual do lado direito */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full pointer-events-none inbot-glow-breathe"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,101,254,0.22) 0%, rgba(21,183,254,0.07) 45%, transparent 70%)',
        }}
      />

      {/* Robot — tamanho grande, sem controle de visibilidade (o pai cuida) */}
      <HeroRobot wrapperClassName="flex" size="large" />

      {/* Chip flutuante superior — vocabulário do produto, sem métricas */}
      <div
        className="absolute top-[10%] right-[2%] flex items-center gap-[6px] px-3 py-[7px] rounded-full text-[11px] font-semibold text-nebulosa bg-[rgba(12,10,59,0.92)] border border-[rgba(21,183,254,0.28)] whitespace-nowrap inbot-glow-float"
        style={{ boxShadow: '0 0 14px rgba(21,183,254,0.13)' }}
      >
        <span>◎</span>
        <span>Agentes IA</span>
      </div>

      {/* Chip flutuante inferior — vocabulário do produto, sem métricas */}
      <div
        className="absolute bottom-[14%] left-[2%] flex items-center gap-[6px] px-3 py-[7px] rounded-full text-[11px] font-semibold text-nebulosa bg-[rgba(12,10,59,0.92)] border border-[rgba(21,183,254,0.28)] whitespace-nowrap inbot-glow-float-delayed"
        style={{ boxShadow: '0 0 14px rgba(21,183,254,0.13)' }}
      >
        <span>⬡</span>
        <span>Multicanal</span>
      </div>
    </div>
  )
}

export function Hero() {
  const { content } = useLanguage()
  const { hero } = content

  return (
    <section
      data-hero-section
      className="relative min-h-screen pt-16 overflow-hidden bg-aurora"
      aria-label="Hero — InBot"
    >
      {/* Fundos decorativos — orbs radiais */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div data-hero-glow-top className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(0,101,254,0.15)_0%,transparent_65%)] inbot-glow-breathe" />
        <div data-hero-glow-br className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(21,183,254,0.13)_0%,transparent_65%)] inbot-glow-float-delayed" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(2,60,143,0.3)_0%,transparent_65%)]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(21,183,254,0.07)_0%,transparent_65%)] inbot-glow-breathe-delayed" />
      </div>

      {/* Camada editorial: crosshairs + grid */}
      <HeroEditorialDecor />

      {/* Container principal — flex items-center para centrar verticalmente */}
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center py-20">
        <div className="w-full grid lg:grid-cols-[minmax(0,1fr)_460px] xl:grid-cols-[minmax(0,1fr)_520px] gap-8 xl:gap-16 items-center">

          {/* Coluna esquerda — texto */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8">

            <div data-hero-eyebrow>
              <HeroEyebrow>{hero.eyebrow}</HeroEyebrow>
            </div>

            <h1
              data-hero-h1
              className="text-4xl md:text-[56px] lg:text-[68px] font-bold leading-[1.08] tracking-[-0.055em]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="bg-gradient-to-r from-cintilante via-cintilante to-nebulosa bg-clip-text text-transparent">
                {hero.headline}
              </span>
            </h1>

            <p data-hero-sub className="text-[rgba(235,235,237,0.62)] text-lg md:text-xl leading-relaxed max-w-[520px] tracking-[-0.02em]">
              {hero.subtext}
            </p>

            <div data-hero-cta>
              <ShinyButton href={hero.cta.href}>
                {hero.cta.label}
              </ShinyButton>
            </div>

            {/* Robot — apenas tablet (md → lg), desaparece no desktop onde vai para coluna direita */}
            <HeroRobot wrapperClassName="hidden md:flex lg:hidden" size="default" />

          </div>

          {/* Coluna direita — painel visual, apenas desktop (lg+) */}
          <div className="hidden lg:block">
            <HeroVisualPanel />
          </div>

        </div>
      </div>
    </section>
  )
}
