import { whyChoose } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'

export default function WhyChoose() {
  return (
    <section id="why" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Why Supplybase"
          title="What You Can Expect"
          text="The things our clients tell us matter most when they hand over a project."
        />
        <div className="why-grid">
          {whyChoose.map((item, i) => (
            <Reveal className="why-card" key={item.title} delay={i * 60}>
              <span className="why-card__check">
                <Icon name="check" size={18} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
