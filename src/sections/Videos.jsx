import { useEffect, useRef, useState } from 'react'
import { videoCategories } from '../data/media.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icons.jsx'

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
      <button className="video-card__frame" onClick={toggle} aria-label={`${playing ? 'Pause' : 'Play'} ${video.title}`}>
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

function VideoSlider({ category }) {
  const track = useRef(null)

  const slide = (dir) => {
    const el = track.current
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="video-slider" id={`videos-${category.id}`}>
      <div className="video-slider__head">
        <div>
          <h3>{category.title}</h3>
          <p>{category.text}</p>
        </div>
        <div className="video-slider__nav">
          <button onClick={() => slide(-1)} aria-label={`Previous ${category.title} videos`}>
            <Icon name="arrow" size={20} style={{ rotate: '180deg' }} />
          </button>
          <button onClick={() => slide(1)} aria-label={`Next ${category.title} videos`}>
            <Icon name="arrow" size={20} />
          </button>
        </div>
      </div>
      <div className="video-slider__track" ref={track}>
        {category.videos.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </div>
  )
}

export default function Videos() {
  return (
    <section id="videos" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="See Us at Work"
          title="Project Videos"
          text="Walkthroughs and on-site footage from real projects. Tap a video to play."
        />
        <nav className="video-jump" aria-label="Video categories">
          {videoCategories.map((c) => (
            <a key={c.id} href={`#videos-${c.id}`} className="filter">
              {c.title} <span>{c.videos.length}</span>
            </a>
          ))}
        </nav>
        {videoCategories.map((c) => (
          <VideoSlider key={c.id} category={c} />
        ))}
      </div>
    </section>
  )
}
