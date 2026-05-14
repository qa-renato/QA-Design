import { Container } from './Container'

export function Section({
  children,
  dark = false,
  id,
  className = '',
  containerWide = false,
  noPadding = false,
}) {
  const base = dark
    ? 'bg-aurora text-cintilante'
    : 'bg-[#f5f7ff] text-aurora'

  const padding = noPadding ? '' : 'py-20 lg:py-28'

  return (
    <section id={id} className={`${base} ${padding} ${className}`}>
      <Container wide={containerWide}>
        {children}
      </Container>
    </section>
  )
}
