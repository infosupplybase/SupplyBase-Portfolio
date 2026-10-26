import { process } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Process() {
  return (
    <section id="process" className="section section--dark">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="From First Call to Final Handover"
          text="Five clear steps, so what you approve on the design board is what you live in."
        />
        <ol className="process">
          {process.map((p, i) => (
            <Reveal as="li" className="process__step tilt" key={p.step} delay={i * 100}>
              <span className="process__num">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
