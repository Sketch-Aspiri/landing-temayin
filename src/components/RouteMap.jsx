import { COAST_PATH, DOTS, ENDS, LABELS, PTS, pct } from '../data/route.js'
import { WORLDS } from '../data/worlds.js'

const ROUTE_POINTS = PTS.map((p) => p.join(',')).join(' ')

/** Mapa esquemático con el tramo iluminado hasta el mundo `active`. */
export default function RouteMap({ active, reduced, onGo }) {
  const trainIdx = reduced ? 0 : ENDS[active + 1]
  const [tx, ty] = PTS[trainIdx]
  const lit = PTS.slice(0, ENDS[active + 1] + 1).map((p) => p.join(',')).join(' ')

  return (
    <div style={{ position: 'relative', aspectRatio: '600/520', borderRadius: 20, overflow: 'hidden', border: '2px solid var(--line)', background: '#103a43' }}>
      <svg viewBox="0 0 600 520" width="600" height="520" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}>
        <path d={COAST_PATH} fill="#183a29" stroke="#2d5a44" strokeWidth="2" />
        <polyline points={ROUTE_POINTS} fill="none" stroke="#4f7a72" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" />
        <polyline points={lit} fill="none" stroke="#f7b94b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 80% at 50% 45%, rgba(8,27,34,.25), rgba(8,27,34,.95))', opacity: (0.75 - active * 0.1).toFixed(2), transition: 'opacity 1s ease', pointerEvents: 'none' }} />
      {DOTS.map((d) => (
        <span key={d.i} aria-hidden="true" className="map-dot" style={{ left: d.left, top: d.top, opacity: d.w <= active ? 1 : 0.18 }} />
      ))}
      {LABELS.map((l) => (
        <span key={l.name} aria-hidden="true" className="map-label" style={{ left: l.left, top: l.top, transform: l.tf }}>{l.name}</span>
      ))}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', transform: `translate(${(tx / 6).toFixed(2)}%, ${(ty / 5.2).toFixed(2)}%)`, transition: 'transform 1s cubic-bezier(.4,.1,.2,1)' }}>
        <span style={{ position: 'absolute', left: 0, top: 0, width: 30, height: 14, margin: '-7px 0 0 -15px', borderRadius: 7, background: 'var(--gold-grad)', boxShadow: '0 3px 0 #854325,0 0 16px rgba(255,216,139,.6)' }} />
      </div>
      {WORLDS.map((w, i) => {
        const [x, y] = PTS[ENDS[i]]
        const { left, top } = pct(x, y)
        return (
          <button key={w.key} type="button" className="map-stop" aria-label={`Mundo ${w.n}: ${w.ruta}. Ir a la parada`} onClick={() => onGo(i)} style={{ left, top }}>
            <span style={{ background: i === active ? '#f7b94b' : '#0b2631' }} />
          </button>
        )
      })}
    </div>
  )
}
