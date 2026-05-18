// FeatureCard — card compacto com ícone, título e descrição.
// variant 'dark' → sobre fundos Aurora/surface (borda Nebulosa, glow azul)
// variant 'light' → sobre fundos claros (borda Núcleo, shadow sutil)

const styles = {
  dark: {
    wrapper: [
      'bg-[#12103d]',
      'border-[rgba(21,183,254,0.1)]',
      'hover:border-[rgba(21,183,254,0.32)]',
      'hover:bg-[#141240]',
      'hover:shadow-[0_4px_24px_rgba(21,183,254,0.08)]',
      'hover:-translate-y-0.5',
    ].join(' '),
    icon: 'text-nebulosa',
    title: 'text-cintilante',
    description: 'text-[rgba(235,235,237,0.45)]',
  },
  light: {
    wrapper: [
      'bg-white',
      'border-[rgba(2,60,143,0.1)]',
      'hover:border-[rgba(0,101,254,0.28)]',
      'hover:shadow-[0_4px_24px_rgba(0,101,254,0.09)]',
      'hover:bg-[rgba(0,101,254,0.012)]',
      'hover:-translate-y-0.5',
    ].join(' '),
    icon: 'text-nucleo',
    title: 'text-aurora group-hover:text-nucleo transition-colors duration-200',
    description: 'text-[rgba(12,10,59,0.55)]',
  },
}

export function FeatureCard({ icon, title, description, variant = 'dark', className = '' }) {
  const s = styles[variant]
  return (
    <div
      className={[
        'group flex flex-col gap-3 p-6 rounded-2xl border',
        'transition-all duration-300',
        s.wrapper,
        className,
      ].join(' ')}
    >
      {icon && (
        <span
          className={`text-2xl inline-block transition-transform duration-200 group-hover:scale-110 ${s.icon}`}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <h3 className={`font-semibold text-base leading-snug ${s.title}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${s.description}`}>{description}</p>
    </div>
  )
}
