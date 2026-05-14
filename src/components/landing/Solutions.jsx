import { Badge } from '../ui/Badge'
import { solutions } from '../../data/landingContent'

function SolutionCard({ title, description }) {
  return (
    <div className="group flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[rgba(2,60,143,0.1)] transition-all duration-300 hover:border-[rgba(0,101,254,0.25)] hover:shadow-[0_4px_24px_rgba(0,101,254,0.08)]">
      <h3 className="text-aurora font-semibold text-base group-hover:text-nucleo transition-colors duration-200">
        {title}
      </h3>
      <p className="text-[rgba(12,10,59,0.55)] text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export function Solutions() {
  return (
    <section
      id="solucoes"
      className="bg-[#f5f7ff] py-20 lg:py-28"
      aria-label="Soluções InBot por setor"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <Badge variant="dark" className="mb-4">{solutions.badge}</Badge>
          <h2
            className="text-3xl lg:text-4xl font-bold text-aurora mb-4 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {solutions.headline}
          </h2>
          <p className="text-[rgba(12,10,59,0.55)] text-lg leading-relaxed">
            {solutions.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {solutions.items.map((item) => (
            <SolutionCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
