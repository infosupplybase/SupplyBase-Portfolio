import { about, company, whyChoose } from '../data/siteData.js'
import { aboutImage } from '../data/media.js'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'

const stageIcons = { design: 'ruler', repair: 'wrench', finish: 'sparkle' }

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__media">
            <img src={aboutImage} alt="Mural wall and ceiling in a bedroom finished by SupplyBase" loading="lazy" />
            <img className="about__inset" src="/images/bedroom-07.jpg" alt="" loading="lazy" />
          </Reveal>

          <Reveal className="about__content" delay={120}>
            <span className="eyebrow">
              <span className="eyebrow__index">05</span>
              About {company.name}
            </span>
            <h2>
              One Partner. <em>Complete Project.</em>
            </h2>
            <p className="lead">{company.description}</p>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}

            <ul className="stages">
              {about.stages.map((s) => (
                <li key={s.key}>
                  <Icon name={stageIcons[s.key]} size={22} />
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="expect">
          <Reveal as="h3" className="expect__title">
            What you can <em>expect</em>
          </Reveal>
          <ul className="expect__list">
            {whyChoose.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 3) * 80}>
                <span className="expect__num">{String(i + 1).padStart(2, '0')}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
