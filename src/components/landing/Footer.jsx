import { useLanguage } from '../../context/LanguageContext'

export function Footer() {
  const { content } = useLanguage()
  const { footer } = content

  return (
    <footer className="bg-aurora border-t border-[rgba(21,183,254,0.08)]" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-[rgba(21,183,254,0.06)]">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-nucleo to-nebulosa" aria-hidden="true" />
              <span className="text-cintilante font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>
                {footer.brand}
              </span>
            </div>
            <p className="text-[rgba(235,235,237,0.4)] text-sm leading-relaxed max-w-[180px]">
              {footer.tagline}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-cintilante text-xs font-semibold uppercase tracking-wider mb-4">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[rgba(235,235,237,0.45)] text-sm hover:text-cintilante transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[rgba(235,235,237,0.25)] text-xs">{footer.legal}</p>
          <p className="text-[rgba(235,235,237,0.2)] text-xs">Landing V1 — Design System InBot</p>
        </div>
      </div>
    </footer>
  )
}
