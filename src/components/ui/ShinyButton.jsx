// ShinyButton — borda rotativa (conic-gradient Houdini) + circle expand no hover.
// Sem ::after girante, sem span::before — elimina o bug do quadrado visível.
// Renderiza <a> com href ou <button> sem href.

const inner = (label) => (
  <>
    {/* Fill absoluto: parte como circle (42px) e expande para pill no hover */}
    <span className="inbot-shiny-fill" aria-hidden="true" />
    {/* Seta — flutua z-2 sobre o fill, cor sempre escura */}
    <span className="inbot-shiny-icon" aria-hidden="true">→</span>
    {/* Texto — cor transiciona de branco para escuro no hover */}
    <span className="inbot-shiny-label">{label}</span>
  </>
)

export function ShinyButton({ children, href, onClick, className = '' }) {
  const cls = `inbot-shiny-btn${className ? ` ${className}` : ''}`

  if (href) {
    return <a href={href} className={cls}>{inner(children)}</a>
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner(children)}
    </button>
  )
}
