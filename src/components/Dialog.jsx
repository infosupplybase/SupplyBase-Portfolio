import { useEffect, useRef } from 'react'
import Icon from './Icons.jsx'

// Modal built on the native <dialog>: the browser handles focus, Esc and the
// backdrop. Clicking outside the panel closes it too.
export default function Dialog({ open, onClose, label, className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (open && !el.open) el.showModal()
    if (!open && el.open) el.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      className={`dialog ${className}`}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {open && (
        <div className="dialog__panel">
          <button className="dialog__close" onClick={onClose} aria-label="Close">
            <Icon name="close" />
          </button>
          {children}
        </div>
      )}
    </dialog>
  )
}
