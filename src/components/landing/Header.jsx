import { useState, useEffect } from 'react'
import { nav } from '../../data/landingContent'
import { LoginPill } from '../ui/LoginPill'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[rgba(12,10,59,0.95)] backdrop-blur-md border-b border-[rgba(21,183,254,0.12)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" className="shrink-0" aria-label="InBot — página inicial">
          <img
            src="/assets/logo-inbot-dark.png"
            alt="InBot"
            className="h-8 lg:h-10 w-auto object-contain"
          />
        </a>

        {/* Nav principal — visível a partir de lg (1024px) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navegação principal">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[rgba(235,235,237,0.65)] hover:text-cintilante transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ações: idioma + login */}
        <div className="flex items-center gap-4 shrink-0">
          <LanguageSwitcher />
          <LoginPill href={nav.actions[1].href}>
            {nav.actions[1].label}
          </LoginPill>
        </div>

      </div>
    </header>
  )
}
