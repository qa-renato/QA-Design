const variants = {
  brand: 'bg-[rgba(0,101,254,0.15)] text-nebulosa border border-[rgba(21,183,254,0.3)]',
  accent:'bg-[rgba(21,183,254,0.12)] text-nebulosa border border-[rgba(21,183,254,0.25)]',
  muted: 'bg-[rgba(235,235,237,0.08)] text-[rgba(235,235,237,0.6)] border border-[rgba(235,235,237,0.12)]',
  dark:  'bg-[rgba(2,60,143,0.4)] text-cintilante border border-[rgba(2,60,143,0.6)]',
}

export function Badge({ children, variant = 'brand', className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
