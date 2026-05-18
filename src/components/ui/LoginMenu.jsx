import { useState, useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { HeaderPopover } from './HeaderPopover'

export function LoginMenu({ className = '' }) {
  const { content } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  const triggerRef = useRef(null)

  const loginLabel = content.nav.actions[1].label
  const loginMenu  = content.loginMenu

  function toggle() { setOpen((v) => !v) }
  function close()  { setOpen(false) }

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>

      {/* Botão trigger */}
      <button
        ref={triggerRef}
        type="button"
        aria-label={loginLabel}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={toggle}
        className={[
          'inline-flex items-center px-4 py-[7px] rounded-full',
          'text-sm font-medium text-cintilante whitespace-nowrap cursor-pointer',
          'border border-[rgba(21,183,254,0.35)]',
          'hover:border-nebulosa hover:bg-[rgba(21,183,254,0.08)]',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebulosa',
          'focus-visible:ring-offset-2 focus-visible:ring-offset-aurora',
        ].join(' ')}
      >
        {loginLabel}
      </button>

      <HeaderPopover
        open={open}
        onClose={close}
        align="center"
        containerRef={wrapperRef}
      >
        <div className="w-[340px]">

          {/* Título */}
          <div className="px-4 pt-4 pb-3">
            <p className="text-[10px] font-semibold text-[rgba(12,10,59,0.35)] uppercase tracking-widest">
              {loginMenu.title}
            </p>
          </div>

          {/* Cards */}
          <ul
            role="menu"
            aria-label={loginLabel}
            className="px-3 pb-3 flex flex-col gap-2"
          >
            {loginMenu.items.map((item) => (
              <li key={item.title} role="none">
                <a
                  href={item.href}
                  role="menuitem"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className={[
                    'group flex items-center gap-3 p-4 rounded-2xl',
                    'bg-white border border-[rgba(0,101,254,0.08)]',
                    'hover:border-[rgba(21,183,254,0.4)]',
                    'hover:bg-[rgba(0,101,254,0.02)]',
                    'hover:shadow-[0_2px_12px_rgba(0,101,254,0.08)]',
                    'transition-all duration-200 cursor-pointer',
                    'focus-visible:outline-none focus-visible:ring-2',
                    'focus-visible:ring-nucleo focus-visible:ring-offset-1',
                    'focus-visible:ring-offset-[#f5f7ff]',
                  ].join(' ')}
                >
                  {/* Textos */}
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <span className="text-sm font-semibold text-aurora group-hover:text-nucleo transition-colors duration-200">
                      {item.title}
                    </span>
                    <span className="text-xs text-[rgba(12,10,59,0.45)] leading-relaxed">
                      {item.description}
                    </span>
                  </div>

                  {/* Círculo com chevron */}
                  <span
                    className={[
                      'shrink-0 w-7 h-7 rounded-full flex items-center justify-center',
                      'border border-[rgba(0,101,254,0.18)]',
                      'group-hover:border-nucleo group-hover:bg-[rgba(0,101,254,0.07)]',
                      'transition-all duration-200',
                    ].join(' ')}
                    aria-hidden="true"
                  >
                    <span className="inline-block text-sm leading-none text-[rgba(12,10,59,0.3)] group-hover:text-nucleo group-hover:translate-x-0.5 transition-all duration-200">
                      ›
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </HeaderPopover>
    </div>
  )
}
