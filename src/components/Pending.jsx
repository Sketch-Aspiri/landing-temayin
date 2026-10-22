const ITEMS = [
  'Cifras de impacto (alumnos, visitantes, ventas): por definir con el corporativo.',
  'Licencia y derechos de uso del arte generado con ChatGPT (IA).',
  'Revisión cultural con especialistas y hablantes de maya yucateco.',
  'Cotejar los datos de Toh de esta página con las fichas del juego y su fuente exacta.',
  'Asignación de jefe por mundo (aquí se usa el orden de la lista).',
  'Pruebas en teléfonos físicos.',
  'Correo y nombre de contacto.',
]

export default function Pending() {
  return (
    <section id="pendientes" aria-labelledby="pend-t" className="section" style={{ paddingTop: 'clamp(56px,8vw,96px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
      <h2 id="pend-t" className="sec-title sec-title--sm" style={{ marginBottom: 20 }}>Pendientes por confirmar</h2>
      <ul style={{ margin: 0, paddingLeft: 22, columns: '22rem', columnGap: 40, fontSize: 16, lineHeight: 1.55 }}>
        {ITEMS.map((t) => (
          <li key={t} style={{ marginBottom: 10, breakInside: 'avoid' }}>{t}</li>
        ))}
      </ul>
    </section>
  )
}
