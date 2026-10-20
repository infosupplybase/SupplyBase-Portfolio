import { services, comingSoon } from '../data/siteData.js'
import { serviceImages } from '../data/media.js'
import SectionHeading from '../components/SectionHeading.jsx'
import MediaFrame from '../components/MediaFrame.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'

const serviceIcons = {
  'interior-design': 'sofa',
  'interior-by-choice': 'palette',
  painting: 'roller',
  waterproofing: 'drop',
  'pop-ceiling': 'ceiling',
}

export default function Services() {
  return (
    <section id="services" className="section section--dark">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          text="Design, repairs and finishing are handled by one team, so nothing is lost in handover between trades."
        />

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal as="article" className="service-card" key={s.id} delay={i * 80}>
              <MediaFrame src={serviceImages[s.id]} alt={s.title} label={s.title} ratio="16 / 10" />
              <div className="service-card__body">
                <span className="icon-badge">
                  <Icon name={serviceIcons[s.id]} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="coming-soon">
          <span className="coming-soon__label">Coming Soon</span>
          {comingSoon.map((name) => (
            <span className="chip" key={name}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
