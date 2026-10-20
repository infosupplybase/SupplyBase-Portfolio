import { contact } from '../data/siteData.js'
import Icon from '../components/Icons.jsx'

export default function Contact() {
  const cards = [
    { icon: 'phone', title: 'Call Us', lines: contact.phones },
    { icon: 'whatsapp', title: 'WhatsApp', lines: [{ label: 'Chat with our team', href: contact.whatsapp, external: true }] },
    { icon: 'mail', title: 'Email', lines: [{ label: contact.email, href: `mailto:${contact.email}` }] },
    { icon: 'pin', title: 'Visit', lines: [{ label: contact.address }] },
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="cta tilt">
          <span className="eyebrow">Let's Get Started</span>
          <h2>Ready to Start Your Project?</h2>
          <p>Tell us what you are planning and we will come back with a clear, itemised quotation.</p>
          <div className="cta__actions">
            <a href={contact.quoteUrl} className="btn btn--dark" target="_blank" rel="noreferrer">
              Get a Quote <Icon name="arrow" size={18} />
            </a>
            <a href={contact.whatsapp} className="btn btn--outline-dark" target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} /> WhatsApp Us
            </a>
          </div>
        </div>

        <div className="contact-grid">
          {cards.map((c) => (
            <div className="contact-card tilt" key={c.title}>
              <span className="icon-badge">
                <Icon name={c.icon} />
              </span>
              <h3>{c.title}</h3>
              {c.lines.map((l) =>
                l.href ? (
                  <a key={l.label} href={l.href} {...(l.external && { target: '_blank', rel: 'noreferrer' })}>
                    {l.label}
                  </a>
                ) : (
                  <span key={l.label}>{l.label}</span>
                ),
              )}
            </div>
          ))}
        </div>
        <p className="contact__hours">
          <Icon name="clock" size={16} /> Talk to a real person — {contact.hours}
        </p>
      </div>
    </section>
  )
}
