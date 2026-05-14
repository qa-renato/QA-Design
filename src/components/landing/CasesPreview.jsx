import { Badge } from '../ui/Badge'
import { cases } from '../../data/landingContent'

function CaseCard({ tag, title, description, metric, metricLabel }) {
  return (
    <div className="flex flex-col justify-between gap-6 p-6 lg:p-8 rounded-2xl bg-white border border-[rgba(2,60,143,0.1)] transition-all duration-300 hover:border-[rgba(0,101,254,0.2)] hover:shadow-[0_4px_24px_rgba(0,101,254,0.08)]">
      <div className="flex flex-col gap-3">
        <span className="self-start px-2.5 py-1 rounded-full text-xs font-medium text-nucleo bg-[rgba(0,101,254,0.08)] border border-[rgba(0,101,254,0.15)]">
          {tag}
        </span>
        <h3 className="text-aurora font-semibold text-lg leading-snug">{title}</h3>
        <p className="text-[rgba(12,10,59,0.5)] text-sm leading-relaxed">{description}</p>
      </div>
      <div className="pt-4 border-t border-[rgba(2,60,143,0.08)]">
        <span
          className="text-3xl font-bold text-nucleo"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {metric}
        </span>
        <p className="text-[rgba(12,10,59,0.45)] text-xs mt-1">{metricLabel}</p>
      </div>
    </div>
  )
}

export function CasesPreview() {
  return (
    <section
      id="cases"
      className="bg-[#f5f7ff] py-20 lg:py-28"
      aria-label="Cases de operação conversacional"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <Badge variant="dark" className="mb-4">{cases.badge}</Badge>
          <h2
            className="text-3xl lg:text-4xl font-bold text-aurora mb-4 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {cases.headline}
          </h2>
          <p className="text-[rgba(12,10,59,0.55)] text-lg leading-relaxed">
            {cases.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.items.map((item) => (
            <CaseCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
