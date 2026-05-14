import './index.css'
import { Navbar } from './components/ui/Navbar'
import { ColorSwatches } from './components/design-system/ColorSwatches'
import { TypographyScale } from './components/design-system/TypographyScale'
import { ComponentPreview } from './components/design-system/ComponentPreview'

function SectionHeader({ label, title, description }) {
  return (
    <div className="mb-10">
      <p className="text-[rgba(21,183,254,0.8)] text-xs font-medium uppercase tracking-widest mb-3">
        {label}
      </p>
      <h2
        className="text-cintilante font-bold text-3xl mb-3 tracking-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-[rgba(235,235,237,0.5)] text-base max-w-xl leading-relaxed">{description}</p>
      )}
    </div>
  )
}

function PreviewBlock({ id, label, title, description, children }) {
  return (
    <section id={id} className="border-b border-[rgba(21,183,254,0.08)] py-16">
      <SectionHeader label={label} title={title} description={description} />
      {children}
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-aurora text-cintilante">
      <Navbar />

      {/* ── Hero do preview ──────────────────────────────────── */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(0,101,254,0.18)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(21,183,254,0.1)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative">
          <p className="text-nebulosa text-xs font-medium uppercase tracking-widest mb-4">
            Design System — Fase 1
          </p>
          <h1
            className="font-bold text-5xl lg:text-7xl tracking-tight mb-6 leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="bg-gradient-to-r from-cintilante to-nebulosa bg-clip-text text-transparent">
              InBot
            </span>
            <br />
            <span className="text-cintilante">Design System</span>
          </h1>
          <p className="text-[rgba(235,235,237,0.55)] text-lg max-w-2xl leading-relaxed">
            Preview de tokens visuais, componentes base e linguagem de marca.
            Esta tela é apenas para validação do sistema de design —
            a landing page final será construída na próxima fase.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {['Vite', 'React', 'Tailwind CSS', 'CSS Variables', 'Fase 1'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium border border-[rgba(21,183,254,0.2)] text-nebulosa bg-[rgba(21,183,254,0.06)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Conteúdo do preview ──────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pb-24">

        <PreviewBlock
          id="cores"
          label="01 — Identidade"
          title="Paleta de Cores"
          description="Cores oficiais da InBot e tokens semânticos derivados para uso no produto."
        >
          <ColorSwatches />
        </PreviewBlock>

        <PreviewBlock
          id="tipografia"
          label="02 — Tipografia"
          title="Escala Tipográfica"
          description="Hierarquia de tipos com Poppins como fonte principal e Noopla Bold para títulos (a ser adicionada localmente)."
        >
          <TypographyScale />
        </PreviewBlock>

        <PreviewBlock
          id="componentes"
          label="03 — Componentes"
          title="Componentes Base"
          description="Botões, badges, cards e métricas que formam o vocabulário visual da plataforma."
        >
          <ComponentPreview />
        </PreviewBlock>

        {/* Seção clara — contraste */}
        <section className="mt-16 rounded-3xl bg-[#f5f7ff] p-10">
          <p className="text-[rgba(12,10,59,0.45)] text-xs font-medium uppercase tracking-widest mb-3">
            04 — Modo Claro
          </p>
          <h3
            className="text-aurora font-bold text-2xl mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Seção em fundo claro
          </h3>
          <p className="text-[rgba(12,10,59,0.6)] text-base leading-relaxed max-w-2xl">
            Algumas seções da landing utilizarão fundo claro para criar contraste e ritmo visual.
            A identidade da marca se mantém por meio da tipografia, dos tokens de cor e da hierarquia.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-[rgba(2,60,143,0.2)] text-abismo bg-[rgba(2,60,143,0.06)]">
              Fundo claro
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-[rgba(0,101,254,0.2)] text-nucleo bg-[rgba(0,101,254,0.06)]">
              Texto escuro
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-[rgba(21,183,254,0.3)] text-nucleo bg-[rgba(21,183,254,0.08)]">
              Marca presente
            </span>
          </div>
        </section>

        {/* Footer do preview */}
        <div className="mt-24 pt-8 border-t border-[rgba(21,183,254,0.08)] flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-[rgba(235,235,237,0.35)] text-sm">
              InBot Design System — Fase 1 &middot; Preview interno
            </p>
            <p className="text-[rgba(235,235,237,0.2)] text-xs mt-1">
              A landing page final ainda não foi implementada.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-nucleo to-nebulosa" />
            <span
              className="text-cintilante font-semibold text-sm"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              InBot
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
