import { Badge } from '../ui/Badge'
import { useLanguage } from '../../context/LanguageContext'

function PillarCard({ icon, title, description }) {
  return (
    <div className="group flex flex-col gap-3 p-6 rounded-2xl bg-[#12103d] border border-[rgba(21,183,254,0.1)] transition-all duration-300 hover:border-[rgba(21,183,254,0.32)] hover:bg-[#14123f] hover:shadow-[0_4px_24px_rgba(21,183,254,0.07)] hover:-translate-y-0.5">
      <span
        className="text-2xl text-nebulosa transition-transform duration-200 group-hover:scale-110 inline-block"
        aria-hidden="true"
      >
        {icon}
      </span>
      <h3 className="text-cintilante font-semibold text-lg">{title}</h3>
      <p className="text-[rgba(235,235,237,0.5)] text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export function PlatformOverview() {
  const { content } = useLanguage()
  const { platform } = content

  return (
    <section
      id="plataforma"
      className="bg-aurora py-20 lg:py-28"
      aria-label="Visão geral da plataforma InBot"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div data-gsap-reveal className="max-w-2xl mb-14">
          <Badge variant="brand" className="mb-4">{platform.badge}</Badge>
          <h2
            className="text-3xl lg:text-4xl font-bold text-cintilante mb-4 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {platform.headline}
          </h2>
          <p className="text-[rgba(235,235,237,0.55)] text-lg leading-relaxed">
            {platform.subtext}
          </p>
        </div>
        <div data-gsap-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {platform.pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  )
}
