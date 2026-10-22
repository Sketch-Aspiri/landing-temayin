const RADIUS_BY_SHAPE = { rect: 0, circle: '50%', pill: 999 }

/**
 * Marcador de imagen. Sin `src` muestra el texto "pendiente"; con `src`
 * muestra la imagen (fit: cover | contain).
 */
export default function ImageSlot({
  id,
  shape = 'rounded',
  radius = 12,
  fit = 'cover',
  placeholder,
  src,
  alt = '',
  style,
}) {
  const borderRadius = shape === 'rounded' ? radius : RADIUS_BY_SHAPE[shape]

  return (
    <div
      id={id}
      className={src ? 'image-slot image-slot--filled' : 'image-slot'}
      style={{ borderRadius, ...style }}
      role={src ? undefined : 'img'}
      aria-label={src ? undefined : placeholder}
    >
      {src ? (
        <img src={src} alt={alt} style={{ objectFit: fit }} />
      ) : (
        <span className="image-slot__label">{placeholder}</span>
      )}
    </div>
  )
}
