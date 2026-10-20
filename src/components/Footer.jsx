import logo from '../assets/logo/supplybase-logo.jpg'
import { company, contact, navLinks, services } from '../data/siteData.js'
import Icon from './Icons.jsx'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Supplybase logo" />
          <p>Your trusted partner for home improvement, from start to finish.</p>
          <div className="footer__social">
            <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icon name="instagram" size={20} />
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Icon name="whatsapp" size={20} />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              <Icon name="mail" size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
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
                <a href="#services">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer__contact">
            {contact.phones.map((p) => (
              <li key={p.href}>
                <Icon name="phone" size={16} />
                <a href={p.href}>{p.label}</a>
              </li>
            ))}
            <li>
              <Icon name="mail" size={16} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Icon name="pin" size={16} />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {YEAR} {company.name}. All rights reserved.
        </span>
        <span>GSTIN: {company.gstin}</span>
      </div>
    </footer>
  )
}
