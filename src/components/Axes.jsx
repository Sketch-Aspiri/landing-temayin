import { useEffect, useRef, useState } from 'react'
import HoverRevealCards from '@/components/ui/cards'
import { asset } from '../assets.js'
import { AXES, FICHAS } from '../data/fichas.js'

const ALL = 'todos'

// Una imagen del juego (o foto real) por eje.
const AXIS_IMAGES = {
  edu: asset('ejes/educativo.webp'),
  cul: asset('capturas/hanal-pixan.webp'),
  tur: asset('estaciones/4-1.webp'),
  eco: asset('ejes/ecologico.webp'),
  tec: asset('ejes/tecnologico.webp'),
  acc: asset('ejes/accesibilidad.webp'),
}

const AXIS_CARDS = AXES.map(([k, label]) => {
  const count = FICHAS.filter((f) => f.eje === k).length
  return { id: k, title: label, subtitle: count + (count === 1 ? ' ficha' : ' fichas'), imageUrl: AXIS_IMAGES[k] }
})

function pickRandom(previous) {
  let f
  do {
    f = FICHAS[Math.floor(Math.random() * FICHAS.length)]
  } while (previous && f.id === previous.id)
  return f
}

function Surprise({ ficha, innerRef }) {
  return (
    <article ref={innerRef} tabIndex={-1} aria-labelledby="sorpresa-t" className="note" style={{ borderRadius: 20, padding: '26px clamp(20px,4vw,40px) 26px', boxShadow: '0 6px 0 #c9b483', marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 760, outline: 'none' }}>
      <p style={{ margin: 0, fontWeight: 800, fontSize: 15, color: 'var(--brick)' }}>Ficha al azar: {ficha.ejeLabel}</p>
      <h3 id="sorpresa-t" className="display" style={{ margin: 0, fontSize: 30 }}>{ficha.t}</h3>
      <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, textWrap: 'pretty' }}>{ficha.d}</p>
      <p style={{ margin: 0, fontSize: 14 }}>{ficha.ev}</p>
    </article>
  )
}

export default function Axes() {
  const [filter, setFilter] = useState(AXES[0][0])
  const [surprise, setSurprise] = useState(null)
  const surpriseRef = useRef(null)

  useEffect(() => {
    if (surprise && surpriseRef.current) surpriseRef.current.focus()
  }, [surprise])

  // Un bloque por eje: el nombre del eje se dice una vez y las fichas van como texto, sin cajas.
  const groups = AXES
    .filter(([k]) => filter === ALL || k === filter)
    .map(([k, label]) => ({ k, label, items: FICHAS.filter((f) => f.eje === k) }))

  return (
    <section id="ejes" aria-labelledby="ejes-t" className="section--band">
      <div className="section">
        <h2 id="ejes-t" className="sec-title">Cada eje, con evidencia del proyecto</h2>
        <p className="lead" style={{ marginBottom: 24 }}>Elige un eje para ver sus fichas, o abre una al azar.</p>
        <HoverRevealCards
          items={AXIS_CARDS}
          selectedId={filter}
          onSelect={(item) => setFilter(item.id)}
          className="max-w-none gap-5 p-0 md:grid-cols-3"
          cardClassName="eje-card h-36 sm:h-60"
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', margin: '28px 0' }}>
          <button type="button" className="btn-outline" aria-pressed={filter === ALL} onClick={() => setFilter(ALL)}>Ver los {AXES.length} ejes</button>
          <button type="button" className="btn btn--sm" onClick={() => setSurprise((prev) => pickRandom(prev))}>Sorpréndeme</button>
        </div>
        {surprise && <Surprise ficha={surprise} innerRef={surpriseRef} />}
        <div aria-live="polite">
          {groups.map((g) => (
            <section key={g.k} aria-labelledby={'eje-' + g.k} className="axis-group">
              <h3 id={'eje-' + g.k} className="display axis-group__title">{g.label}</h3>
              <ul className="axis-group__items">
                {g.items.map((c) => (
                  <li key={c.id}>
                    <h4 className="display" style={{ margin: 0, fontSize: 21, color: 'var(--cream)' }}>{c.t}</h4>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, textWrap: 'pretty' }}>{c.d}</p>
                    <p className="caption" style={{ lineHeight: 1.45 }}>{c.ev}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
