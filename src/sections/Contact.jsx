import { contact } from '../data/siteData.js'
import EnquiryForm from '../components/EnquiryForm.jsx'
import Reveal from '../components/Reveal.jsx'
import ArrowLink from '../components/ArrowLink.jsx'
import Icon from '../components/Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section section--dark contact">
      <div className="container contact__grid">
        <Reveal className="contact__intro">
          <span className="eyebrow">
            <span className="eyebrow__index">09</span>
            Start a Project
          </span>
          <h2>
            Let&rsquo;s build something <em>great.</em>
          </h2>
          <p>Tell us what you are planning and we will come back with a clear, itemised quotation.</p>

          <ul className="contact__list">
            <li>
              <Icon name="phone" size={18} />
              <span>
                {contact.phones.map((p, i) => (
                  <span key={p.href}>
                    {i > 0 && ' · '}
                    <a href={p.href}>{p.label}</a>
                  </span>
                ))}
              </span>
            </li>
            <li>
              <Icon name="whatsapp" size={18} />
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <span>{contact.address}</span>
            </li>
            <li>
              <Icon name="clock" size={18} />
              <span>{contact.hours}</span>
            </li>
          </ul>

          <ArrowLink href={contact.quoteUrl}>Open the full quote form</ArrowLink>
        </Reveal>

        <Reveal className="contact__form" delay={120}>
          <h3>Project enquiry</h3>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  )
}
