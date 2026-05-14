export function LoginPill({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center px-4 py-[7px] rounded-full',
        'text-sm font-medium text-cintilante whitespace-nowrap',
        'border border-[rgba(21,183,254,0.35)]',
        'hover:border-nebulosa hover:bg-[rgba(21,183,254,0.08)]',
        'transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebulosa',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-aurora',
        className,
      ].join(' ')}
    >
      {children}
    </a>
  )
}
