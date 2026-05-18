import { useEffect, useRef, useState } from 'react'

// Reveal — wrapper que aplica fade + translateY quando entra na viewport.
// Usa IntersectionObserver, anima apenas uma vez, respeita prefers-reduced-motion.
// Props:
//   children   — conteúdo
//   delay      — ms de atraso na transição (default 0)
//   className  — classes adicionais para o wrapper
//   as         — tag HTML do wrapper (default 'div')
//   ...rest    — qualquer outro atributo (id, aria-label, etc.)

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Reduced motion: mostrar direto, sem JS animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={['inbot-reveal', visible && 'is-visible', className].filter(Boolean).join(' ')}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
