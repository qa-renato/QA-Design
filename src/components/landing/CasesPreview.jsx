import { memo, useEffect, useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const PARTNER_LOGOS = [
  { src: '/assets/testimonials/bradesco.png',                alt: 'Bradesco' },
  { src: '/assets/testimonials/tecban.png',                  alt: 'TecBan' },
  { src: '/assets/testimonials/logo-ambev.jpg',              alt: 'Ambev' },
  { src: '/assets/testimonials/LOGO_AZUL_LINHAS_AEREAS.png', alt: 'Linhas Aéreas Brasileiras', scale: 'scale-125' },
  { src: '/assets/testimonials/Logotipo_do_SBT.svg.png',     alt: 'SBT' },
  { src: '/assets/testimonials/logo_detran.png',             alt: 'DETRAN' },
  { src: '/assets/testimonials/logo_hev.png',                alt: 'HEV' },
]

const LogoStrip = memo(function LogoStrip() {
  const trackRef = useRef(null)
  const items = [...PARTNER_LOGOS, ...PARTNER_LOGOS]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    // Exact pixel offset = width of one set (half of the duplicated track)
    const offset = Math.round(track.scrollWidth / 2)
    track.style.setProperty('--marquee-offset', `-${offset}px`)
  }, [])

  return (
    <div
      className="relative overflow-hidden my-10"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f5f7ff] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f5f7ff] to-transparent" />
      <div ref={trackRef} className="flex inbot-logo-track">
        {items.map((logo, i) => (
          <div key={i} className="flex-none flex items-center justify-center mx-8 h-16">
            <img
              src={logo.src}
              alt={logo.alt}
              className={`h-full w-auto object-contain grayscale opacity-40 mix-blend-multiply transition-all duration-300 hover:opacity-70 ${logo.scale ?? ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
})

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

        {/* ── Logo strip ── */}
        <LogoStrip />

      </div>
    </section>
  )
}
