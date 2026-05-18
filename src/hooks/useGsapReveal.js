import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {

        // ── Hero entrance — above fold, staggered on load ─────────────
        gsap.from('[data-hero-eyebrow]', {
          opacity: 0, y: 16,
          duration: 0.7, ease: 'power3.out', delay: 0.12,
        })
        gsap.from('[data-hero-h1]', {
          opacity: 0, y: 24,
          duration: 0.82, ease: 'power3.out', delay: 0.28,
        })
        gsap.from('[data-hero-sub]', {
          opacity: 0, y: 16,
          duration: 0.72, ease: 'power3.out', delay: 0.44,
        })
        gsap.from('[data-hero-cta]', {
          opacity: 0, y: 12,
          duration: 0.6, ease: 'power3.out', delay: 0.58,
        })

        // ── Hero glow parallax on scroll ─────────────────────────────
        gsap.to('[data-hero-glow-top]', {
          y: -48, ease: 'none',
          scrollTrigger: {
            trigger: '[data-hero-section]',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
        gsap.to('[data-hero-glow-br]', {
          y: 36, x: -18, ease: 'none',
          scrollTrigger: {
            trigger: '[data-hero-section]',
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        })

        // ── Section header reveals — data-gsap-reveal elements ────────
        gsap.utils.toArray('[data-gsap-reveal]').forEach(el => {
          gsap.fromTo(el,
            { opacity: 0, y: 28 },
            {
              opacity: 1, y: 0,
              duration: 0.75, ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 82%', once: true },
            }
          )
        })

        // ── Card grid stagger — children of data-gsap-stagger grids ──
        gsap.utils.toArray('[data-gsap-stagger]').forEach(grid => {
          const cards = Array.from(grid.children)
          if (!cards.length) return
          gsap.fromTo(
            cards,
            { opacity: 0, y: 24 },
            {
              opacity: 1, y: 0,
              duration: 0.65, ease: 'power3.out', stagger: 0.09,
              scrollTrigger: { trigger: grid, start: 'top 85%', once: true },
            }
          )
        })

      })

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])
}
