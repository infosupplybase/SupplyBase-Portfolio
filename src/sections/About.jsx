import { about, company } from '../data/siteData.js'
import { aboutImage } from '../data/media.js'
import MediaFrame from '../components/MediaFrame.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'

const stageIcons = { design: 'ruler', repair: 'wrench', finish: 'sparkle' }

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <Reveal className="about__media tilt">
          <MediaFrame src={aboutImage} alt="The Supplybase team at work" label="Team / site photo" ratio="4 / 5" />
          <div className="about__badge">
            <strong>10+</strong>
            <span>Years of experience</span>
          </div>
        </Reveal>

        <Reveal className="about__content" delay={100}>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
          <p className="lead">{company.description}</p>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}

          <div className="stages">
            {about.stages.map((s) => (
              <div className="stage tilt" key={s.key}>
                <span className="icon-badge">
                  <Icon name={stageIcons[s.key]} />
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
