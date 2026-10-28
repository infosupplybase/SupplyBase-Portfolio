import { useState } from 'react'
import { work, workCategories } from '../data/media.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectDetails from '../components/ProjectDetails.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'

const STEP = 9
const labels = Object.fromEntries(workCategories.map((c) => [c.id, c.label]))
// Only offer tabs that have at least one item
const tabs = workCategories.filter((c) => c.id === 'all' || work.some((w) => w.categories.includes(c.id)))

export default function Work() {
  const [filter, setFilter] = useState('all')
  const [shown, setShown] = useState({ filter: 'all', count: STEP })
  const [open, setOpen] = useState(null)

  const matches = filter === 'all' ? work : work.filter((w) => w.categories.includes(filter))
  const features = matches.filter((w) => w.type === 'project')
  const tiles = matches.filter((w) => w.type !== 'project')
  const count = shown.filter === filter ? shown.count : STEP
  const visible = tiles.slice(0, count)

  return (
    <section id="work" className="section work">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="Our Work"
          title={
            <>
              Selected <em>work</em>
            </>
          }
          text="Homes our own team has designed, built and finished, in photos and on-site videos. Open any project for the full set."
        />

        <div className="tabs" role="group" aria-label="Filter work by category">
          {tabs.map((c) => (
            <button
              key={c.id}
              className={`tab ${filter === c.id ? 'is-active' : ''}`}
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
              <span className="tab__count">
                {c.id === 'all' ? work.length : work.filter((w) => w.categories.includes(c.id)).length}
              </span>
            </button>
          ))}
        </div>

        <div key={filter} className="work__results">
          {features.map((p) => (
            <Reveal as="article" className="feature" key={p.id}>
              <button className="feature__gallery" onClick={() => setOpen(p)} aria-label={`Open ${p.title} gallery`}>
                {p.images.slice(0, 3).map((img, i) => (
                  <span className={`feature__img feature__img--${i}`} key={img.src}>
                    <img src={img.src} alt={img.caption} loading="lazy" />
                  </span>
                ))}
              </button>
              <div className="feature__body">
                <span className="eyebrow">{p.categories.map((c) => labels[c]).join(' · ')}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <button className="arrow-link" onClick={() => setOpen(p)}>
                  <span>View all {p.images.length} photos</span>
                  <Icon name="arrow" size={16} />
                </button>
              </div>
            </Reveal>
          ))}

          <div className="work-grid">
            {visible.map((item, i) => (
              <ProjectCard
                key={item.id}
                item={item}
                categoryLabel={labels[item.categories[0]]}
                onOpen={setOpen}
                delay={(i % 3) * 90}
              />
            ))}
          </div>
        </div>

        {tiles.length > count && (
          <div className="work__more">
            <button className="btn btn--ghost" onClick={() => setShown({ filter, count: count + STEP })}>
              Show more work <span className="tab__count">{tiles.length - count}</span>
            </button>
          </div>
        )}
      </div>

      <ProjectDetails item={open} categories={labels} onClose={() => setOpen(null)} />
    </section>
  )
}
