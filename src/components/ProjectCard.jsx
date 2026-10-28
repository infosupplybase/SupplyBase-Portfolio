import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'

// One tile in the Our Work grid. Title and category are always visible;
// hover only adds a zoom and moves the arrow.
export default function ProjectCard({ item, categoryLabel, onOpen, delay = 0 }) {
  return (
    <Reveal as="article" className={`work-card work-card--${item.type}`} delay={delay}>
      <button className="work-card__button" onClick={() => onOpen(item)} aria-label={`Open ${item.title}`}>
        <span className="work-card__media">
          <img src={item.cover} alt="" loading="lazy" width="720" height="960" />
          {item.type === 'video' && (
            <span className="work-card__badge">
              <Icon name="play" size={12} /> Video
            </span>
          )}
          {item.images && <span className="work-card__badge">{item.images.length} photos</span>}
        </span>
        <span className="work-card__info">
          <span className="work-card__cat">{categoryLabel}</span>
          <span className="work-card__title">{item.title}</span>
          <span className="work-card__arrow" aria-hidden="true">
            <Icon name="external" size={18} />
          </span>
        </span>
      </button>
    </Reveal>
  )
}
