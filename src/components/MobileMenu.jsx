import { useEffect } from 'react'
import { navLinks, contact } from '../data/siteData.js'
import Icon from './Icons.jsx'

// Full-screen menu for phones and tablets. Locks page scroll while open
// and closes on Esc or when a link is chosen.
export default function MobileMenu({ open, onClose, active }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.documentElement.classList.add('is-locked')
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} inert={!open}>
      <nav aria-label="Mobile">
        <ol>
          {navLinks.map(({ id, label }, i) => (
            <li key={id} style={{ '--i': i }}>
              <a href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={onClose}>
                <span className="mobile-menu__num">{String(i + 1).padStart(2, '0')}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mobile-menu__foot">
        <a href="#contact" className="btn btn--primary" onClick={onClose}>
          Start a Project <Icon name="arrow" size={18} />
        </a>
        <a href={contact.whatsapp} className="btn btn--ghost" target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={18} /> WhatsApp Us
        </a>
        <p>
          <a href={contact.phones[0].href}>{contact.phones[0].label}</a> · {contact.hours}
        </p>
      </div>
    </div>
  )
}
