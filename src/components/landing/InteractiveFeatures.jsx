import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

// ── L-beam — path ajustado para ícone 72px ────────────────────────────
// Segmento 1 vertical: x=-8, y=0..97 (para antes do topo do ícone)
// Salto invisível coberto pelo ícone (DOM order posterior)
// Segmento 2 horizontal: x=74..400, y=136 (centro vertical do ícone 72px)
function LBeam() {
  const PATH = 'M -8 0 L -8 97 M 74 136 L 420 136'
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="422"
      height="142"
      viewBox="0 0 422 142"
      className="absolute pointer-events-none hidden lg:block"
      style={{ top: -100, left: 0, overflow: 'visible' }}
    >
      <defs>
        <filter id="ifeat-beam-glow" x="-400%" y="-400%" width="900%" height="900%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d={PATH} stroke="rgba(21,183,254,0.13)" strokeWidth="1.5" fill="none"
        strokeLinecap="round" strokeLinejoin="round" />
      <path d={PATH} stroke="#15b7fe" strokeWidth="2" fill="none"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#ifeat-beam-glow)" className="ifeat-beam" />
    </svg>
  )
}

// ── SVG illustrations — viewBox="0 0 520 220", conteúdo centrado/esquerda ─

function GenerativeVisual() {
  const nodes = [
    { x: 80,  y: 110, r: 22, main: true },
    { x: 200, y: 55,  r: 14 },
    { x: 200, y: 110, r: 14 },
    { x: 200, y: 165, r: 14 },
    { x: 320, y: 75,  r: 10 },
    { x: 320, y: 110, r: 10 },
    { x: 320, y: 145, r: 10 },
    { x: 400, y: 95,  r: 7 },
    { x: 400, y: 125, r: 7 },
  ]
  const edges = [
    [0,1],[0,2],[0,3],
    [1,4],[1,5],[2,5],[2,6],[3,6],
    [4,7],[5,7],[5,8],[6,8],
  ]
  return (
    <svg viewBox="0 0 520 220" fill="none" aria-hidden="true" className="w-full h-full">
      <defs>
        <radialGradient id="gen-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#15b7fe" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#15b7fe" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="80" cy="110" rx="55" ry="55" fill="url(#gen-glow)" />
      {edges.map(([a,b], i) => (
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(0,101,254,0.18)" strokeWidth="1.2" strokeDasharray="4 3" />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 6} fill="rgba(21,183,254,0.06)" />
          <circle cx={n.x} cy={n.y} r={n.r}
            fill={n.main ? '#0c0a3b' : 'white'}
            stroke={n.main ? '#15b7fe' : 'rgba(0,101,254,0.3)'}
            strokeWidth={n.main ? 2 : 1.5} />
          {n.main && (
            <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="13" fill="#15b7fe" fontWeight="700">IA</text>
          )}
        </g>
      ))}
      {/* Output labels */}
      {[['copy', 400, 82], ['chat', 400, 112], ['flow', 400, 142]].map(([l,x,y]) => (
        <rect key={l} x={x + 12} y={y - 10} width={42} height={18} rx="5"
          fill="rgba(0,101,254,0.08)" stroke="rgba(0,101,254,0.2)" strokeWidth="1" />
      ))}
      {[['copy', 433, 94], ['chat', 433, 124], ['flow', 433, 154]].map(([l,x,y]) => (
        <text key={l} x={x} y={y} textAnchor="middle" fontSize="9" fill="#023c8f" fontWeight="600">{l}</text>
      ))}
    </svg>
  )
}

