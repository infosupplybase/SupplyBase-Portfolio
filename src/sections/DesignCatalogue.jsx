import { useEffect, useState } from 'react'
import { catalogueIntro, designSpaces } from '../data/designCatalogue.js'
import { contact } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icons.jsx'
import Pagination from '../components/Pagination.jsx'
import usePaged from '../hooks/usePaged.js'

const askUrl = (d) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    d.code
      ? `Hello Supplybase, I like design ${d.code} (${d.name}) from your catalogue. Please share details.`
      : `Hello Supplybase, I like the ${d.name} design from your portfolio. Please share details.`,
  )}`

export default function DesignCatalogue() {
  const [spaceId, setSpaceId] = useState(designSpaces[0].id)
  const [open, setOpen] = useState(null)

  const space = designSpaces.find((s) => s.id === spaceId)
  const items = [...space.designs, ...space.more]
  const paged = usePaged(items, 4, spaceId)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section id="catalogue" className="section section--dark">
      <div className="container">
        <SectionHeading
          eyebrow="Interior Design Catalogue · 2026 Edition"
          title="64 Design Concepts"
          text="Living rooms, halls, TV units, dining, kitchens, bedrooms and false ceilings. Each design comes with a material board, highlights and finishes."
        />

        <ul className="cat-stats">
          {catalogueIntro.stats.map((s) => (
            <li key={s.label}>
              <strong className="text-gold">{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        <div className="filters" role="tablist">
          {designSpaces.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={spaceId === s.id}
              className={`filter ${spaceId === s.id ? 'is-active' : ''}`}
              onClick={() => setSpaceId(s.id)}
            >
              {s.title} <span className="filter__count">{s.designs.length + s.more.length}</span>
            </button>
          ))}
        </div>

        <p className="catalogue-space-note">{space.text}</p>

        <div className="catalogue-grid row-4 page-in" key={`${spaceId}-${paged.page}`}>
          {paged.items.map((d) => (
            <button key={d.src} className="catalogue-card design-card tilt" onClick={() => setOpen(d)}>
              <img src={d.src} alt={d.name} loading="lazy" />
              <span className="catalogue-card__info">
                {d.code && <span className="design-code">{d.code}</span>}
                <strong>{d.name}</strong>
                {d.highlights && <small className="design-card__text">{d.highlights}</small>}
                {d.finishes && (
                  <span className="design-card__finishes">{d.finishes.slice(0, 4).join(' · ')}</span>
                )}
              </span>
            </button>
          ))}
        </div>
        <Pagination {...paged} onChange={paged.setPage} label={space.title} />

        <p className="catalogue-note">{catalogueIntro.text}</p>
        <div className="catalogue-actions">
          <a className="btn btn--gold" href={contact.whatsapp} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={18} /> Ask About a Design
          </a>
        </div>
      </div>

      {open && (
        <div className="lightbox design-modal" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button className="lightbox__close" aria-label="Close">
            <Icon name="close" />
          </button>
          <div className="design-modal__panel" onClick={(e) => e.stopPropagation()}>
            <div className="design-modal__media">
              <img src={open.src} alt={open.name} />
              {open.detail && <img src={open.detail} alt={`${open.name}, detail view`} loading="lazy" />}
            </div>
            <div className="design-modal__body">
              {open.code && <span className="design-code">{open.code}</span>}
              <span className="eyebrow">{space.title}</span>
              <h3>{open.name}</h3>
              {open.highlights && (
                <>
                  <h4>Highlights</h4>
                  <p>{open.highlights}</p>
                </>
              )}
              {open.finishes && (
                <>
                  <h4>Finishes</h4>
                  <ul className="chips">
                    {open.finishes.map((f) => (
                      <li className="chip" key={f}>
                        {f}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <p className="design-modal__note">
                Can be customised to your floor plan, budget and taste. Final scope and price are confirmed after a
                site visit.
              </p>
              <a className="btn btn--gold" href={askUrl(open)} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={18} /> Ask About {open.code || 'This Design'}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
