import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

// ── Linhas decorativas — SVG left-side, escondido no mobile ───────────────
// Duas paths com gradiente InBot: uma em L descendo pela esquerda-baixo,
// outra curta subindo pelo canto superior-esquerdo. Inspiradas em anatomia
// de referência; não copiadas — traçado e gradientes próprios da InBot.
function FeatureDecorativeLines() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-4 hidden h-[700px] w-[420px] lg:block"
      viewBox="0 0 420 700"
      fill="none"
    >
      <defs>
        <linearGradient
          id="inbotFeatLineA"
          x1="410" y1="700" x2="120" y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f8fbff" stopOpacity="0" />
          <stop offset="0.22" stopColor="#15b7fe" stopOpacity="0.35" />
          <stop offset="0.62" stopColor="#0065fe" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f8fbff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="inbotFeatLineB"
          x1="24" y1="130" x2="0" y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f8fbff" stopOpacity="0" />
          <stop offset="0.32" stopColor="#15b7fe" stopOpacity="0.32" />
          <stop offset="1" stopColor="#f8fbff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Linha principal — L que desce e curva para a direita */}
      <path
        opacity="0.55"
        d="M410 700V150C410 141.163 402.837 134 394 134H132"
        stroke="url(#inbotFeatLineA)"
        strokeWidth="1"
      />

      {/* Linha secundária curta — canto superior-esquerdo */}
      <path
        opacity="0.45"
        d="M1 0V116C1 124.837 8.163 132 17 132H48"
        stroke="url(#inbotFeatLineB)"
        strokeWidth="1"
      />
    </svg>
  )
}

// ── Ícone do topo da coluna esquerda ──────────────────────────────────────
// Renderiza logo OU fallback SVG — nunca os dois simultaneamente.
function FeatureIcon() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="relative inline-grid h-20 w-20 place-items-center rounded-3xl border border-[rgba(21,183,254,0.22)] bg-white shadow-[0_18px_45px_rgba(0,101,254,0.10)]">
      {/* Anéis decorativos externos */}
      <span aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-[rgba(21,183,254,0.10)]" />
      <span aria-hidden="true" className="absolute -inset-6 rounded-[2.4rem] border border-[rgba(0,101,254,0.05)]" />

      {imgFailed ? (
        <svg
          aria-hidden="true"
          className="relative z-10 h-9 w-9 text-[#0065fe]"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="13" stroke="currentColor" strokeOpacity="0.22" />
          <path d="M13 21.5C16.5 15.5 23.5 15.5 27 21.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="20" cy="21" r="2.5" fill="currentColor" opacity="0.75" />
        </svg>
      ) : (
        <img
          src="/assets/testimonials/logosemfundo.png"
          alt="InBot"
          className="relative z-10 h-12 w-12 object-contain"
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  )
}

