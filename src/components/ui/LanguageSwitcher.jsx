function ChevronDown() {
  return (
    <svg
      aria-hidden="true"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className="mt-px shrink-0"
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

export function LanguageSwitcher({ className = '' }) {
  return (
    <button
      type="button"
      aria-label="Idioma atual: Português (Brasil)"
      className={[
        'hidden md:flex items-center gap-1.5',
        'text-sm text-[rgba(235,235,237,0.5)] hover:text-cintilante',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-1',
        'focus-visible:ring-[rgba(21,183,254,0.5)] focus-visible:rounded',
        className,
      ].join(' ')}
    >
      <span>PT-BR</span>
      <ChevronDown />
    </button>
  )
}
