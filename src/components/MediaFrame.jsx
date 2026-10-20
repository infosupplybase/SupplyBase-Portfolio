import Icon from './Icons.jsx'

// Shows an image when `src` is set, otherwise a branded placeholder.
export default function MediaFrame({ src, alt, label, ratio = '4 / 3', className = '' }) {
  return (
    <div className={`media-frame ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="media-placeholder">
          <Icon name="image" size={32} />
          <span>{label || 'Image coming soon'}</span>
        </div>
      )}
    </div>
  )
}
