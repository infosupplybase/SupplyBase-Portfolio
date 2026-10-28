import { process } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Process() {
  return (
    <section id="process" className="section section--paper">
      <div className="container">
        <SectionHeading
          index="06"
          eyebrow="How It Works"
          title={
            <>
              From first call to <em>final handover</em>
            </>
          }
          text="Five clear steps, so what you approve on the design board is what you live in."
        />
        <Reveal as="ol" className="process">
          {process.map((p, i) => (
            <li className="process__step" key={p.step} style={{ '--i': i }}>
              <span className="process__num">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
