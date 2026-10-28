import { useEffect, useState } from 'react'
import { contact } from '../data/siteData.js'
import Dialog from './Dialog.jsx'
import Icon from './Icons.jsx'

const askUrl = (title) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello SupplyBase, I saw "${title}" on your portfolio and would like something similar for my home.`,
  )}`

// Pop-up for a work item: a photo gallery for projects, a player for videos.
export default function ProjectDetails({ item, categories, onClose }) {
  const [index, setIndex] = useState(0)
  const images = item?.images || []
  const count = images.length

  // Arrow keys step through a project's photos
  useEffect(() => {
    if (!count) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % count)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count])

  const close = () => {
    setIndex(0)
    onClose()
  }

  return (
    <Dialog open={!!item} onClose={close} label={item?.title} className="details">
      {item && (
        <div className="details__layout">
          <div className="details__media">
            {item.type === 'video' ? (
              <video src={item.src} poster={item.cover} controls autoPlay muted loop playsInline />
            ) : (
              <>
                <figure className="details__stage" key={index}>
                  <img src={images[index].src} alt={images[index].caption} />
                  <figcaption>
                    {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')} · {images[index].caption}
                  </figcaption>
                </figure>
                <div className="details__nav">
                  <button onClick={() => setIndex((index - 1 + count) % count)} aria-label="Previous photo">
                    <Icon name="arrow" size={18} style={{ rotate: '180deg' }} />
                  </button>
                  <button onClick={() => setIndex((index + 1) % count)} aria-label="Next photo">
                    <Icon name="arrow" size={18} />
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="details__body">
            <span className="eyebrow">{item.categories.map((c) => categories[c]).join(' · ')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.location && (
              <p className="details__loc">
                <Icon name="pin" size={16} /> {item.location}
              </p>
            )}
            {count > 1 && (
              <ul className="details__thumbs" aria-label="Photos">
                {images.map((img, i) => (
                  <li key={img.src}>
                    <button
                      className={i === index ? 'is-active' : ''}
                      onClick={() => setIndex(i)}
                      aria-label={`Photo ${i + 1}: ${img.caption}`}
                      aria-current={i === index ? 'true' : undefined}
                    >
                      <img src={img.src} alt="" loading="lazy" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <a className="btn btn--primary" href={askUrl(item.title)} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} /> Ask About a Project Like This
            </a>
          </div>
        </div>
      )}
    </Dialog>
  )
}
