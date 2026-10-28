import logo from '../assets/logo/supplybase-logo.jpg'
import { company, contact, navLinks, services } from '../data/siteData.js'
import Icon from './Icons.jsx'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <p className="footer__tagline">
            One Partner. <em>Complete Project.</em>
          </p>
          <a href="#contact" className="btn btn--primary">
            Start a Project <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <img src={logo} alt="SupplyBase — One Partner. Complete Project." width="96" height="96" loading="lazy" />
            <p>{company.description}</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer__contact">
              {contact.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href}>{p.label}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>{contact.address}</li>
            </ul>
            <div className="footer__social">
              <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="SupplyBase on Instagram">
                <Icon name="instagram" size={18} />
              </a>
              <a href={contact.googleReviews} target="_blank" rel="noreferrer" aria-label="SupplyBase on Google">
                <Icon name="google" size={18} />
              </a>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="SupplyBase on WhatsApp">
                <Icon name="whatsapp" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {YEAR} {company.name} Projects. All rights reserved. GSTIN {company.gstin}
          </span>
          <a href={company.website} target="_blank" rel="noreferrer">
            Visit supplybase.co.in <Icon name="external" size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
