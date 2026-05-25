import { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { LoginMenu } from '../ui/LoginMenu'

// Header scroll-aware: topo = transparente full-width; pós-scroll = pill flutuante.
//
// Técnica de posicionamento: left-1/2 + -translate-x-1/2 funciona em ambos os estados.
//   • Topo:  w-full → translate = -50vw → posição resultante left=0 (full-width) ✓
//   • Pill:  w-[calc(100%-40px)] max-w-[1180px] → centrado automaticamente ✓
//
// Transição CSS: max-w-[9999px] → max-w-[1180px] (ambos numéricos, CSS interpola).
// shadow-[0_0_0_...] → shadow-[...] (mesma camada, transição limpa).
// border sempre presente (1px) — só border-color muda, sem add/remove.
// motion-safe: garante que prefers-reduced-motion desative a transição.

// Hover vertical: dois spans sobrepostos — o segundo entra de baixo.
// overflow-hidden na <a> corta o span fora da viewport.
// prefers-reduced-motion: regra global .inbot-nav-slide em brand.css desativa tudo.
function HeaderNavLink({ href, children }) {
  return (
    <a
      href={href}
      className="inbot-nav-slide group relative inline-flex h-[1.25em] overflow-hidden whitespace-nowrap text-sm font-medium tracking-[-0.025em] text-[rgba(235,235,237,0.65)]"
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute left-0 top-full block text-[#15b7fe] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
      >
        {children}
      </span>
    </a>
  )
}


export function Header() {
  const { content } = useLanguage()
  const { nav } = content
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll() // checar posição inicial (página pode carregar já rolada)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-scrolled={scrolled}
      className={[
        // Posição base — centrado horizontalmente em ambos os estados
        'fixed z-50 left-1/2 -translate-x-1/2',
        // Borda sempre presente (1px) para animar apenas border-color
        'border',
        // Transição suave — respeitando prefers-reduced-motion
        'motion-safe:transition-all motion-safe:duration-500',
        'motion-safe:[transition-timing-function:cubic-bezier(0.4,0,0.2,1)]',
        scrolled ? [
          // ── Estado pill/cápsula flutuante ──────────────────────────────
          'top-3',
          // Mobile: 12px de cada lado; sm+: 20px; capped em 1180px no desktop
          'w-[calc(100%-24px)] sm:w-[calc(100%-40px)]',
          'max-w-[1180px]',
          'rounded-full',
          // Glassmorphism InBot — Aurora semitransparente + blur
          'bg-[rgba(12,10,59,0.82)] backdrop-blur-xl',
          'border-[rgba(21,183,254,0.16)]',
          'shadow-[0_12px_44px_rgba(0,0,0,0.28),0_2px_8px_rgba(0,0,0,0.1)]',
        ].join(' ') : [
          // ── Estado topo — transparente, full-width ─────────────────────
          'top-0',
          'w-full',
          // max-w numérico (não "none") para CSS conseguir interpolar a transição
          'max-w-[9999px]',
          'rounded-none',
          'bg-transparent',
          'border-transparent',
          // Shadow numérica transparente — mesma estrutura do estado pill
          'shadow-[0_0_0_rgba(0,0,0,0)]',
        ].join(' '),
      ].join(' ')}
    >
      {/* Container interno — altura e padding fixos nos dois estados */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" className="shrink-0" aria-label="InBot — página inicial">
          <img
            src="/assets/logo-inbot-dark.png"
            alt="InBot"
            className="h-8 lg:h-9 w-auto object-contain"
          />
        </a>

        {/* Nav principal — visível a partir de lg */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navegação principal">
          {nav.links.map((link) => (
            <HeaderNavLink key={link.label} href={link.href}>
              {link.label}
            </HeaderNavLink>
          ))}
        </nav>

        {/* Ações: CTA Contato + idioma + login */}
        {/* Os popovers (HeaderPopover) usam "absolute top-full" relativo
            ao seu próprio wrapper — não são afetados pela forma do header */}
        <div className="flex items-center gap-3 shrink-0">
          <LanguageSwitcher />
          <LoginMenu />
        </div>

      </div>
    </header>
  )
}
