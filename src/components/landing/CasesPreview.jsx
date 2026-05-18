import { useLanguage } from '../../context/LanguageContext'

// Wordmark textual — fallback elegante enquanto logos oficiais não estão disponíveis
function CompanyWordmark({ name }) {
  return (
    <span
      className="text-[11px] font-bold tracking-[0.18em] uppercase text-[rgba(12,10,59,0.35)]"
      aria-label={name}
    >
      {name}
    </span>
  )
}

function TestimonialCard({ wordmark, logo, quote, person, area }) {
  return (
    <article className="
      group flex flex-col
      p-8 lg:p-10 rounded-3xl
      bg-white
      border border-[rgba(2,60,143,0.08)]
      shadow-[0_2px_16px_rgba(2,60,143,0.04)]
      transition-all duration-300
      hover:border-[rgba(0,101,254,0.14)]
      hover:shadow-[0_4px_28px_rgba(0,101,254,0.07)]
      hover:-translate-y-0.5
    ">
      {/* Logo ou wordmark textual como fallback */}
      <div className="flex items-center h-20">
        {logo
          ? <img src={logo} alt={wordmark} className="max-h-16 w-auto max-w-[200px] object-contain" />
          : <CompanyWordmark name={wordmark} />
        }
      </div>

      {/* Aspas decorativas */}
      <span
        aria-hidden="true"
        className="mt-5 text-[64px] leading-none text-nucleo opacity-[0.12] -mb-2 select-none"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        &ldquo;
      </span>

      {/* Depoimento */}
      <p className="flex-1 text-[rgba(12,10,59,0.68)] text-[15px] leading-[1.82] italic">
        {quote}
      </p>

      {/* Atribuição */}
      <div className="mt-6 pt-5 border-t border-[rgba(2,60,143,0.07)]">
        <p className="text-aurora font-semibold text-sm leading-snug">{person}</p>
        <p className="text-nucleo text-xs mt-1 font-medium">{area}</p>
      </div>
    </article>
  )
}

export function CasesPreview() {
  const { content } = useLanguage()
  const { cases } = content

  return (
    <section
      id="cases"
      className="bg-[#f5f7ff] py-20 lg:py-28"
      aria-labelledby="cases-section-title"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* ── Header centralizado ── */}
        <div data-gsap-reveal className="flex flex-col items-center text-center gap-5 mb-16">

          <h2
            id="cases-section-title"
            className="text-3xl lg:text-4xl font-bold leading-tight tracking-wide bg-gradient-to-r from-nucleo to-nebulosa bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {cases.eyebrow}
          </h2>

          <p className="text-[rgba(12,10,59,0.5)] text-lg leading-relaxed max-w-[440px]">
            {cases.subtitle}
          </p>
        </div>

        {/* ── Cards de depoimento ── */}
        <div
          data-gsap-stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cases.testimonials.map((t) => (
            <TestimonialCard key={t.person} {...t} />
          ))}
        </div>

      </div>
    </section>
  )
}
