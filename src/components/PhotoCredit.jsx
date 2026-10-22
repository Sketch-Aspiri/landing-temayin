/** Crédito de una foto de Wikimedia Commons; si no hay foto, deja el aviso de pendiente. */
export default function PhotoCredit({ photo }) {
  if (!photo) return <>Autor, licencia y enlace de Wikimedia Commons: por completar.</>
  return (
    <>
      Foto: {photo.author} ·{' '}
      <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">{photo.license}</a> ·{' '}
      <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>
    </>
  )
}
