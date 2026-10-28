import { useState } from 'react'
import { faqs, contact } from '../data/siteData.js'
import Reveal from '../components/Reveal.jsx'
import ArrowLink from '../components/ArrowLink.jsx'
import Icon from '../components/Icons.jsx'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section">
      <div className="container faq-layout">
        <Reveal className="faq-layout__intro">
          <span className="eyebrow">
            <span className="eyebrow__index">08</span>
            Before You Book
          </span>
          <h2>
            Questions, <em>answered</em>
          </h2>
          <p>A few useful answers to help you plan your next home project.</p>
          <ArrowLink href={contact.whatsapp}>Ask us anything on WhatsApp</ArrowLink>
        </Reveal>

        <div className="faq">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                <h3>
                  <button
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {f.q}
                    <Icon name="plus" size={20} />
                  </button>
                </h3>
                <div className="faq__a" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
