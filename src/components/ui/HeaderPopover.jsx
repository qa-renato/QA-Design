import { useEffect, useState } from 'react'

// containerRef: ref do wrapper pai (trigger + popover). Cliques dentro do
// wrapper não fecham o popover — só cliques fora. Isso evita o conflito entre
// mousedown (onClose) e onClick (toggle) no botão trigger.
export function HeaderPopover({ open, onClose, children, align = 'left', containerRef }) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  // Monta antes de animar; desmonta só depois da animação de saída terminar.
  useEffect(() => {
    if (open) {
      setMounted(true)
    } else {
      setVisible(false)
      const t = setTimeout(() => setMounted(false), 160)
      return () => clearTimeout(t)
    }
  }, [open])

  // Aplica visible um frame após montagem, garantindo que a transição CSS dispare.
  useEffect(() => {
    if (!mounted || !open) return
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [mounted, open])

  // Listeners: Escape e clique fora do container.
  useEffect(() => {
    if (!open) return
    function handleKey(e) { if (e.key === 'Escape') onClose() }
    function handleDown(e) {
      const container = containerRef?.current
      if (container && !container.contains(e.target)) onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleDown)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleDown)
    }
  }, [open, onClose, containerRef])

  if (!mounted) return null

  return (
    <div
      className={[
        'absolute top-full mt-3 z-50',
        'bg-[#f5f7ff] rounded-2xl overflow-hidden',
        'border border-[rgba(0,101,254,0.1)]',
        'shadow-[0_8px_40px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.08)]',
        'transition-[opacity,transform] duration-150 ease-out',
        visible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-1.5 scale-[0.98] pointer-events-none',
        align === 'right' ? 'right-0' : 'left-0',
      ].join(' ')}
    >
      {children}
    </div>
  )
}