function ContextVisual() {
  const bubbles = [
    { x: 60,  y: 35,  w: 160, h: 32, right: false, text: 'Quero saber sobre planos' },
    { x: 220, y: 85,  w: 140, h: 32, right: true,  text: 'Claro! Qual é seu perfil?' },
    { x: 60,  y: 135, w: 170, h: 32, right: false, text: 'Sou empreendedor, 50 users' },
    { x: 200, y: 183, w: 180, h: 32, right: true,  text: 'Recomendo o plano Growth!' },
  ]
  return (
    <svg viewBox="0 0 520 230" fill="none" aria-hidden="true" className="w-full h-full">
      {bubbles.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="10"
            fill={b.right ? 'rgba(0,101,254,0.1)' : 'white'}
            stroke={b.right ? 'rgba(0,101,254,0.25)' : 'rgba(0,101,254,0.18)'} strokeWidth="1.2" />
          <text x={b.x + 12} y={b.y + 21} fontSize="9.5" fill={b.right ? '#023c8f' : 'rgba(12,10,59,0.65)'}
            fontWeight={b.right ? '600' : '400'}>{b.text}</text>
        </g>
      ))}
      {/* Context bar — right side */}
      <rect x="390" y="30" width="110" height="170" rx="12"
        fill="rgba(0,101,254,0.04)" stroke="rgba(0,101,254,0.15)" strokeWidth="1" />
      <text x="445" y="52" textAnchor="middle" fontSize="8" fill="#023c8f" fontWeight="700" letterSpacing="1">CONTEXTO</text>
      {[['Perfil', 'Empreend.', 70],['Plano', 'Growth', 100],['Jornada', 'D3', 130],['Score', '92%', 160]].map(([k,v,y]) => (
        <g key={k}>
          <text x="402" y={y} fontSize="8" fill="rgba(12,10,59,0.45)">{k}</text>
          <text x="493" y={y} textAnchor="end" fontSize="8.5" fill="#0065fe" fontWeight="600">{v}</text>
          <line x1="402" y1={y+5} x2="493" y2={y+5} stroke="rgba(0,101,254,0.08)" strokeWidth="1" />
        </g>
      ))}
      {/* Connecting dots */}
      {[51, 101, 151, 197].map((y,i) => (
        <circle key={i} cx="382" cy={y} r="3" fill="rgba(21,183,254,0.5)" />
      ))}
    </svg>
  )
}

function CurationVisual() {
  const stages = [
    { x: 55,  label: 'Treino',   items: ['Exemplo A','Exemplo B','Exemplo C'] },
    { x: 215, label: 'Curadoria', items: ['✓ Aprovado','✗ Ajustado','✓ Aprovado'] },
    { x: 375, label: 'Deploy',    items: ['v1.4 ativo','Produção','98% ok'] },
  ]
  return (
    <svg viewBox="0 0 520 220" fill="none" aria-hidden="true" className="w-full h-full">
      {stages.map((s, si) => (
        <g key={si}>
          <rect x={s.x} y="20" width="130" height="170" rx="12"
            fill={si === 1 ? 'rgba(0,101,254,0.06)' : 'white'}
            stroke="rgba(0,101,254,0.18)" strokeWidth="1.2" />
          <rect x={s.x} y="20" width="130" height="30" rx="12"
            fill={si === 1 ? 'rgba(0,101,254,0.15)' : 'rgba(0,101,254,0.07)'} />
          <rect x={s.x} y="38" width="130" height="12" rx="0"
            fill={si === 1 ? 'rgba(0,101,254,0.15)' : 'rgba(0,101,254,0.07)'} />
          <text x={s.x + 65} y="40" textAnchor="middle" fontSize="10" fill="#023c8f" fontWeight="700">{s.label}</text>
          {s.items.map((item, ii) => (
            <g key={ii}>
              <rect x={s.x + 10} y={67 + ii * 36} width="110" height="24" rx="6"
                fill="white" stroke="rgba(0,101,254,0.12)" strokeWidth="1" />
              <text x={s.x + 65} y={83 + ii * 36} textAnchor="middle" fontSize="9"
                fill={item.startsWith('✓') ? '#0065fe' : item.startsWith('✗') ? '#023c8f' : 'rgba(12,10,59,0.55)'}
                fontWeight={item.startsWith('✓') || item.startsWith('✗') ? '600' : '400'}>{item}</text>
            </g>
          ))}
        </g>
      ))}
      {/* Arrows between stages */}
      {[185, 345].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="110" x2={x + 22} y2="110" stroke="rgba(0,101,254,0.4)" strokeWidth="1.5" />
          <polygon points={`${x+22},106 ${x+30},110 ${x+22},114`} fill="rgba(0,101,254,0.4)" />
        </g>
      ))}
    </svg>
  )
}

