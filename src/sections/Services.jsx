import { services, comingSoon } from '../data/siteData.js'
import { serviceImages } from '../data/media.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ArrowLink from '../components/ArrowLink.jsx'

export default function Services() {
  return (
    <section id="services" className="section section--dark">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="What We Do"
          title={
            <>
              Services, <em>under one roof</em>
            </>
          }
          text="Design, repairs and finishing are handled by one team, so nothing is lost in the handover between trades."
        />

        <ol className="service-list">
          {services.map((s, i) => (
            <Reveal as="li" className="service" key={s.id} delay={i * 60}>
              <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="service__title">{s.title}</h3>
              <div className="service__body">
                <p>{s.text}</p>
                <ArrowLink href={s.url}>Explore {s.title}</ArrowLink>
              </div>
              <span className="service__media">
                <img src={serviceImages[s.id]} alt="" loading="lazy" />
              </span>
            </Reveal>
          ))}
        </ol>

        <p className="coming-soon">
          <span>Coming soon</span>
          {comingSoon.join(' · ')}
        </p>
      </div>
    </section>
  )
}
