import { useEffect, useRef } from 'react'
import { useActiveWorld } from '../hooks/useActiveWorld.js'
import { useReducedMotion } from '../hooks/useReducedMotion.js'
import { DESTINATION_COUNT } from '../data/route.js'
import { WORLDS } from '../data/worlds.js'
import RouteMap from './RouteMap.jsx'
import WorldCard from './WorldCard.jsx'

const STICKY_OFFSET = 110
const FOCUS_DELAY_MS = 700

export default function RouteSection() {
  const [active, setActive] = useActiveWorld()
  const reduced = useReducedMotion()
  const focusTimer = useRef(null)

  useEffect(() => () => clearTimeout(focusTimer.current), [])

  const goWorld = (i) => {
    const el = document.getElementById('mundo-' + (i + 1))
    setActive(i)
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET, behavior: reduced ? 'auto' : 'smooth' })
    }
    clearTimeout(focusTimer.current)
    focusTimer.current = setTimeout(() => {
      const h = el && el.querySelector('h3')
      if (h) {
        h.setAttribute('tabindex', '-1')
        h.focus({ preventScroll: true })
      }
    }, reduced ? 0 : FOCUS_DELAY_MS)
  }

  return (
    <section id="ruta" aria-labelledby="ruta-t" className="section" style={{ paddingTop: 'clamp(48px,7vw,88px)', paddingBottom: 'clamp(48px,7vw,88px)' }}>
      <h2 id="ruta-t" className="sec-title">El tren sale de Palenque</h2>
      <p className="lead" style={{ marginBottom: 40 }}>
        Cada parada presenta a su jefe, una foto real con crédito y un dato de Toh con su fuente. La península empieza en penumbra y se ilumina conforme avanza el tren.
      </p>
      <div className="route-grid">
        <div className="route-aside" style={{ '--sticky-top': STICKY_OFFSET + 'px' }}>
          <RouteMap active={active} reduced={reduced} onGo={goWorld} />
          <p aria-live="polite" className="display" style={{ margin: 0, fontSize: 22, color: 'var(--gold)' }}>
            Mundo {active + 1} · {WORLDS[active].ruta}
          </p>
          <p className="caption">
            Mapa esquemático, no a escala. Silueta trazada a mano con referencia de Natural Earth y © colaboradores de OpenStreetMap (ODbL). Ruta aproximada a partir de información pública del Tren Maya (2023). Las posiciones de los {DESTINATION_COUNT} destinos son ilustrativas.
          </p>
          <details style={{ background: 'var(--panel)', borderRadius: 14, padding: '4px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 800, padding: '12px 0', minHeight: 44 }}>Lista de paradas en texto</summary>
            <ol style={{ margin: '0 0 14px', paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8, lineHeight: 1.4 }}>
              {WORLDS.map((w) => (
                <li key={w.key}><a href={'#' + w.anchor}>Mundo {w.n}: {w.ruta}. Jefe: {w.jefe}</a></li>
              ))}
            </ol>
          </details>
        </div>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(48px,10vh,120px)' }}>
          {WORLDS.map((w, i) => (
            <li key={w.key} id={w.anchor} data-world={i} style={{ scrollMarginTop: STICKY_OFFSET }}>
              <WorldCard world={w} isActive={i === active} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
