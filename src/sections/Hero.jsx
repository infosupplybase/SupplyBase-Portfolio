import { hero, company } from '../data/siteData.js'
import { heroMedia, work } from '../data/media.js'
import Icon from '../components/Icons.jsx'

const featured = work.find((w) => w.cover === heroMedia.image)

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="hero__title">
            {hero.titleLines.map((line, i) => (
              <span className="line" key={line}>
                <span style={{ '--i': i }}>{i === hero.titleLines.length - 1 ? <em>{line}</em> : line}</span>
              </span>
            ))}
          </h1>
          <p className="hero__text">{hero.text}</p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              Explore Our Work <Icon name="arrow" size={18} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Start Your Project
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Serving</dt>
              <dd>{company.area}</dd>
            </div>
            <div>
              <dt>One team for</dt>
              <dd>Labour, material &amp; supervision</dd>
            </div>
          </dl>
        </div>

        <div className="hero__media">
          <figure className="hero__photo">
            <img src={heroMedia.image} alt={featured ? `${featured.title}, a SupplyBase project` : ''} fetchPriority="high" />
            {featured && (
              <figcaption>
                <span>Completed project</span>
                {featured.title}
              </figcaption>
            )}
          </figure>
          <div className="hero__clip" aria-hidden="true">
            <video src={heroMedia.video} poster={heroMedia.poster} autoPlay muted loop playsInline preload="metadata" />
          </div>
          <svg className="hero__seal" viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <path id="seal-path" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
            </defs>
            <text>
              <textPath href="#seal-path" textLength="286" lengthAdjust="spacing">
                One Partner · Complete Project ·
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
