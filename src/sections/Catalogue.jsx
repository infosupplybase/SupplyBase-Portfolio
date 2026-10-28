import { useEffect, useState } from 'react'
import { catalogue } from '../data/catalogue.js'
import { contact } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icons.jsx'
import Pagination from '../components/Pagination.jsx'
import usePaged from '../hooks/usePaged.js'

export default function Catalogue() {
  const [spaceId, setSpaceId] = useState(catalogue[0].id)
  const [groupId, setGroupId] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const space = catalogue.find((s) => s.id === spaceId)
  const items = groupId === 'all' ? space.items : space.items.filter((i) => i.group === groupId)
  const paged = usePaged(items, 4, `${spaceId}-${groupId}`)

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
          text="Choose a ready-made design, furniture piece, ceiling style or waterproofing solution, customise it to your space, and let us install it."
        />

        <div className="filters" role="tablist">
          {catalogue.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={spaceId === s.id}
              className={`filter ${spaceId === s.id ? 'is-active' : ''}`}
              onClick={() => {
                setSpaceId(s.id)
                setGroupId('all')
              }}
            >
              {s.title} <span className="filter__count">{s.items.length}</span>
            </button>
          ))}
        </div>

        {space.groups && (
          <div className="filters filters--sub" role="tablist" aria-label={`${space.title} types`}>
            {[{ id: 'all', title: 'All' }, ...space.groups].map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={groupId === g.id}
                className={`filter filter--sub ${groupId === g.id ? 'is-active' : ''}`}
                onClick={() => setGroupId(g.id)}
              >
                {g.title}{' '}
                <span className="filter__count">
                  {g.id === 'all' ? space.items.length : space.items.filter((i) => i.group === g.id).length}
                </span>
              </button>
            ))}
          </div>
        )}

        {space.note && <p className="catalogue-space-note">{space.note}</p>}

        <div className="catalogue-grid row-4 page-in" key={`${spaceId}-${groupId}-${paged.page}`}>
          {paged.items.map((item) => (
            <button key={item.src} className="catalogue-card tilt" onClick={() => setLightbox(item)}>
              <img src={item.src} alt={item.title} loading="lazy" />
              <span className="catalogue-card__info">
                <strong>{item.title}</strong>
                {item.price && <span>{item.price}</span>}
                {item.text && <small>{item.text}</small>}
              </span>
            </button>
          ))}
        </div>
        <Pagination {...paged} onChange={paged.setPage} label={space.title} />

        <div className="catalogue-actions">
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
