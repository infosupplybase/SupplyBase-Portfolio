import { useState } from 'react'
import { catalogueIntro, designSpaces } from '../data/designCatalogue.js'
import { contact } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Dialog from '../components/Dialog.jsx'
import Icon from '../components/Icons.jsx'
import Pagination from '../components/Pagination.jsx'
import usePaged from '../hooks/usePaged.js'

const askUrl = (d) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    d.code
      ? `Hello SupplyBase, I like design ${d.code} (${d.name}) from your catalogue. Please share details.`
      : `Hello SupplyBase, I like the ${d.name} design from your portfolio. Please share details.`,
  )}`

export default function DesignCatalogue() {
  const [spaceId, setSpaceId] = useState(designSpaces[0].id)
  const [open, setOpen] = useState(null)

  const space = designSpaces.find((s) => s.id === spaceId)
  const items = [...space.designs, ...space.more]
  const paged = usePaged(items, 8, spaceId)

  return (
    <section id="catalogue" className="section section--paper">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Interior Design Catalogue · 2026 Edition"
          title={
            <>
              64 design <em>concepts</em>
            </>
          }
          text="Living rooms, halls, TV units, dining, kitchens, bedrooms and false ceilings. These are design ideas, not finished jobs: each comes with a material board, highlights and finishes, and is adapted to your home."
        />

        <ul className="stats">
          {catalogueIntro.stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        <div className="tabs" role="group" aria-label="Choose a space">
          {designSpaces.map((s) => (
            <button
              key={s.id}
              className={`tab ${spaceId === s.id ? 'is-active' : ''}`}
              aria-pressed={spaceId === s.id}
              onClick={() => setSpaceId(s.id)}
            >
              {s.title} <span className="tab__count">{s.designs.length + s.more.length}</span>
            </button>
          ))}
        </div>

        <p className="space-note">{space.text}</p>

        <div className="design-grid page-in" key={`${spaceId}-${paged.page}`}>
          {paged.items.map((d) => (
            <button key={d.src} className="design-card" onClick={() => setOpen(d)}>
              <span className="design-card__media">
                <img src={d.src} alt="" loading="lazy" />
              </span>
              <span className="design-card__info">
                {d.code && <span className="design-code">{d.code}</span>}
                <strong>{d.name}</strong>
                {d.finishes && <small>{d.finishes.slice(0, 4).join(' · ')}</small>}
              </span>
            </button>
          ))}
        </div>
        <Pagination {...paged} onChange={paged.setPage} label={space.title} />

        <p className="section-note">
          {catalogueIntro.text}{' '}
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            Ask about a design on WhatsApp
          </a>
          .
        </p>
      </div>

      <Dialog open={!!open} onClose={() => setOpen(null)} label={open?.name} className="details">
        {open && (
          <div className="details__layout">
            <div className="details__media details__media--stack">
              <img src={open.src} alt={open.name} />
              {open.detail && <img src={open.detail} alt={`${open.name}, detail view`} loading="lazy" />}
            </div>
            <div className="details__body">
              {open.code && <span className="design-code">{open.code}</span>}
              <span className="eyebrow">{space.title} · Design idea</span>
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
              <p className="details__note">
                Can be customised to your floor plan, budget and taste. Final scope and price are confirmed after a
                site visit.
              </p>
              <a className="btn btn--primary" href={askUrl(open)} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={18} /> Ask About {open.code || 'This Design'}
              </a>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  )
}