function DataVisual() {
  const bars = [38, 62, 48, 80, 58, 92, 70]
  const kpis = [['NPS', '87'], ['CSAT', '94%'], ['Desvio', '2.1%']]
  return (
    <svg viewBox="0 0 520 220" fill="none" aria-hidden="true" className="w-full h-full">
      {/* Grid lines */}
      {[40, 80, 120, 160].map((y, i) => (
        <line key={i} x1="50" y1={y} x2="340" y2={y}
          stroke="rgba(0,101,254,0.07)" strokeWidth="1" strokeDasharray="4 3" />
      ))}
      {/* Bars */}
      {bars.map((h, i) => {
        const barH = h * 1.5
        const x = 65 + i * 40
        const y = 170 - barH
        return (
          <g key={i}>
            <rect x={x} y={y} width="24" height={barH} rx="4"
              fill={i === 5 ? '#0065fe' : 'rgba(0,101,254,0.2)'}
              stroke={i === 5 ? 'rgba(0,101,254,0.5)' : 'none'} />
            {i === 5 && (
              <text x={x + 12} y={y - 6} textAnchor="middle" fontSize="9" fill="#0065fe" fontWeight="700">pico</text>
            )}
          </g>
        )
      })}
      {/* Trend line */}
      <polyline
        points={bars.map((h, i) => `${77 + i * 40},${170 - h * 1.5}`).join(' ')}
        stroke="#15b7fe" strokeWidth="2" strokeLinejoin="round"
        fill="none" strokeDasharray="4 2" opacity="0.7" />
      {/* KPI cards */}
      {kpis.map(([k, v], i) => (
        <g key={k}>
          <rect x={360} y={20 + i * 62} width="130" height="50" rx="10"
            fill="white" stroke="rgba(0,101,254,0.18)" strokeWidth="1" />
          <text x={376} y={44 + i * 62} fontSize="9" fill="rgba(12,10,59,0.45)" fontWeight="500">{k}</text>
          <text x={376} y={60 + i * 62} fontSize="17" fill="#0065fe" fontWeight="800">{v}</text>
        </g>
      ))}
      {/* X axis */}
      <line x1="50" y1="172" x2="340" y2="172" stroke="rgba(0,101,254,0.15)" strokeWidth="1" />
    </svg>
  )
}

function MethodologyVisual() {
  const steps = [
    { n: '1', label: 'Diagnóstico', done: true },
    { n: '2', label: 'Roadmap',     done: true },
    { n: '3', label: 'Implantação', done: true },
    { n: '4', label: 'Medição',     done: false },
    { n: '5', label: 'Escala',      done: false },
  ]
  return (
    <svg viewBox="0 0 520 220" fill="none" aria-hidden="true" className="w-full h-full">
      {/* Track line */}
      <line x1="60" y1="110" x2="460" y2="110" stroke="rgba(0,101,254,0.12)" strokeWidth="2" />
      {/* Progress fill — 3 of 5 */}
      <line x1="60" y1="110" x2="252" y2="110" stroke="#0065fe" strokeWidth="2.5" />
      {steps.map((s, i) => {
        const x = 60 + i * 100
        return (
          <g key={i}>
            {/* Connector */}
            {i < steps.length - 1 && (
              <line x1={x} y1="110" x2={x + 100} y2="110"
                stroke={s.done ? '#0065fe' : 'rgba(0,101,254,0.12)'} strokeWidth="2" />
            )}
            {/* Step circle */}
            <circle cx={x} cy={110} r={18}
              fill={s.done ? '#0065fe' : 'white'}
              stroke={s.done ? '#0065fe' : 'rgba(0,101,254,0.3)'} strokeWidth="1.5" />
            {s.done
              ? <text x={x} y={115} textAnchor="middle" fontSize="11" fill="white" fontWeight="700">✓</text>
              : <text x={x} y={115} textAnchor="middle" fontSize="11" fill="rgba(0,101,254,0.5)" fontWeight="700">{s.n}</text>
            }
            {/* Label */}
            <text x={x} y={143} textAnchor="middle" fontSize="9" fill={s.done ? '#023c8f' : 'rgba(12,10,59,0.38)'}
              fontWeight={s.done ? '600' : '400'}>{s.label}</text>
            {/* KPI pill for done steps */}
            {s.done && i < 3 && (
              <g>
                <rect x={x - 24} y={65} width={48} height={20} rx="6"
                  fill="rgba(0,101,254,0.08)" stroke="rgba(0,101,254,0.2)" strokeWidth="1" />
                <text x={x} y={79} textAnchor="middle" fontSize="8.5" fill="#0065fe" fontWeight="600">
                  {['100%', '+18 KPIs', 'MVP'][i]}
                </text>
              </g>
            )}
          </g>
        )
      })}
      {/* Current step highlight */}
      <circle cx={360} cy={110} r={24} fill="none" stroke="rgba(0,101,254,0.2)" strokeWidth="2" strokeDasharray="4 3" />
      <text x="260" y="185" textAnchor="middle" fontSize="9" fill="rgba(12,10,59,0.35)">Etapa atual — Medição de KPIs e performance</text>
    </svg>
  )
}

