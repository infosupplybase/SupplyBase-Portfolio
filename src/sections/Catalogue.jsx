import { useEffect, useState } from 'react'
import { catalogue } from '../data/catalogue.js'
import { contact } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icons.jsx'

const PAGE = 12

export default function Catalogue() {
  const [spaceId, setSpaceId] = useState(catalogue[0].id)
  const [shown, setShown] = useState(PAGE)
  const [lightbox, setLightbox] = useState(null)

  const space = catalogue.find((s) => s.id === spaceId)
  const items = space.items.slice(0, shown)

  const pick = (id) => {
    setSpaceId(id)
    setShown(PAGE)
  }

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => e.key === 'Escape' && setLightbox(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="designs" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Design Gallery"
          title="Interiors, Your Way"
          text="Choose a ready-made design, ceiling style or waterproofing solution, customise it to your space, and let us install it."
        />

        <div className="filters" role="tablist">
          {catalogue.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={spaceId === s.id}
              className={`filter ${spaceId === s.id ? 'is-active' : ''}`}
              onClick={() => pick(s.id)}
            >
              {s.title} <span className="filter__count">{s.items.length}</span>
            </button>
          ))}
        </div>

        {space.note && <p className="catalogue-space-note">{space.note}</p>}

        <div className="catalogue-grid">
          {items.map((item) => (
            <button key={item.src} className="catalogue-card" onClick={() => setLightbox(item)}>
              <img src={item.src} alt={item.title} loading="lazy" />
              <span className="catalogue-card__info">
                <strong>{item.title}</strong>
                {item.price && <span>{item.price}</span>}
                {item.text && <small>{item.text}</small>}
              </span>
            </button>
          ))}
        </div>

        <div className="catalogue-actions">
          {shown < space.items.length && (
            <button className="btn btn--outline" onClick={() => setShown(space.items.length)}>
              View all {space.items.length} {space.title}
            </button>
          )}
          <a
            className="btn btn--gold"
            href={space.bookUrl || `https://www.supplybase.co.in/interior-by-choice/${space.id}`}
            target="_blank"
            rel="noreferrer"
          >
            Book a Home Visit <Icon name="arrow" size={18} />
          </a>
        </div>
        <p className="catalogue-note">
          {space.bookUrl
            ? 'Our team inspects the site and confirms the scope and final price before any work starts.'
            : 'Home visit at just ₹99 — expert advice, measurement and a custom design as per your choice.'}{' '}
          Or{' '}
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp us
          </a>{' '}
          a design you like.
        </p>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="lightbox__close" aria-label="Close">
            <Icon name="close" />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <figcaption>
              {lightbox.title}
              {lightbox.price && ` · ${lightbox.price}`}
              {lightbox.text && ` — ${lightbox.text}`}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
