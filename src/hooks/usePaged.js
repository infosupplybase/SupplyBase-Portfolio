import { useState } from 'react'

// Splits `items` into pages of `size`. Pass a `resetKey` (e.g. the active
// tab id) so switching tabs goes back to page 1 without an effect.
export default function usePaged(items, size = 4, resetKey = '') {
  const [state, setState] = useState({ key: resetKey, page: 0 })
  const pages = Math.max(1, Math.ceil(items.length / size))
  const page = state.key === resetKey ? Math.min(state.page, pages - 1) : 0

  return {
    page,
    pages,
    items: items.slice(page * size, page * size + size),
    setPage: (p) => setState({ key: resetKey, page: Math.max(0, Math.min(p, pages - 1)) }),
  }
}
