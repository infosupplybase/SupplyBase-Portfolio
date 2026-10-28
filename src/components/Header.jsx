import { useState } from 'react'
import logo from '../assets/logo/supplybase-logo.jpg'
import { navLinks } from '../data/siteData.js'
import useScrolled from '../hooks/useScrolled.js'
import useActiveSection from '../hooks/useActiveSection.js'
import MobileMenu from './MobileMenu.jsx'
import Icon from './Icons.jsx'

const sectionIds = navLinks.map((l) => l.id)

export default function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-menu-open' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="" width="44" height="44" />
          <span className="brand__name">
            SupplyBase <em>Projects</em>
          </span>
        </a>

        <nav className="header__nav" aria-label="Main">
          <ul>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn--primary btn--sm header__cta">
          Start a Project <Icon name="arrow" size={16} />
        </a>

        <button
          className="header__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} active={active} />
    </header>
  )
}