const TAB_VISUALS = {
  generative:  GenerativeVisual,
  context:     ContextVisual,
  curation:    CurationVisual,
  data:        DataVisual,
  methodology: MethodologyVisual,
}

// ── Componente principal ───────────────────────────────────────────────
export function InteractiveFeatures() {
  const { content } = useLanguage()
  const { interactiveFeatures } = content
  const [activeTab, setActiveTab] = useState(0)

  const tab = interactiveFeatures.tabs[activeTab]
  const Visual = TAB_VISUALS[tab.id]

  return (
    <section
      id="solucoes"
      className="bg-[#f7f9ff] py-20 lg:py-28 border-t border-[rgba(0,101,254,0.1)]"
      aria-labelledby="ifeat-title"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 lg:gap-14 items-start">

          {/* ═══════════════════════════════════════════════════════
              COLUNA ESQUERDA — ícone standalone + card com tablist
              ═══════════════════════════════════════════════════════ */}
          <div className="relative flex flex-col gap-5 lg:sticky lg:top-20">

            {/* L-beam — só desktop */}
            <LBeam />

            {/* Ícone 72px — standalone, acima do card */}
            <div className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-2xl bg-[#0c0a3b] border border-[rgba(21,183,254,0.28)] shadow-[0_0_28px_rgba(21,183,254,0.2)] shrink-0">
              <img
                src="/assets/testimonials/logo.png"
                alt="InBot"
                className="w-[52px] h-[52px] object-contain brightness-0 invert"
                loading="eager"
                draggable="false"
              />
            </div>

            {/* Card branco com eyebrow + título + tablist */}
            <div className="rounded-[28px] bg-white border border-[rgba(0,101,254,0.1)] shadow-[0_2px_24px_rgba(0,101,254,0.06)] overflow-hidden">

              {/* Header do card */}
              <div className="px-7 pt-7 pb-5">
                <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#0065fe] mb-4">
                  {interactiveFeatures.eyebrow}
                </p>
                <h2
                  id="ifeat-title"
                  className="text-[22px] lg:text-[26px] font-bold leading-[1.2] tracking-tight text-[#0c0a3b]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {interactiveFeatures.title}
                </h2>
                <div className="w-8 h-[2px] bg-[rgba(0,101,254,0.2)] mt-5" aria-hidden="true" />
              </div>

              {/* Tablist vertical */}
              <nav role="tablist" aria-label={interactiveFeatures.title}>
                {interactiveFeatures.tabs.map((t, i) => {
                  const isActive = i === activeTab
                  return (
                    <div key={t.id}>
                      {i > 0 && (
                        <div className="h-px bg-[rgba(0,101,254,0.07)] mx-7" aria-hidden="true" />
                      )}
                      <button
                        role="tab"
                        id={`ifeat-tab-${t.id}`}
                        aria-selected={isActive}
                        aria-controls={`ifeat-panel-${t.id}`}
                        onClick={() => setActiveTab(i)}
                        className={[
                          'flex items-center gap-4 w-full px-7 py-[15px] text-left',
                          'border-l-[3px] transition-all duration-150',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0065fe] focus-visible:ring-inset',
                          isActive
                            ? 'border-[#0065fe] bg-[rgba(0,101,254,0.05)]'
                            : 'border-transparent hover:bg-[rgba(0,101,254,0.025)] hover:border-[rgba(0,101,254,0.15)]',
                        ].join(' ')}
                      >
                        {/* Dot indicator */}
                        <span
                          aria-hidden="true"
                          className={[
                            'shrink-0 w-2 h-2 rounded-full transition-all duration-150',
                            isActive
                              ? 'bg-[#0065fe]'
                              : 'border-[1.5px] border-[rgba(0,101,254,0.35)] bg-transparent',
                          ].join(' ')}
                        />
                        <span
                          className={[
                            'text-[13px] leading-snug transition-colors duration-150',
                            isActive
                              ? 'font-semibold text-[#0c0a3b]'
                              : 'font-medium text-[rgba(12,10,59,0.48)]',
                          ].join(' ')}
                        >
                          {t.title}
                        </span>
                      </button>
                    </div>
                  )
                })}
              </nav>

              <div className="h-5" />
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════
              COLUNA DIREITA — card visual + mulher + textos
              ═══════════════════════════════════════════════════════ */}
          <div className="relative mt-0">

            {/* Card visual grande — overflow-visible p/ mulher */}
            <div
              className="relative rounded-[24px] overflow-visible bg-gradient-to-br from-[#edf3ff] to-[#f0f5ff] border border-[rgba(0,101,254,0.13)] shadow-[0_1px_16px_rgba(0,101,254,0.07)]"
              style={{ minHeight: 232 }}
              aria-hidden="true"
            >
              {/* Ilustração SVG — área responsiva */}
              <div className="pr-0 lg:pr-[202px] w-full h-[232px] lg:h-[240px]">
                <Visual />
              </div>

              {/* Detalhe de canto — círculos sutis */}
              <div className="absolute -right-6 -top-6 w-[120px] h-[120px] rounded-full border border-[rgba(0,101,254,0.07)] pointer-events-none" />
              <div className="absolute -right-2 -top-2 w-[72px] h-[72px] rounded-full border border-[rgba(0,101,254,0.05)] pointer-events-none" />
            </div>

            {/* Mulher — absoluta, canto direito do card, apenas desktop */}
            <div
              className="absolute right-[-8px] top-[-24px] w-[195px] pointer-events-none select-none hidden lg:block"
              aria-hidden="true"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80px] rounded-full bg-[radial-gradient(ellipse,rgba(0,101,254,0.1)_0%,transparent_70%)]" />
              <img
                src="/assets/testimonials/p1.png"
                alt=""
                className="relative w-full object-contain"
                loading="lazy"
                draggable="false"
              />
            </div>

            {/* Painel ativo — key força re-mount e re-anima entrada */}
            <div
              key={`${activeTab}-${tab.id}`}
              role="tabpanel"
              id={`ifeat-panel-${tab.id}`}
              aria-labelledby={`ifeat-tab-${tab.id}`}
              className="inbot-ifeat-panel mt-6 pr-0 lg:pr-[210px] flex flex-col gap-4"
            >
              {/* Bullets de texto */}
              <div className="flex flex-col gap-3">
                {tab.texts.map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[10px] shrink-0 w-[7px] h-[7px] rounded-full border-[1.5px] border-[#0065fe] opacity-60"
                    />
                    <p className="text-[rgba(12,10,59,0.68)] text-[15px] leading-[1.75]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlight card com ícone decorativo */}
              <div className="flex items-start gap-4 p-4 rounded-[16px] border border-[rgba(0,101,254,0.16)] bg-white shadow-[0_1px_8px_rgba(0,101,254,0.05)]">
                <div
                  className="shrink-0 w-9 h-9 rounded-xl bg-[rgba(0,101,254,0.08)] border border-[rgba(0,101,254,0.12)] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="5" stroke="#0065fe" strokeWidth="1.5" />
                    <circle cx="8" cy="8" r="2" fill="#0065fe" />
                  </svg>
                </div>
                <p className="text-[#023c8f] text-[13px] lg:text-[14px] font-semibold leading-relaxed">
                  {tab.highlight}
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
