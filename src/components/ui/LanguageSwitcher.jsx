import { useState, useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { languages } from '../../data/i18n'
import { HeaderPopover } from './HeaderPopover'

function ChevronDown({ open }) {
  return (
    <svg
      aria-hidden="true"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className="mt-px shrink-0 transition-transform duration-200"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <path
        d="M2 3.5l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Checkmark() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="shrink-0 text-nucleo"
    >
      <path
        d="M2.5 7l3.5 3.5 5.5-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  const triggerRef = useRef(null)

  const current = languages.find((l) => l.code === language) ?? languages[0]

  function toggle() { setOpen((v) => !v) }
  function close()  { setOpen(false) }

  function select(code) {
    setLanguage(code)
    close()
    triggerRef.current?.focus()
  }

  return (
    <div ref={wrapperRef} className={`relative hidden md:block ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        aria-label={`Idioma atual: ${current.label}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={toggle}
        className={[
          'flex items-center gap-1.5 cursor-pointer',
          'text-sm text-[rgba(235,235,237,0.5)] hover:text-cintilante',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-1',
          'focus-visible:ring-[rgba(21,183,254,0.5)] focus-visible:rounded',
        ].join(' ')}
      >
        <span>{current.short}</span>
        <ChevronDown open={open} />
      </button>

      <HeaderPopover
        open={open}
        onClose={close}
        align="left"
        containerRef={wrapperRef}
      >
        <ul
          role="listbox"
          aria-label="Selecionar idioma"
          className="py-1.5 min-w-[260px]"
        >
          {languages.map((lang) => {
            const isSelected = lang.code === language
            return (
              <li key={lang.code} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => select(lang.code)}
                  className={[
                    'w-full flex items-center gap-3 px-4 py-2.5',
                    'text-sm whitespace-nowrap cursor-pointer',
                    'transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-2',
                    'focus-visible:ring-nucleo focus-visible:ring-inset',
                    isSelected
                      ? 'bg-[rgba(0,101,254,0.07)] text-aurora font-semibold'
                      : 'text-[rgba(12,10,59,0.75)] hover:bg-[rgba(0,101,254,0.05)] hover:text-aurora',
                  ].join(' ')}
                >
                  {/* Bandeira */}
                  <span className="text-base leading-none w-5 text-center shrink-0" aria-hidden="true">
                    {lang.flag}
                  </span>

                  {/* Nome + código em linha única */}
                  <span className="flex items-center gap-2 flex-1 min-w-0">
                    <span>{lang.label}</span>
                    <span className="text-xs text-[rgba(12,10,59,0.35)] font-normal">
                      {lang.short}
                    </span>
                  </span>

                  {/* Check no selecionado */}
                  {isSelected ? <Checkmark /> : <span className="w-[14px] shrink-0" />}
                </button>
              </li>
            )
          })}
        </ul>
      </HeaderPopover>
    </div>
  )
}
