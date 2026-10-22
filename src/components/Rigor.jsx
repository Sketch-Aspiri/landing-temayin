const LIST_STYLE = { margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 16, lineHeight: 1.55 }
const H3_STYLE = { margin: '0 0 16px', fontSize: 26, color: 'var(--gold)' }

// Dos listas editoriales (sin tarjetas) y el siguiente paso como banda propia.
export default function Rigor() {
  return (
    <section id="rigor" aria-labelledby="rigor-t" className="section">
      <h2 id="rigor-t" className="sec-title">Lo que afirmamos y lo que todavía no</h2>
      <p className="lead" style={{ marginBottom: 36 }}>Contenido elaborado a partir de fuentes públicas, citadas página por página.</p>
      <div className="rigor-cols">
        <div className="rigor-col">
          <h3 className="display" style={H3_STYLE}>Qué no afirmamos</h3>
          <ul style={LIST_STYLE}>
            <li>Ningún aval, certificación ni respaldo del INAH, del INALI, de la Sedena ni del Tren Maya.</li>
            <li>Que el juego mejore el aprendizaje: no hay estudios con estudiantes. Nos apoyamos en la investigación sobre aprendizaje basado en juegos (Clark, Tanner-Smith y Killingsworth, 2016, <em>Review of Educational Research</em>: efecto promedio g = 0.33 en juegos digitales en general, no específico de Temayin).</li>
            <li>Revisión por hablantes de maya o por especialistas: aún no existe.</li>
            <li>Postura política sobre el Tren Maya: su recorrido es la inspiración del viaje.</li>
          </ul>
        </div>
        <div className="rigor-col">
          <h3 className="display" style={H3_STYLE}>Qué falta</h3>
          <ul style={LIST_STYLE}>
            <li>El arte se generó con ChatGPT (IA).</li>
            <li>Las verificaciones se hicieron en navegadores emulados, no en teléfonos físicos.</li>
            <li>Solo español: todavía sin audio y sin maya yucateco.</li>
            <li>Medición con turistas y cifras de impacto: por definir con el corporativo.</li>
          </ul>
        </div>
      </div>
      <div className="note rigor-next">
        <h3 className="note-title" style={{ fontSize: 26 }}>Siguiente paso</h3>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55 }}>
          Una revisión del contenido con especialistas y hablantes de maya yucateco, con crédito para quienes participen. La coautoría es una aspiración y una invitación abierta, no algo que ya ocurra.
        </p>
      </div>
    </section>
  )
}
