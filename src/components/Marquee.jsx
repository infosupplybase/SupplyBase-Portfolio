import { services } from '../data/siteData.js'

// Slow ribbon of service names between sections. Decorative only.
export default function Marquee() {
  const items = [...services.map((s) => s.title), 'Modular Kitchens', 'Wall Panelling', 'Furniture & Tables']
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((n) => (
          <ul key={n}>
            {items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
