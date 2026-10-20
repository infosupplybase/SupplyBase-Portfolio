import { useEffect, useRef, useState } from 'react'
import { stats, company } from '../data/siteData.js'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    let frame
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const duration = 1400
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        setCount(Math.round(value * (1 - Math.pow(1 - t, 3))))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <strong ref={ref}>
      {count}
      {suffix}
    </strong>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <p className="stats__tagline">
          {company.tagline} <span>{company.subTagline}</span>
        </p>
        <div className="stats__grid">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
