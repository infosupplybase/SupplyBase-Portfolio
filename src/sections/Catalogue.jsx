import { useState } from 'react'
import { catalogue } from '../data/catalogue.js'
import { contact } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Dialog from '../components/Dialog.jsx'
import Icon from '../components/Icons.jsx'
import Pagination from '../components/Pagination.jsx'
import usePaged from '../hooks/usePaged.js'

const askUrl = (item) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello SupplyBase, I like "${item.title}" from your design gallery. Please share details.`,
  )}`

export default function Catalogue() {
  const [spaceId, setSpaceId] = useState(catalogue[0].id)
  const [groupId, setGroupId] = useState('all')
  const [open, setOpen] = useState(null)

  const space = catalogue.find((s) => s.id === spaceId)
  const items = groupId === 'all' ? space.items : space.items.filter((i) => i.group === groupId)
  const paged = usePaged(items, 8, `${spaceId}-${groupId}`)

  return (
    <section id="designs" className="section">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Design Gallery"
          title={
            <>
              Interiors, <em>your way</em>
            </>
          }
          text="Choose a ready-made design, furniture piece, ceiling style or waterproofing solution. We customise it to your space and install it with our own team."
        />

        <div className="tabs" role="group" aria-label="Choose a category">
          {catalogue.map((s) => (
            <button
              key={s.id}
              className={`tab ${spaceId === s.id ? 'is-active' : ''}`}
              aria-pressed={spaceId === s.id}
              onClick={() => {
                setSpaceId(s.id)
                setGroupId('all')
              }}
            >
              {s.title} <span className="tab__count">{s.items.length}</span>
            </button>
          ))}
        </div>

        {space.groups && (
          <div className="tabs tabs--sub" role="group" aria-label={`${space.title} types`}>
            {[{ id: 'all', title: 'All' }, ...space.groups].map((g) => (
              <button
                key={g.id}
                className={`tab tab--sub ${groupId === g.id ? 'is-active' : ''}`}
                aria-pressed={groupId === g.id}
                onClick={() => setGroupId(g.id)}
              >
                {g.title}{' '}
                <span className="tab__count">
                  {g.id === 'all' ? space.items.length : space.items.filter((i) => i.group === g.id).length}
                </span>
              </button>
            ))}
          </div>
        )}

        {space.note && <p className="space-note">{space.note}</p>}

        <div className="design-grid page-in" key={`${spaceId}-${groupId}-${paged.page}`}>
          {paged.items.map((item) => (
            <button key={item.src} className="design-card" onClick={() => setOpen(item)}>
              <span className="design-card__media">
                <img src={item.src} alt="" loading="lazy" />
              </span>
              <span className="design-card__info">
                <strong>{item.title}</strong>
                {item.price && <small>{item.price}</small>}
                {item.text && <small className="clamp-2">{item.text}</small>}
              </span>
            </button>
          ))}
        </div>
        <Pagination {...paged} onChange={paged.setPage} label={space.title} />

        <div className="section-actions">
          <a
            className="btn btn--primary"
            href={space.bookUrl || `https://www.supplybase.co.in/interior-by-choice/${space.id}`}
            target="_blank"
            rel="noreferrer"
          >
            Book a Home Visit <Icon name="external" size={16} />
          </a>
          <p className="section-note">
            {space.bookUrl
              ? 'Our team inspects the site and confirms the scope and final price before any work starts.'
              : 'Home visit at just ₹99: expert advice, measurement and a custom design as per your choice.'}
          </p>
        </div>
      </div>

      <Dialog open={!!open} onClose={() => setOpen(null)} label={open?.title} className="details">
        {open && (
          <div className="details__layout">
            <div className="details__media details__media--stack">
              <img src={open.src} alt={open.title} />
            </div>
            <div className="details__body">
              <span className="eyebrow">{space.title}</span>
              <h3>{open.title}</h3>
              {open.price && <p className="details__price">{open.price}</p>}
              {open.text && <p>{open.text}</p>}
              <p className="details__note">
                We make it to your size and finish. Final scope and price are confirmed after a site visit.
              </p>
              <a className="btn btn--primary" href={askUrl(open)} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={18} /> Ask About This Design
              </a>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  )
}
