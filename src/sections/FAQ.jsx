import { useState } from 'react'
import { faqs } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icons.jsx'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section">
      <div className="container container--narrow">
        <SectionHeading
          eyebrow="Help Before You Book"
          title="Questions Before You Book?"
          text="A few useful answers to help you plan your next home service."
        />
        <div className="faq">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  <Icon name="plus" size={20} />
                </button>
                <div className="faq__a">
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
