import { Badge } from '../ui/Badge'
import { FeatureCard } from '../ui/FeatureCard'
import { differentials } from '../../data/landingContent'

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="bg-aurora py-20 lg:py-28"
      aria-label="Diferenciais da plataforma InBot"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <Badge variant="accent" className="mb-4">{differentials.badge}</Badge>
          <h2
            className="text-3xl lg:text-4xl font-bold text-cintilante mb-4 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {differentials.headline}
          </h2>
          <p className="text-[rgba(235,235,237,0.55)] text-lg leading-relaxed">
            {differentials.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentials.items.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              variant="dark"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
