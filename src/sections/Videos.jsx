import { useEffect, useRef, useState } from 'react'
import { videoCategories } from '../data/media.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icons.jsx'
import Pagination from '../components/Pagination.jsx'
import usePaged from '../hooks/usePaged.js'

// Portrait video tile. Videos have no audio track and always play muted.
function VideoCard({ video }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

  // Pause when the card scrolls out of view
  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && !el.paused) el.pause()
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const el = ref.current
    if (el.paused) el.play()
    else el.pause()
  }

  return (
    <figure className={`video-card ${playing ? 'is-playing' : ''}`}>
      <button className="video-card__frame tilt" onClick={toggle} aria-label={`${playing ? 'Pause' : 'Play'} ${video.title}`}>
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <span className="video-card__play">
          <Icon name={playing ? 'pause' : 'play'} size={24} />
        </span>
      </button>
      <figcaption>{video.title}</figcaption>
    </figure>
  )
}

export default function Videos() {
  const [catId, setCatId] = useState(videoCategories[0].id)
  const category = videoCategories.find((c) => c.id === catId)
  const paged = usePaged(category.videos, 4, catId)

  return (
    <section id="videos" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="See Us at Work"
          title="Project Videos"
          text="Walkthroughs and on-site footage from real projects. Tap a video to play."
        />
        <div className="filters" role="tablist">
          {videoCategories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={catId === c.id}
              className={`filter ${catId === c.id ? 'is-active' : ''}`}
              onClick={() => setCatId(c.id)}
            >
              {c.title} <span className="filter__count">{c.videos.length}</span>
            </button>
          ))}
        </div>
        <p className="catalogue-space-note">{category.text}</p>

        <div className="videos-grid row-4 page-in" key={`${catId}-${paged.page}`}>
          {paged.items.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
        <Pagination {...paged} onChange={paged.setPage} label={`${category.title} videos`} />
      </div>
    </section>
  )
}
