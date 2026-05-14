export function Card({ children, className = '', glow = false }) {
  const glowClass = glow
    ? 'shadow-[0_0_40px_rgba(21,183,254,0.1)] hover:shadow-[0_0_60px_rgba(0,101,254,0.2)]'
    : 'hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]'

  return (
    <div
      className={[
        'bg-[#12103d] border border-[rgba(21,183,254,0.12)]',
        'rounded-2xl p-6',
        'transition-all duration-300',
        glowClass,
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
