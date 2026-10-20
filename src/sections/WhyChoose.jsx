import { whyChoose } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import Pagination from '../components/Pagination.jsx'
import usePaged from '../hooks/usePaged.js'

export default function WhyChoose() {
  const paged = usePaged(whyChoose)

  return (
    <section id="why" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Why Supplybase"
          title="What You Can Expect"
          text="The things our clients tell us matter most when they hand over a project."
        />
        <div className="why-grid row-4" key={paged.page}>
          {paged.items.map((item, i) => (
            <Reveal className="why-card tilt" key={item.title} delay={i * 60}>
              <span className="why-card__check">
                <Icon name="check" size={18} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
        <Pagination {...paged} onChange={paged.setPage} label="reasons" />
      </div>
    </section>
  )
}
