import { useEffect } from 'react'

// Gives every `.tilt` element a 3D tilt that follows the mouse.
// One delegated listener for the whole page; it only writes CSS variables
// (--rx, --ry, --gx, --gy, --sx, --sy) — index.css does the actual 3D.
// Skipped on touch screens and when the user prefers reduced motion.
export default function useTilt3D() {
  useEffect(() => {
    if (window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return

    let active = null
    let frame = 0

    const reset = (el) => {
      el.classList.remove('is-tilting')
      for (const v of ['--rx', '--ry', '--gx', '--gy', '--sx', '--sy']) el.style.removeProperty(v)
    }

    const onMove = (e) => {
      const el = e.target.closest?.('.tilt')
      if (active && active !== el) reset(active)
      active = el
      if (!el) return

      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5 // -0.5 … 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        const max = el.classList.contains('tilt--strong') ? 22 : 12
        el.style.setProperty('--rx', `${(-y * max).toFixed(2)}deg`)
        el.style.setProperty('--ry', `${(x * max).toFixed(2)}deg`)
        el.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(1)}%`)
        el.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(1)}%`)
        // Shadow falls away from the raised corner
        el.style.setProperty('--sx', `${(-x * 30).toFixed(1)}px`)
        el.style.setProperty('--sy', `${(-y * 30 + 24).toFixed(1)}px`)
        el.classList.add('is-tilting')
      })
    }

    const onLeave = () => {
      if (active) reset(active)
      active = null
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])
}
