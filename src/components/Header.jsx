const LINKS = [
  ['#ruta', 'Ruta'],
  ['#merida', 'Mérida'],
  ['#acertijo', 'Acertijo'],
  ['#ejes', 'Ejes'],
  ['#rigor', 'Rigor'],
  ['#modos', 'Jugar'],
  ['#resenas', 'Reseñas'],
  ['#llegada', 'Llegada'],
]

export default function Header() {
  return (
    <header className="site-header">
      <p className="legal-bar">Obra independiente; no es un producto oficial del Tren Maya ni del INAH.</p>
      <nav aria-label="Secciones" className="site-nav">
        <a href="#inicio" className="nav-brand">Temayin</a>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} className="nav-link">{label}</a>
        ))}
      </nav>
    </header>
  )
}
