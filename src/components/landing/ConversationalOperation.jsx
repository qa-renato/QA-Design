import { Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { useLanguage } from '../../context/LanguageContext'

function StateColumn({ title, items, dark = false }) {
  return (
    <div
      className={[
        'flex-1 rounded-2xl p-6 lg:p-8',
        dark
          ? 'bg-[#12103d] border border-[rgba(21,183,254,0.12)]'
          : 'bg-[rgba(235,235,237,0.04)] border border-[rgba(235,235,237,0.08)]',
      ].join(' ')}
    >
      <p
        className={[
          'text-xs font-medium uppercase tracking-widest mb-5',
          dark ? 'text-nebulosa' : 'text-[rgba(235,235,237,0.35)]',
        ].join(' ')}
      >
        {title}
      </p>
      <ul className="flex flex-col gap-3" role="list">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className={['mt-0.5 shrink-0', dark ? 'text-nebulosa' : 'text-[rgba(235,235,237,0.25)]'].join(' ')}
              aria-hidden="true"
            >
              {dark ? '✓' : '—'}
            </span>
            <span
              className={[
                'text-sm leading-relaxed',
                dark ? 'text-[rgba(235,235,237,0.8)]' : 'text-[rgba(235,235,237,0.35)] line-through decoration-[rgba(235,235,237,0.15)]',
              ].join(' ')}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ConversationalOperation() {
  const { content } = useLanguage()
  const { operation } = content

  return (
    <section
      className="bg-[#0e0c3a] py-20 lg:py-28"
      aria-label="Operação conversacional"
    >
      <Reveal className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <Badge variant="accent" className="mb-4">{operation.badge}</Badge>
          <h2
            className="text-3xl lg:text-4xl font-bold text-cintilante mb-4 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {operation.headline}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          <StateColumn title={operation.before.title} items={operation.before.items} dark={false} />

          <div className="flex md:flex-col items-center justify-center gap-2 shrink-0 my-2 md:my-0 md:px-2" aria-hidden="true">
            <div className="flex-1 w-px md:h-px bg-gradient-to-b md:bg-gradient-to-r from-transparent via-[rgba(21,183,254,0.3)] to-transparent hidden md:block" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nucleo to-nebulosa flex items-center justify-center text-white text-xs font-bold shadow-[0_0_20px_rgba(0,101,254,0.4)]">
              →
            </div>
            <div className="flex-1 w-px md:h-px bg-gradient-to-b md:bg-gradient-to-r from-transparent via-[rgba(21,183,254,0.3)] to-transparent hidden md:block" />
          </div>

          <StateColumn title={operation.after.title} items={operation.after.items} dark={true} />
        </div>
      </Reveal>
    </section>
  )
}
