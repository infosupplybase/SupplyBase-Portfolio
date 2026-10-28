import Icon from './Icons.jsx'

// Page numbers to show: all of them when there are few, otherwise the first,
// the last and the ones next to the current page, with gaps as null.
function visiblePages(page, pages) {
  if (pages <= 7) return Array.from({ length: pages }, (_, i) => i)
  const list = []
  for (let i = 0; i < pages; i++) {
    if (i === 0 || i === pages - 1 || Math.abs(i - page) <= 1) list.push(i)
    else if (list[list.length - 1] !== null) list.push(null)
  }
  return list
}

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

      {visiblePages(page, pages).map((i, n) =>
        i === null ? (
          <span key={`gap-${n}`} className="pagination__gap" aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={i}
            className={`pagination__page ${i === page ? 'is-active' : ''}`}
            onClick={() => onChange(i)}
            aria-label={`Page ${i + 1}`}
            aria-current={i === page ? 'page' : undefined}
          >
            {i + 1}
          </button>
        ),
      )}

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
