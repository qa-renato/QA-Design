import { Badge } from '../ui/Badge'
import { useLanguage } from '../../context/LanguageContext'

function ContentCard({ tag, title, date }) {
  return (
    <div className="group flex flex-col gap-3 p-6 rounded-2xl bg-[#12103d] border border-[rgba(21,183,254,0.1)] transition-all duration-300 hover:border-[rgba(21,183,254,0.28)] hover:shadow-[0_4px_20px_rgba(21,183,254,0.07)] hover:-translate-y-0.5 cursor-pointer">
      <span className="self-start px-2.5 py-1 rounded-full text-[10px] font-semibold text-nebulosa bg-[rgba(21,183,254,0.1)] border border-[rgba(21,183,254,0.2)] uppercase tracking-wider">
        {tag}
      </span>
      <h3 className="text-cintilante font-semibold text-base leading-snug group-hover:text-nebulosa transition-colors duration-200">
        {title}
      </h3>
      <p className="text-[rgba(235,235,237,0.35)] text-xs mt-auto pt-3 border-t border-[rgba(235,235,237,0.06)]">
        {date}
      </p>
    </div>
  )
}

export function ContentPreview() {
  const { content } = useLanguage()
  const { content: c } = content

  return (
    <section
      id="conteudo"
      className="bg-aurora py-20 lg:py-28"
      aria-label="Conteúdos InBot"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div data-gsap-reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <Badge variant="brand" className="mb-4">{c.badge}</Badge>
            <h2
              className="text-3xl lg:text-4xl font-bold text-cintilante mb-4 leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {c.headline}
            </h2>
            <p className="text-[rgba(235,235,237,0.5)] text-lg leading-relaxed">
              {c.subtext}
            </p>
          </div>
        </div>
        <div data-gsap-stagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {c.items.map((item) => (
            <ContentCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
