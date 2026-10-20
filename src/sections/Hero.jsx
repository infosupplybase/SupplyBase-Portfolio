import logo from '../assets/logo/supplybase-logo.jpg'
import { hero, company, contact } from '../data/siteData.js'
import { heroMedia } from '../data/media.js'
import Icon from '../components/Icons.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {heroMedia.video ? (
        <video
          className="hero__bg"
          src={heroMedia.video}
          poster={heroMedia.poster || undefined}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        heroMedia.poster && <img className="hero__bg" src={heroMedia.poster} alt="" />
      )}
      <div className="hero__overlay" />
      <div className="hero__floor" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>
            {hero.titleLines.map((line, i) => (
              <span key={line} className={i === 1 ? 'text-gold' : ''}>
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__text">{hero.text}</p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--gold">
              View Our Work <Icon name="arrow" size={18} />
            </a>
            <a href={contact.whatsapp} className="btn btn--outline" target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} /> WhatsApp Us
            </a>
          </div>
          <p className="hero__area">
            <Icon name="pin" size={16} /> Serving {company.area}
          </p>
        </div>

        <div className="hero__logo tilt tilt--strong">
          <img src={logo} alt={`${company.name} — ${company.tagline}`} />
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  )
}
