import Icon from './Icons.jsx'

// Text link with an arrow that slides on hover. External links open in a new tab.
export default function ArrowLink({ href, children, className = '', icon = 'arrow' }) {
  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      className={`arrow-link ${className}`}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
    >
      <span>{children}</span>
      <Icon name={external && icon === 'arrow' ? 'external' : icon} size={16} />
    </a>
  )
}
