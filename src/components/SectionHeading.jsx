import Reveal from './Reveal.jsx'

// Editorial section header: small numbered label, large title, optional text.
// `aside` sits to the right of the title on wide screens (filters, links…).
export default function SectionHeading({ index, eyebrow, title, text, aside, align = 'split' }) {
  return (
    <Reveal as="header" className={`section-heading section-heading--${align}`}>
      <div className="section-heading__main">
        {eyebrow && (
          <span className="eyebrow">
            {index && <span className="eyebrow__index">{index}</span>}
            {eyebrow}
          </span>
        )}
        <h2>{title}</h2>
      </div>
      {(text || aside) && (
        <div className="section-heading__aside">
          {text && <p>{text}</p>}
          {aside}
        </div>
      )}
    </Reveal>
  )
}
