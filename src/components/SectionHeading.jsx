export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  )
}
