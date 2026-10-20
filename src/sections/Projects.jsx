import { useEffect, useState } from 'react'
import { projectCategories } from '../data/siteData.js'
import { projects } from '../data/media.js'
import SectionHeading from '../components/SectionHeading.jsx'
import MediaFrame from '../components/MediaFrame.jsx'
import Icon from '../components/Icons.jsx'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
  // Only offer filter tabs that have at least one project
  const tabs = projectCategories.filter((c) => c.id === 'all' || projects.some((p) => p.category === c.id))

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => e.key === 'Escape' && setLightbox(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="projects" className="section section--dark">
      <div className="container">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Featured Projects"
          text="Real homes we have designed, ceilinged and finished. Tap any photo to view it full size."
        />

        <div className="filters" role="tablist">
          {tabs.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={filter === c.id}
              className={`filter ${filter === c.id ? 'is-active' : ''}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((p) => (
            <button
              key={p.id}
              className="project-card"
              onClick={() => p.src && setLightbox(p)}
              aria-label={`${p.title}, ${p.project}`}
            >
              <MediaFrame src={p.src} alt={p.title} label="Project photo" ratio="3 / 4" />
              <div className="project-card__info">
                <span className="project-card__cat">
                  {projectCategories.find((c) => c.id === p.category)?.label}
                </span>
                <h3>{p.title}</h3>
                <span className="project-card__loc">{p.project}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="lightbox__close" aria-label="Close">
            <Icon name="close" />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <figcaption>
              {lightbox.title} · {lightbox.project}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
