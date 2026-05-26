import { useState } from 'react'
import { Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { useLanguage } from '../../context/LanguageContext'

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false)
  const id = `faq-answer-${index}`

  return (
    <div className="border-b border-[rgba(2,60,143,0.12)] last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-aurora font-medium text-base group-hover:text-nucleo transition-colors duration-200">
          {question}
        </span>
        <span
          className="shrink-0 w-6 h-6 rounded-full border border-[rgba(2,60,143,0.2)] flex items-center justify-center text-nucleo text-sm font-bold transition-all duration-200 group-hover:border-nucleo group-hover:bg-[rgba(0,101,254,0.06)]"
          aria-hidden="true"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }}
        >
          +
        </span>
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="grid"
        style={{
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: open
            ? 'grid-template-rows 350ms cubic-bezier(0.16,1,0.3,1)'
            : 'grid-template-rows 200ms ease-in',
        }}
      >
        <div className="overflow-hidden min-h-0">
          <p className="text-[rgba(12,10,59,0.6)] text-sm leading-relaxed pb-5 pr-10">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const { content } = useLanguage()
  const { faq } = content

  return (
    <section
      id="faq"
      className="bg-[#f5f7ff] py-20 lg:py-28"
      aria-label="Perguntas frequentes"
    >
      <Reveal className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <Badge variant="dark" className="mb-4">{faq.badge}</Badge>
          <h2
            className="text-3xl lg:text-4xl font-bold text-aurora mb-4 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {faq.headline}
          </h2>
        </div>
        <div className="max-w-3xl bg-white rounded-2xl border border-[rgba(2,60,143,0.08)] px-6 lg:px-8 divide-y-0">
          {faq.items.map((item, i) => (
            <FAQItem key={i} index={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
