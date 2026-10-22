import { AUTOR, CONTACTO } from '../config.js'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '36px var(--gutter) 48px', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, lineHeight: 1.6, color: '#d9d2b5' }}>
        <p style={{ margin: 0, fontWeight: 800, color: 'var(--cream)', fontSize: 16 }}>Obra independiente; no es un producto oficial del Tren Maya ni del INAH.</p>
        <p style={{ margin: 0 }}>Contenido elaborado a partir de fuentes públicas, citadas página por página. Arte generado con ChatGPT (IA). Fotos reales de Wikimedia Commons con autor, licencia y enlace en cada ficha. Mapa esquemático con referencia de Natural Earth y © colaboradores de OpenStreetMap.</p>
        <p style={{ margin: 0 }}>Creado por {AUTOR} · <a href={'mailto:' + CONTACTO}>{CONTACTO}</a></p>
        <p style={{ margin: 0 }}>Las grecas son ornamento de fantasía y no representan glifos con significado.</p>
      </div>
    </footer>
  )
}
