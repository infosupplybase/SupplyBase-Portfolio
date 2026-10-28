import { useState } from 'react'
import Icon from './Icons.jsx'

const LONG = 340

// One Google review card. Long reviews are cut to a few lines with a "Read more" toggle.
export default function Review({ name, review }) {
  const long = review.length > LONG
  const [expanded, setExpanded] = useState(false)
  const lines = review.split('\n')
  const hasTitle = lines.length > 1

  return (
    <li className={`review ${long && !expanded ? 'is-clamped' : ''}`}>
      <span className="review__stars" role="img" aria-label="5 out of 5 stars">
        {[0, 1, 2, 3, 4].map((n) => (
          <Icon key={n} name="star" size={14} />
        ))}
      </span>
      <blockquote>
        {lines.map((line, i) => (i === 0 && hasTitle ? <strong key={i}>{line}</strong> : <p key={i}>{line}</p>))}
      </blockquote>
      {long && (
        <button className="review__more" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded}>
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
      <footer>
        <span className="review__name">{name}</span>
        <span className="review__source">
          <Icon name="google" size={14} /> Google review
        </span>
      </footer>
    </li>
  )
}
