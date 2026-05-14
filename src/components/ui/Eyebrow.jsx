import { Badge } from './Badge'

// Eyebrow — label uppercase que precede H2 em seções.
// variant 'dark' → sobre fundo escuro (usa badge accent/brand)
// variant 'light' → sobre fundo claro (usa badge dark)
// align 'left' | 'center'

const badgeVariantMap = {
  dark: 'accent',
  light: 'dark',
}

export function Eyebrow({ children, variant = 'dark', align = 'left', className = '' }) {
  const wrapClass = align === 'center' ? 'flex justify-center' : ''
  return (
    <div className={`mb-4 ${wrapClass} ${className}`.trim()}>
      <Badge variant={badgeVariantMap[variant]}>{children}</Badge>
    </div>
  )
}