// ── Ícones das abas ────────────────────────────────────────────────────────
function FeatureTabIcon({ type }) {
  const props = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true }

  if (type === 'generative') return (
    <svg {...props}>
      <path d="M12 3v4M12 17v4M4.2 7.2l2.8 2.8M17 14l2.8 2.8M3 12h4M17 12h4"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
  if (type === 'context') return (
    <svg {...props}>
      <path d="M5 7.5h10M5 11h7M8 18l-3 2v-4.5A3.5 3.5 0 0 1 1.5 12V7A3.5 3.5 0 0 1 5 3.5h10A3.5 3.5 0 0 1 18.5 7v5A3.5 3.5 0 0 1 15 15.5H9"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
  if (type === 'curation') return (
    <svg {...props}>
      <path d="M7 6h11M7 12h11M7 18h11M3.5 6l1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
  if (type === 'data') return (
    <svg {...props}>
      <path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-8"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
  // methodology (default)
  return (
    <svg {...props}>
      <path d="M5 6h4v4H5V6ZM15 4h4v4h-4V4ZM15 16h4v4h-4v-4ZM9 8h4M13 6h2M13 18h2M11 10l4 6"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Menu vertical de abas com indicador ativo ─────────────────────────────
const TAB_H = 58

function FeatureTabs({ tabs, activeIndex, setActiveIndex }) {
  return (
    <nav
      role="tablist"
      aria-label="Recursos da InBot"
      className="relative mt-8 overflow-hidden rounded-2xl border border-[rgba(0,101,254,0.10)] bg-[rgba(248,251,255,0.70)]"
    >
      {/* Barra indicadora ativa — spring easing */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-0 w-[3px] h-[58px] rounded-l-full motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"
        style={{
          background: 'linear-gradient(180deg,#15b7fe,#0065fe)',
          transform: `translateY(${activeIndex * TAB_H}px)`,
        }}
      />

      {tabs.map((tab, i) => {
        const isActive = i === activeIndex
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`ifeat-tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`ifeat-panel-${tab.id}`}
            onClick={() => setActiveIndex(i)}
            style={{ height: TAB_H }}
            className={[
              'group relative flex w-full items-center gap-3.5 border-b border-[rgba(0,101,254,0.08)] px-4 text-left text-[13px] font-medium last:border-b-0 transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0065fe] focus-visible:ring-inset',
              isActive
                ? 'bg-white text-[#0c0a3b]'
                : 'text-[rgba(12,10,59,0.52)] hover:bg-white/70 hover:text-[#0c0a3b]',
            ].join(' ')}
          >
            {/* Ícone wrapper */}
            <span
              className={[
                'grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition-colors',
                isActive
                  ? 'border-[rgba(21,183,254,0.30)] bg-[rgba(21,183,254,0.10)] text-[#0065fe]'
                  : 'border-[rgba(0,101,254,0.10)] bg-white/70 text-[rgba(12,10,59,0.36)] group-hover:text-[#0065fe]',
              ].join(' ')}
            >
              <FeatureTabIcon type={tab.id} />
            </span>
            <span className={isActive ? 'font-semibold' : ''}>
              {tab.title}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

// ── Textos problema / solução ──────────────────────────────────────────────
function FeatureText({ tone, children }) {
  const isSolution = tone === 'solution'
  return (
    <div
      className={[
        'flex gap-3 rounded-2xl p-3',
        isSolution ? 'bg-[rgba(21,183,254,0.05)] text-[#0c0a3b]' : 'text-[rgba(12,10,59,0.56)]',
      ].join(' ')}
    >
      <span
        className={[
          'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border',
          isSolution
            ? 'border-[#15b7fe] bg-[rgba(21,183,254,0.10)]'
            : 'border-[rgba(12,10,59,0.18)] bg-white',
        ].join(' ')}
      >
        {isSolution
          ? <span className="h-2 w-2 rounded-full bg-[#15b7fe]" />
          : <span className="h-2 w-2 rounded-full border border-[rgba(12,10,59,0.22)]" />
        }
      </span>
      <p className="text-[15px] leading-relaxed">{children}</p>
    </div>
  )
}

// ── Card de destaque — checkmark + texto forte ─────────────────────────────
function FeatureHighlight({ children }) {
  return (
    <div className="mt-6 flex items-center gap-4 rounded-[24px] border border-[rgba(0,101,254,0.10)] bg-[#f8fbff] p-5 shadow-[0_18px_50px_rgba(0,101,254,0.08)]">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[rgba(21,183,254,0.10)] text-[#0065fe]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <p className="text-[15px] font-semibold leading-snug text-[#0c0a3b]">{children}</p>
    </div>
  )
}

// ── Visuais por aba — div-based, sem imagens externas ────────────────────

function GenerativeVisual() {
  return (
    <div className="relative z-10 flex h-full items-center justify-center">
      <div className="relative grid h-[96px] w-[96px] place-items-center rounded-[26px] border border-[rgba(21,183,254,0.30)] bg-white/85 shadow-[0_18px_56px_rgba(0,101,254,0.18)]">
        <span className="relative z-10 text-2xl font-bold tracking-[-0.05em] text-[#0065fe]">IA</span>
        {/* Concentric rings */}
        <span aria-hidden="true" className="absolute -inset-5 rounded-[2.2rem] border border-[rgba(21,183,254,0.15)]" />
        <span aria-hidden="true" className="absolute -inset-9 rounded-[2.8rem] border border-[rgba(0,101,254,0.08)]" />
        {/* Floating context pills */}
        {[
          { pos: '-left-[76px] top-[-8px]',    label: 'tom' },
          { pos: '-right-[84px] top-[14px]',   label: 'contexto' },
          { pos: '-left-[68px] bottom-[-16px]', label: 'fluxo' },
          { pos: '-right-[82px] bottom-[-12px]', label: 'resposta' },
        ].map(({ pos, label }) => (
          <span
            key={label}
            className={`absolute ${pos} rounded-full border border-[rgba(0,101,254,0.12)] bg-white/95 px-3 py-1.5 text-[11px] font-medium text-[rgba(12,10,59,0.62)] shadow-sm`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

function ContextVisual() {
  return (
    <div className="relative z-10 flex h-full flex-col justify-center gap-2.5 px-7 py-5">
      <div className="self-start max-w-[72%] rounded-2xl rounded-tl-sm border border-[rgba(0,101,254,0.14)] bg-white/90 px-4 py-2.5 text-xs text-[rgba(12,10,59,0.70)] shadow-sm">
        Quero saber mais sobre os planos disponíveis
      </div>
      <div className="self-end max-w-[75%] rounded-2xl rounded-tr-sm border border-[rgba(0,101,254,0.24)] bg-[rgba(0,101,254,0.07)] px-4 py-2.5 text-xs font-semibold text-[#023c8f] shadow-sm">
        Com base no seu histórico e perfil, recomendo o Growth!
      </div>
      <div className="mt-1 flex flex-wrap gap-2">
        {['perfil', 'histórico', 'intenção'].map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-[rgba(21,183,254,0.30)] bg-[rgba(21,183,254,0.08)] px-3 py-1 text-[10px] font-semibold text-[#0065fe]"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}

function CurationVisual() {
  const stages = [
    { label: 'Treino',    done: true  },
    { label: 'Curadoria', done: true  },
    { label: 'Deploy',    done: false },
  ]
  return (
    <div className="relative z-10 flex h-full items-center justify-center px-6">
      <div className="flex items-center gap-2">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <div
              className={[
                'flex h-[80px] w-[84px] flex-col items-center justify-center gap-2 rounded-2xl border text-xs font-semibold',
                s.done
                  ? 'border-[rgba(0,101,254,0.22)] bg-[rgba(0,101,254,0.06)] text-[#023c8f]'
                  : 'border-[rgba(0,101,254,0.10)] bg-white/70 text-[rgba(12,10,59,0.38)]',
              ].join(' ')}
            >
              {s.done ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4.5 10.5l3.5 3.5 7.5-7.5" stroke="#0065fe" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="6" stroke="rgba(0,101,254,0.28)" strokeWidth="1.5" strokeDasharray="3 2" />
                </svg>
              )}
              {s.label}
            </div>
            {i < stages.length - 1 && (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 9h10M10 5l4 4-4 4" stroke="rgba(0,101,254,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function DataVisual() {
  const bars = [38, 56, 44, 72, 86, 66, 94]
  return (
    <div className="relative z-10 flex h-full items-center justify-center px-6">
      <div className="w-full max-w-[80%] rounded-[22px] border border-[rgba(0,101,254,0.10)] bg-white/88 p-5 shadow-[0_18px_56px_rgba(12,10,59,0.10)]">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-[#0c0a3b]">Insights conversacionais</span>
          <span className="rounded-full bg-[rgba(21,183,254,0.12)] px-3 py-1 text-[10px] font-semibold text-[#0065fe]">BI</span>
        </div>
        <div className="flex h-24 items-end gap-2">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-xl"
              style={{
                height: `${h}%`,
                background: 'linear-gradient(to top, #0065fe, #15b7fe)',
                opacity: 0.36 + i * 0.07,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function MethodologyVisual() {
  const steps = ['Diagnóstico', 'Roadmap', 'Implantação', 'Medição', 'Escala']
  const done = 3
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-4">
      {/* Linha de progresso + círculos */}
      <div className="relative flex w-full max-w-[340px] items-center justify-between">
        <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-[rgba(0,101,254,0.08)]" />
        <div
          className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-[#0065fe]"
          style={{ width: `${(done / (steps.length - 1)) * 100}%` }}
        />
        {steps.map((_, i) => (
          <div
            key={i}
            className={[
              'relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold',
              i < done
                ? 'border-[#0065fe] bg-[#0065fe] text-white'
                : i === done
                ? 'border-[#0065fe] bg-white text-[#0065fe]'
                : 'border-[rgba(0,101,254,0.20)] bg-white text-[rgba(0,101,254,0.35)]',
            ].join(' ')}
          >
            {i < done ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7l3 3 6-5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : i + 1}
          </div>
        ))}
      </div>
      {/* Labels */}
      <div className="flex w-full max-w-[340px] justify-between">
        {steps.map((s, i) => (
          <span
            key={s}
            className={[
              'text-center text-[9px] font-medium leading-tight',
              i < done ? 'text-[#023c8f]' : 'text-[rgba(12,10,59,0.35)]',
            ].join(' ')}
            style={{ width: 56 }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Área visual com fundo grid + glow orbs ────────────────────────────────
const TAB_VISUALS = {
  generative:  GenerativeVisual,
  context:     ContextVisual,
  curation:    CurationVisual,
  data:        DataVisual,
  methodology: MethodologyVisual,
}

function FeatureVisual({ type }) {
  const Visual = TAB_VISUALS[type] ?? GenerativeVisual
  return (
    <div className="relative h-[260px] overflow-hidden rounded-[24px] border border-[rgba(0,101,254,0.10)] bg-[linear-gradient(135deg,#eef7ff_0%,#ffffff_42%,#eaf8ff_100%)]">
      {/* Grid de fundo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,101,254,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,101,254,0.10) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Glow orbs */}
      <div aria-hidden="true" className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[rgba(21,183,254,0.18)] blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-20 right-8 h-64 w-64 rounded-full bg-[rgba(0,101,254,0.12)] blur-3xl" />
      <Visual />
    </div>
  )
}

// ── Painel principal — card grande direito ────────────────────────────────
// key no componente pai força re-mount e dispara animação CSS ao trocar tab.
function FeaturePanel({ tab }) {
  return (
    <div
      id={`ifeat-panel-${tab.id}`}
      role="tabpanel"
      aria-labelledby={`ifeat-tab-${tab.id}`}
      className="inbot-feature-panel relative rounded-[32px] border border-[rgba(0,101,254,0.10)] bg-white/75 p-5 shadow-[0_28px_80px_rgba(12,10,59,0.10)] backdrop-blur-sm lg:p-8"
    >
      <FeatureVisual type={tab.id} />
      <div className="mt-6 space-y-3">
        <FeatureText tone="problem">{tab.texts[0]}</FeatureText>
        <FeatureText tone="solution">{tab.texts[1]}</FeatureText>
      </div>
      <FeatureHighlight>{tab.highlight}</FeatureHighlight>
    </div>
  )
}

// ── Person overlay — desabilitada temporariamente ─────────────────────────
// p1.png não tem fundo transparente (todos os pixels têm alpha=255 / fundo branco).
// Reativar assim que asset com cutout transparente estiver disponível.
function FeatureWomanOverlay() {
  return null
}

// ── Dots/indicadores das abas ─────────────────────────────────────────────
function FeatureDots({ tabs, activeIndex, setActiveIndex }) {
  return (
    <div className="mt-6 flex justify-center gap-2 lg:justify-end">
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          type="button"
          aria-label={`Ver recurso: ${tab.title}`}
          onClick={() => setActiveIndex(i)}
          className={[
            'h-2 rounded-full motion-safe:transition-all motion-safe:duration-300',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0065fe] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8fbff]',
            i === activeIndex
              ? 'w-8 bg-[#0065fe]'
              : 'w-2 bg-[rgba(0,101,254,0.20)] hover:bg-[rgba(0,101,254,0.40)]',
          ].join(' ')}
        />
      ))}
    </div>
  )
}

// ── Componente principal ───────────────────────────────────────────────────
export function InteractiveFeatures() {
  const { content } = useLanguage()
  const { interactiveFeatures } = content
  const [activeTab, setActiveTab] = useState(0)

  const tab = interactiveFeatures.tabs[activeTab]

  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-[#f8fbff] py-24 lg:py-32 border-t border-[rgba(0,101,254,0.08)]"
      aria-labelledby="ifeat-title"
    >
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">

        {/* Linhas decorativas — z-0, absolutas, atrás de todo conteúdo */}
        <FeatureDecorativeLines />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-12 lg:items-start xl:gap-14">

          {/* ═══ COLUNA ESQUERDA — FeatureIntroCard ═══════════════════════
              Card branco grande contendo: ícone, eyebrow, título e tablist.
              lg:sticky garante navegação visível enquanto o painel direito rola.
              ═══════════════════════════════════════════════════════════════ */}
          <aside className="lg:sticky lg:top-20">
            <div className="relative overflow-hidden rounded-[32px] border border-[rgba(0,101,254,0.10)] bg-white/85 px-8 py-9 shadow-[0_24px_70px_rgba(12,10,59,0.08)] backdrop-blur-sm lg:px-10">

              {/* Linhas decorativas internas do card */}
              <div
                aria-hidden="true"
                className="absolute left-12 top-0 h-14 w-px bg-gradient-to-b from-transparent via-[rgba(21,183,254,0.30)] to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute left-12 top-14 h-px w-32 bg-gradient-to-r from-[rgba(21,183,254,0.25)] to-transparent"
              />

              <FeatureIcon />

              <span className="mt-7 block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0065fe]">
                {interactiveFeatures.eyebrow}
              </span>

              <h2
                id="ifeat-title"
                className="mt-3 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0c0a3b] lg:text-[30px]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {interactiveFeatures.title}
              </h2>

              <FeatureTabs
                tabs={interactiveFeatures.tabs}
                activeIndex={activeTab}
                setActiveIndex={setActiveTab}
              />
            </div>
          </aside>

          {/* ═══ COLUNA DIREITA — FeaturePanel + overlay + dots ═══════════
              min-h-[620px] garante altura mínima para o person overlay caber.
              position:relative é o referencial do FeatureWomanOverlay (absolute).
              ═══════════════════════════════════════════════════════════════ */}
          <div className="relative">
            <FeaturePanel
              key={`${activeTab}-${tab.id}`}
              tab={tab}
            />
            <FeatureWomanOverlay />
            <FeatureDots
              tabs={interactiveFeatures.tabs}
              activeIndex={activeTab}
              setActiveIndex={setActiveTab}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
