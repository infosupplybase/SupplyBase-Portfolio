import Icon from './Icons.jsx'

// ‹ 1 2 3 › control. Hidden when everything fits on one page.
export default function Pagination({ page, pages, onChange, label = 'items' }) {
  if (pages <= 1) return null

  return (
    <nav className="pagination" aria-label={`${label} pages`}>
      <button
        className="pagination__arrow"
        onClick={() => onChange(page - 1)}
        disabled={page === 0}
        aria-label={`Previous ${label}`}
      >
        <Icon name="arrow" size={18} style={{ rotate: '180deg' }} />
      </button>

      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          className={`pagination__page ${i === page ? 'is-active' : ''}`}
          onClick={() => onChange(i)}
          aria-label={`Page ${i + 1}`}
          aria-current={i === page ? 'page' : undefined}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="pagination__arrow"
        onClick={() => onChange(page + 1)}
        disabled={page === pages - 1}
        aria-label={`Next ${label}`}
      >
        <Icon name="arrow" size={18} />
      </button>
    </nav>
  )
}
