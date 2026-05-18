// HeroEyebrow — "SOMOS A INBOT" com chaser/cascata nos chevrons laterais.
// 4 chevrons por lado; brilho percorre da borda para o texto em ambos os lados.
// Sem GSAP, sem transform — apenas opacity + text-shadow em CSS.

const STEP = 0.32 // segundos entre cada chevron

function ChevronChaser({ chars, delays }) {
  return (
    <span className="inline-flex items-center gap-[3px]" aria-hidden="true">
      {chars.map((char, i) => (
        <span key={i} className="inbot-chaser-chevron" style={{ animationDelay: delays[i] }}>
          {char}
        </span>
      ))}
    </span>
  )
}

export function HeroEyebrow({ children }) {
  // Grupo esquerdo › › ›: cascata da esquerda (fora) para a direita (texto)
  const leftDelays  = [`0s`, `${STEP}s`, `${STEP * 2}s`]
  // Grupo direito ‹ ‹ ‹: cascata da direita (fora) para a esquerda (texto)
  const rightDelays = [`${STEP * 2}s`, `${STEP}s`, `0s`]

  return (
    <div
      className="inline-flex items-center justify-center gap-3"
      role="text"
      aria-label={typeof children === 'string' ? children : undefined}
    >
      <ChevronChaser chars={['›', '›', '›']} delays={leftDelays} />

      <span className="text-[13px] lg:text-[17px] font-semibold tracking-[0.22em] uppercase text-[rgba(21,183,254,0.82)]">
        {children}
      </span>

      <ChevronChaser chars={['‹', '‹', '‹']} delays={rightDelays} />
    </div>
  )
}
