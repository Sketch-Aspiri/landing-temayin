import { useEffect, useRef, useState } from 'react'
import { asset } from '../assets.js'
import { DEMO_URL } from '../config.js'
import ImageSlot from './ImageSlot.jsx'

const MODES = [['jugar', 'Para jugar'], ['instituciones', 'Para el Tren Maya']]
const FOCUS_DELAY_MS = 100

function initialMode() {
  const m = new URLSearchParams(window.location.search).get('modo')
  return MODES.some(([k]) => k === m) ? m : 'jugar'
}

function Tabs({ mode, onSelect }) {
  const onKeyDown = (e) => {
    const i = MODES.findIndex(([k]) => k === mode)
    const last = MODES.length - 1
    let next = null
    if (e.key === 'ArrowRight') next = (i + 1) % MODES.length
    else if (e.key === 'ArrowLeft') next = (i - 1 + MODES.length) % MODES.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    onSelect(MODES[next][0], true)
  }

  return (
    <div role="tablist" aria-label="Elige un modo" onKeyDown={onKeyDown} style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 6, padding: 6, borderRadius: 999, background: 'var(--bg)', border: '2px solid var(--line)', marginBottom: 32 }}>
      {MODES.map(([k, label]) => {
        const sel = mode === k
        return (
          <button
            key={k}
            type="button"
            role="tab"
            id={'tab-' + k}
            aria-selected={sel ? 'true' : 'false'}
            aria-controls={'panel-' + k}
            tabIndex={sel ? 0 : -1}
            onClick={() => onSelect(k)}
            style={{ minHeight: 48, padding: '0 22px', borderRadius: 999, border: 0, background: sel ? 'var(--gold-grad)' : 'transparent', color: sel ? 'var(--ink)' : 'var(--cream)', fontFamily: 'var(--display)', fontSize: 18, cursor: 'pointer' }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

function DemoPlayer() {
  const [on, setOn] = useState(false)
  const frameRef = useRef(null)
  const releaseRef = useRef(null)
  const running = on && Boolean(DEMO_URL)

  useEffect(() => {
    if (!running) return undefined
    const t = setTimeout(() => frameRef.current?.focus(), FOCUS_DELAY_MS)
    return () => clearTimeout(t)
  }, [running])

  const onKeyDown = (e) => {
    if (e.key === ' ' && e.target === e.currentTarget) e.preventDefault()
    if (e.key === 'Escape') releaseRef.current?.focus()
  }

  return (
    <div style={{ gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div onKeyDown={onKeyDown} style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 24, overflow: 'hidden', border: '3px solid var(--gold)', background: 'var(--bg)', boxShadow: '0 6px 0 var(--brick)' }}>
        {running ? (
          <iframe ref={frameRef} src={DEMO_URL} title="Demo jugable de Temayin" allow="fullscreen; gamepad" allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0 }}>
            <ImageSlot id="slot-demo-portada" shape="rect" placeholder="Recurso pendiente · portada/palenque-hanal-pixan" src={asset('portada/palenque-hanal-pixan.webp')} alt="Portada del juego: Palenque en Hanal Pixán" />
            <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'rgba(8,27,34,.55)', pointerEvents: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, pointerEvents: 'auto', textAlign: 'center', padding: 16 }}>
                {DEMO_URL ? (
                  <button type="button" className="btn btn--lg" onClick={() => setOn(true)}>Jugar aquí</button>
                ) : (
                  <p style={{ margin: 0, padding: '12px 18px', border: '2px dashed var(--gold)', borderRadius: 14, fontWeight: 800, background: 'var(--bg)' }}>Demo pendiente · [URL_VERCEL]</p>
                )}
                <p style={{ margin: 0, fontSize: 14, fontWeight: 700, background: 'var(--bg)', padding: '6px 12px', borderRadius: 8 }}>La demo se carga solo cuando la pides.</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
        {running && (
          <>
            <button type="button" ref={releaseRef} className="btn-outline" onClick={() => setOn(false)}>Cerrar la demo</button>
            <button type="button" className="btn-outline" onClick={() => frameRef.current?.requestFullscreen?.()}>Pantalla completa</button>
          </>
        )}
        {DEMO_URL && (
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" style={{ minHeight: 46, display: 'inline-flex', alignItems: 'center', padding: '0 18px', borderRadius: 999, background: 'var(--line)', color: 'var(--cream)', fontWeight: 800, fontSize: 15, textDecoration: 'none' }}>
            ¿En teléfono? Abrir la demo en pantalla completa
          </a>
        )}
      </div>
    </div>
  )
}

function PlayPanel() {
  return (
    <div role="tabpanel" id="panel-jugar" aria-labelledby="tab-jugar" tabIndex={0} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 32, alignItems: 'start', outline: 'none' }}>
      <DemoPlayer />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h3 className="card-title">Cómo se juega aquí</h3>
        <ul className="bullets" style={{ gap: 8 }}>
          <li>Haz clic dentro del juego para darle el foco. <strong>Espacio</strong> salta y no desplaza la página.</li>
          <li><strong>Esc</strong> libera el foco y vuelves a la página.</li>
          <li>El audio inicia silenciado.</li>
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h3 className="card-title">En cualquier pantalla</h3>
        <ul className="bullets" style={{ gap: 8 }}>
          <li>Escritorio y móvil, sin instalación.</li>
          <li>Controles reasignables; controles táctiles personalizables.</li>
          <li>Vertical y horizontal. Respeta la preferencia de movimiento reducido.</li>
          <li>Solo en español por ahora.</li>
        </ul>
      </div>
    </div>
  )
}

const PLAN = [
  ['Fase 1 · Validación', 'Revisión cultural con especialistas y hablantes de maya yucateco; acuerdo de marca y uso de imagen con el corporativo.'],
  ['Fase 2 · Piloto', 'Demo jugable en una ruta o estación, con código QR en cartelería y en pantallas a bordo, durante un periodo acotado.'],
  ['Fase 3 · Medición', 'Evaluar jugadores, tiempo de juego y satisfacción; ajustar contenido y dificultad con esos datos.'],
  ['Fase 4 · Oficial', 'Si el piloto resulta, versión oficial del Tren Maya, con más idiomas y más mundos a lo largo de la ruta.'],
]

const IMPACT = ['Turistas que juegan', 'Tiempo medio de juego', 'Satisfacción del viajero']

function InstitutionsPanel() {
  const p = { margin: 0, fontSize: 17, lineHeight: 1.55 }
  return (
    <div role="tabpanel" id="panel-instituciones" aria-labelledby="tab-instituciones" tabIndex={0} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 24, alignItems: 'start', outline: 'none' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 className="card-title">Un juego para el viaje</h3>
        <p style={p}>Temayin convierte el recorrido en una aventura: cada mundo del juego corresponde a un tramo de la ruta, con datos de cultura y territorio maya.</p>
        <p style={p}>Se propone como juego oficial para los turistas que viajan en el tren, en el trayecto o en la espera.</p>
      </div>
      <div className="note" style={{ borderRadius: 20, padding: '24px 24px 26px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h3 className="note-title" style={{ fontSize: 26, textAlign: 'center' }}>Por qué encaja en el tren</h3>
        <ul className="bullets" style={{ gap: 8, fontSize: 16, lineHeight: 1.55 }}>
          <li>Se juega en el teléfono del viajero, sin instalar nada: basta un código QR.</li>
          <li>Partidas cortas, pensadas para un trayecto.</li>
          <li>Refuerza la identidad del destino y la cultura maya con fuentes citadas.</li>
          <li>Las leyendas se presentan como relatos tradicionales, no como hecho.</li>
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 className="card-title">Plan por fases</h3>
        <ol style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {PLAN.map(([t, d]) => (
            <li key={t} style={{ display: 'flex', flexDirection: 'column', gap: 2, borderBottom: '1px solid var(--line)', paddingBottom: 8 }}>
              <strong style={{ color: 'var(--gold)' }}>{t}</strong>
              <span style={{ fontSize: 16, lineHeight: 1.5 }}>{d}</span>
            </li>
          ))}
        </ol>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 className="card-title">Indicadores de impacto</h3>
        <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {IMPACT.map((label) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, borderBottom: '1px solid var(--line)', paddingBottom: 8, flexWrap: 'wrap' }}>
              <dt style={{ fontWeight: 800 }}>{label}</dt>
              <dd style={{ margin: 0, color: 'var(--gold)' }}>Por definir con el corporativo</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default function Modes() {
  const [mode, setMode] = useState(initialMode)

  const select = (k, focus = false) => {
    setMode(k)
    const u = new URL(window.location.href)
    u.searchParams.set('modo', k)
    window.history.replaceState(null, '', u.pathname + u.search + '#modos')
    if (focus) setTimeout(() => document.getElementById('tab-' + k)?.focus(), 0)
  }

  return (
    <section id="modos" aria-labelledby="modos-t" className="section--band" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="section">
        <h2 id="modos-t" className="sec-title" style={{ marginBottom: 24 }}>Dos maneras de subir al tren</h2>
        <Tabs mode={mode} onSelect={select} />
        {mode === 'jugar' ? <PlayPanel /> : <InstitutionsPanel />}
      </div>
    </section>
  )
}
