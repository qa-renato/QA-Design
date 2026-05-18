// VALIDAR MÉTRICAS REAIS ANTES DA PUBLICAÇÃO.
// Os valores exibidos são placeholders — substituir por dados verificados.

import { Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { useLanguage } from '../../context/LanguageContext'

function MetricItem({ value, label, description }) {
  return (
    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-[#12103d] border border-[rgba(21,183,254,0.12)] transition-all duration-300 hover:border-[rgba(21,183,254,0.32)] hover:bg-[#141240] hover:shadow-[0_4px_24px_rgba(0,101,254,0.12)] hover:-translate-y-0.5">
      <span
        className="text-4xl font-bold bg-gradient-to-r from-nucleo to-nebulosa bg-clip-text text-transparent"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {value}
      </span>
      <span className="text-cintilante font-semibold text-base">{label}</span>
      <span className="text-[rgba(235,235,237,0.45)] text-sm leading-relaxed">{description}</span>
    </div>
  )
}

export function Metrics() {
  const { content } = useLanguage()
  const { metrics } = content

  return (
    <section
      id="metricas"
      className="bg-[#0e0c3a] py-20 lg:py-24"
      aria-label="Métricas de operação"
    >
      <Reveal className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <Badge variant="accent">{metrics.badge}</Badge>
        </div>
        <p className="text-center text-[rgba(235,235,237,0.5)] text-sm mb-10 max-w-md mx-auto">
          {metrics.validationNote}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.items.map((m) => (
            <MetricItem key={m.label} {...m} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
