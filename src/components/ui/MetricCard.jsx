export function MetricCard({ value, label, description, className = '' }) {
  return (
    <div
      className={[
        'bg-[#12103d] border border-[rgba(21,183,254,0.15)]',
        'rounded-2xl p-6 flex flex-col gap-2',
        'transition-all duration-300',
        'hover:border-[rgba(21,183,254,0.35)] hover:shadow-[0_0_40px_rgba(0,101,254,0.15)]',
        className,
      ].join(' ')}
    >
      <span
        className="text-4xl font-bold bg-gradient-to-r from-nucleo to-nebulosa bg-clip-text text-transparent"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {value}
      </span>
      <span className="text-cintilante font-semibold text-base">{label}</span>
      {description && (
        <span className="text-[rgba(235,235,237,0.5)] text-sm leading-relaxed">{description}</span>
      )}
    </div>
  )
}
