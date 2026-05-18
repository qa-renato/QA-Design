import { useLanguage } from '../../context/LanguageContext'
import { Badge } from '../ui/Badge'

const MAPS_EMBED =
  'https://maps.google.com/maps?q=Espa%C3%A7o+InovaBra+Habitat%2C+Av.+Ang%C3%A9lica%2C+2529%2C+Bela+Vista%2C+S%C3%A3o+Paulo%2C+SP&output=embed&z=15'

const MAPS_LINK =
  'https://maps.google.com/maps?q=Espa%C3%A7o+InovaBra+Habitat%2C+Av.+Ang%C3%A9lica%2C+2529%2C+Bela+Vista%2C+S%C3%A3o+Paulo%2C+SP%2C+01227-200'

export function FooterLocation() {
  const { content } = useLanguage()
  const { footerLocation } = content

  return (
    <section
      id="localizacao"
      aria-label={footerLocation.ariaLabel}
      className="bg-aurora border-t border-[rgba(21,183,254,0.08)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Coluna de conteúdo ── */}
          <div className="flex flex-col gap-7">

            <div className="flex flex-col gap-4">
              <Badge variant="brand">{footerLocation.badge}</Badge>
              <h2
                className="text-3xl lg:text-4xl font-bold text-cintilante leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {footerLocation.headline}
              </h2>
              <p className="text-[rgba(235,235,237,0.52)] text-lg leading-relaxed max-w-[400px]">
                {footerLocation.subtext}
              </p>
            </div>

            {/* Endereço */}
            <div className="flex flex-col gap-2 p-5 rounded-xl border border-[rgba(21,183,254,0.1)] bg-[rgba(0,101,254,0.04)]">
              <p className="text-[rgba(21,183,254,0.65)] text-[10px] font-semibold uppercase tracking-[0.18em]">
                {footerLocation.addressLabel}
              </p>
              <address className="not-italic text-[rgba(235,235,237,0.72)] text-sm leading-[1.8]">
                Espaço InovaBra Habitat<br />
                Av. Angélica, 2529 · 4º andar · Sala 113<br />
                Bela Vista — São Paulo, SP<br />
                CEP 01227-200
              </address>
            </div>

            {/* Link Maps */}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="
                group inline-flex items-center gap-2 self-start
                text-sm font-semibold text-nebulosa
                hover:text-cintilante transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebulosa
                focus-visible:ring-offset-2 focus-visible:ring-offset-aurora rounded-sm
              "
            >
              <span>{footerLocation.mapsLink}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>

          {/* ── Mapa ── */}
          <div
            className="
              rounded-2xl overflow-hidden
              border border-[rgba(21,183,254,0.13)]
              bg-[#0d0b3f]
              shadow-[0_0_48px_rgba(0,101,254,0.07)]
            "
          >
            <iframe
              title={footerLocation.iframeTitle}
              src={MAPS_EMBED}
              width="100%"
              height="340"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
