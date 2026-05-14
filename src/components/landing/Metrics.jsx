// VALIDAR MÉTRICAS REAIS ANTES DA PUBLICAÇÃO.
// Os valores exibidos são placeholders — substituir por dados verificados.

import { metrics } from '../../data/landingContent'
import { Badge } from '../ui/Badge'

function MetricItem({ value, label, description }) {
  return (
    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-[#12103d] border border-[rgba(21,183,254,0.12)] transition-all duration-300 hover:border-[rgba(21,183,254,0.3)] hover:shadow-[0_0_32px_rgba(0,101,254,0.12)]">
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
  return (
    <section
      id="metricas"
      className="bg-[#0e0c3a] py-20 lg:py-24"
      aria-label="Métricas de operação"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <Badge variant="accent">Escala operacional</Badge>
        </div>
        <p className="text-center text-[rgba(235,235,237,0.5)] text-sm mb-10 max-w-md mx-auto">
          Métricas em validação — serão publicadas com dados verificados.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((m) => (
            <MetricItem key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  )
}
