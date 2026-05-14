import { typography } from '../../data/brandTokens'

export function TypographyScale() {
  return (
    <div className="space-y-3">
      {typography.scale.map((item) => (
        <div
          key={item.name}
          className="flex items-baseline gap-6 py-3 border-b border-[rgba(235,235,237,0.06)]"
        >
          <div className="w-24 shrink-0">
            <p className="text-[rgba(235,235,237,0.45)] text-xs font-mono">{item.name}</p>
            <p className="text-[rgba(235,235,237,0.3)] text-xs">{item.size}</p>
          </div>
          <p
            className="text-cintilante leading-tight"
            style={{
              fontSize: item.size,
              fontWeight: item.weight,
              fontFamily: item.weight >= 700 ? 'var(--font-display)' : 'var(--font-body)',
            }}
          >
            Infraestrutura conversacional
          </p>
        </div>
      ))}
    </div>
  )
}
