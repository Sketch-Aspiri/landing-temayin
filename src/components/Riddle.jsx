import { useState } from 'react'
import { ANSWER, STONES } from '../data/numerals.js'
import Stone from './Stone.jsx'

const DOOR_EASE = 'transform 1.2s cubic-bezier(.6,.05,.2,1) .2s,opacity .2s ease'
const INITIAL = { picked: {}, solved: false, msg: '' }

function DoorPanel({ side, solved }) {
  const left = side === 'left'
  return (
    <div
      style={{
        position: 'absolute', top: 0, bottom: 0, width: '50%',
        [left ? 'left' : 'right']: 0,
        background: `linear-gradient(${left ? 90 : 270}deg,#183a29,#10241a)`,
        [left ? 'borderRight' : 'borderLeft']: '3px solid #ffd88b',
        transform: solved ? `translateX(${left ? '-101%' : '101%'})` : 'translateX(0)',
        opacity: solved ? 1 : 0,
        transition: DOOR_EASE,
      }}
    />
  )
}

function Door({ solved, onReset }) {
  return (
    <div aria-hidden={solved ? 'false' : 'true'} style={{ position: 'absolute', inset: 0, pointerEvents: solved ? 'auto' : 'none', display: 'grid', placeItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--panel)', opacity: solved ? 1 : 0, transition: 'opacity .8s ease .3s' }} />
      <DoorPanel side="left" solved={solved} />
      <DoorPanel side="right" solved={solved} />
      <div style={{ position: 'relative', maxWidth: 560, padding: 24, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center', opacity: solved ? 1 : 0, transition: 'opacity .8s ease .6s' }}>
        <p className="display" style={{ margin: 0, fontSize: 'clamp(40px,6vw,64px)', color: 'var(--gold)', textShadow: '0 4px 0 var(--brick)' }}>13 × 20 = 260</p>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, textWrap: 'pretty' }}>La puerta de jade se abre. En el juego hay 7 niveles secretos con acertijos como este; el Haab se resuelve con 18 × 20 + 5 = 365.</p>
        <button type="button" className="btn-outline" onClick={onReset} tabIndex={solved ? 0 : -1} style={{ minHeight: 48, padding: '0 22px', fontSize: 16 }}>Reiniciar acertijo</button>
      </div>
    </div>
  )
}

export default function Riddle() {
  const [{ picked, solved, msg }, setState] = useState(INITIAL)

  const pick = (v) => {
    if (solved || picked[v]) return
    if (v === ANSWER) {
      setState((s) => ({ ...s, solved: true, msg: '¡Correcto! 13 × 20 = 260 días. La puerta de jade se abre.' }))
      return
    }
    const tens = Math.floor(v / 20)
    const units = v % 20
    setState((s) => ({
      ...s,
      picked: { ...s.picked, [v]: true },
      msg: `Esa piedra vale ${v} (${tens} × 20 + ${units}). Se apaga, sin penalización. Prueba otra.`,
    }))
  }

  const reset = () => setState({ ...INITIAL, msg: 'Acertijo reiniciado.' })

  return (
    <section id="acertijo" aria-labelledby="acertijo-t" className="section">
      <h2 id="acertijo-t" className="sec-title">La puerta del Tzolk'in</h2>
      <p className="lead" style={{ marginBottom: 10 }}>
        El calendario ritual Tzolk'in combina 13 números con 20 nombres de día. ¿Cuántos días dura? Elige la piedra con el numeral correcto. Equivocarse no resta nada.
      </p>
      <p style={{ margin: '0 0 32px', fontSize: 16, lineHeight: 1.55, color: '#d9d2b5', maxWidth: '42em' }}>
        Cómo se lee: punto = 1, raya = 5, concha = 0. El nivel de arriba cuenta veintenas (× 20); el de abajo, unidades.
      </p>
      <div className="arch" style={{ position: 'relative', borderRadius: 20, padding: 'clamp(32px,5vw,48px) clamp(16px,3vw,32px) 32px', overflow: 'hidden' }}>
        <div role="group" aria-label="Tres piedras con numerales mayas" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 22, maxWidth: 820, margin: '0 auto' }}>
          {STONES.map((v, i) => (
            <Stone key={v} value={v} index={i} off={Boolean(picked[v])} correct={solved && v === ANSWER} locked={solved} onPick={() => pick(v)} />
          ))}
        </div>
        <p aria-live="polite" role="status" style={{ margin: '24px auto 0', maxWidth: 820, minHeight: '1.6em', textAlign: 'center', fontSize: 18, fontWeight: 700, color: 'var(--cream)' }}>{msg}</p>
        <Door solved={solved} onReset={reset} />
      </div>
    </section>
  )
}
