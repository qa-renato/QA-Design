import { navLinks, ctaNav } from '../../data/navigation'
import { Button } from './Button'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-[rgba(21,183,254,0.1)] bg-[rgba(12,10,59,0.85)] backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">

          {/* Logo placeholder */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-nucleo to-nebulosa" />
            <span
              className="text-cintilante font-bold text-lg tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              InBot
            </span>
          </div>

          {/* Nav links – desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[rgba(235,235,237,0.65)] hover:text-cintilante transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Button href={ctaNav.href} size="sm">
            {ctaNav.label}
          </Button>
        </div>
      </div>
    </header>
  )
}
