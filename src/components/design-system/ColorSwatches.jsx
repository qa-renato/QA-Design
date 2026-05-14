import { colors } from '../../data/brandTokens'

function Swatch({ color, label, value }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-16 rounded-xl border border-[rgba(255,255,255,0.08)]"
        style={{ backgroundColor: color }}
      />
      <div>
        <p className="text-cintilante text-sm font-medium">{label}</p>
        <p className="text-[rgba(235,235,237,0.45)] text-xs font-mono">{value}</p>
      </div>
    </div>
  )
}

export function ColorSwatches() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[rgba(235,235,237,0.5)] text-xs font-medium uppercase tracking-wider mb-4">
          Paleta Primitiva
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.values(colors.primitive).map((c) => (
            <Swatch key={c.value} color={c.value} label={c.label} value={c.value} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-[rgba(235,235,237,0.5)] text-xs font-medium uppercase tracking-wider mb-4">
          Tokens Semânticos
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.values(colors.semantic).map((c) => (
            <Swatch key={c.label} color={c.value} label={c.label} value={c.value} />
          ))}
        </div>
      </div>
    </div>
  )
}
