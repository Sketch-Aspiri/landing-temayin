import { asset } from '../assets.js'
import { CONTACTO } from '../config.js'
import { useInViewOnce } from '../hooks/useInViewOnce.js'
import { useReducedMotion } from '../hooks/useReducedMotion.js'
import { COAST_PATH, DESTINATION_COUNT, DOTS, PTS } from '../data/route.js'
import Fireflies from './Fireflies.jsx'
import ImageSlot from './ImageSlot.jsx'

const LOOP_END = 13 // último punto del recorrido de ida (Chetumal)
const OUTBOUND = PTS.slice(0, LOOP_END + 1).map((p) => p.join(',')).join(' ')
const CLOSING = PTS.slice(LOOP_END).map((p) => p.join(',')).join(' ')
const DOT_STAGGER_MS = 70
const DAWN_BASE_MS = 600

function DawnMap({ dawn, reduced }) {
  const closeDelay = (reduced ? 0 : DAWN_BASE_MS + DESTINATION_COUNT * DOT_STAGGER_MS + 200) + 'ms'
  return (
    <div style={{ position: 'relative', aspectRatio: '600/520', borderRadius: 20, overflow: 'hidden', border: '2px solid var(--line-soft)', background: '#103a43' }}>
      <svg viewBox="0 0 600 520" width="600" height="520" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}>
        <path d={COAST_PATH} fill="#183a29" stroke="#2d5a44" strokeWidth="2" />
        <polyline points={OUTBOUND} fill="none" stroke="#f7b94b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={CLOSING} fill="none" stroke="#ffe09b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: dawn ? 1 : 0, transition: `opacity 1.2s ease ${closeDelay}` }} />
      </svg>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(8,27,34,.85)', opacity: dawn ? 0 : 1, transition: 'opacity 2s ease', pointerEvents: 'none' }} />
      {DOTS.map((d) => {
        const delay = (reduced ? 0 : DAWN_BASE_MS + d.i * DOT_STAGGER_MS) + 'ms'
        return (
          <span key={d.i} aria-hidden="true" style={{ position: 'absolute', left: d.left, top: d.top, width: 9, height: 9, margin: '-4.5px 0 0 -4.5px', borderRadius: '50%', background: '#ffdf8c', boxShadow: '0 0 10px #ffdf8c', opacity: dawn ? 1 : 0.08, transform: dawn ? 'scale(1)' : 'scale(.4)', transition: `opacity .5s ease ${delay},transform .5s ease ${delay}` }} />
        )
      })}
      <span aria-hidden="true" style={{ position: 'absolute', left: '38%', top: '76.5%', transform: 'translate(-50%,-160%)', fontSize: 'clamp(11px,1.8vw,14px)', fontWeight: 800, color: 'var(--gold)', whiteSpace: 'nowrap', textShadow: '0 1px 2px var(--bg)', opacity: dawn ? 1 : 0, transition: `opacity 1s ease ${closeDelay}` }}>Escárcega · circuito cerrado</span>
    </div>
  )
}

function Collaboration() {
  return (
    <>
      <div className="note" style={{ borderRadius: 18, padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h3 className="note-title" style={{ fontSize: 24 }}>Propuesta de colaboración</h3>
        <ol style={{ margin: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 16, lineHeight: 1.5 }}>
          <li>Revisar el contenido con especialistas y hablantes de maya yucateco.</li>
          <li>Definir juntos los indicadores de impacto.</li>
          <li>Llevar el juego a escuelas y espacios culturales de la región.</li>
        </ol>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
        {CONTACTO ? (
          <>
            <a href={'mailto:' + CONTACTO} className="btn">Escribir para colaborar</a>
            <span style={{ fontWeight: 700 }}>{CONTACTO}</span>
          </>
        ) : (
          <p style={{ margin: 0, padding: '12px 18px', border: '2px dashed var(--gold)', borderRadius: 14, fontWeight: 800 }}>Contacto pendiente · [correo y nombre]</p>
        )}
      </div>
    </>
  )
}

export default function Arrival() {
  const [ref, dawn] = useInViewOnce(0.3)
  const reduced = useReducedMotion()

  return (
    <section ref={ref} id="llegada" aria-labelledby="llegada-t" style={{ position: 'relative', overflow: 'hidden', background: 'radial-gradient(120% 90% at 50% 0%, #183a29 0%, #0b2631 45%, #081b22 100%)' }}>
      <Fireflies count={26} seed={31} />
      <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: -260, width: 620, height: 620, marginLeft: -310, borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(255,224,155,.55), rgba(247,185,75,.18) 55%, transparent)', opacity: dawn ? 1 : 0, transform: dawn ? 'translateY(0) scale(1)' : 'translateY(120px) scale(.7)', transition: 'opacity 2s ease, transform 2.4s cubic-bezier(.2,.7,.2,1)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: 'clamp(72px,10vw,128px) var(--gutter)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <p className="eyebrow">Llegada · Escárcega</p>
          <h2 id="llegada-t" className="display" style={{ margin: 0, fontSize: 'clamp(40px,6vw,72px)', lineHeight: 1, color: 'var(--gold)', textShadow: '0 4px 0 var(--brick)' }}>Amanece el Sol de Jade</h2>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6, textWrap: 'pretty' }}>
            El circuito se cierra en Escárcega y las {DESTINATION_COUNT} estaciones se encienden. El viaje queda listo para crecer con quienes conocen la península.
          </p>
          <Collaboration />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <DawnMap dawn={dawn} reduced={reduced} />
          <p className="caption">Mapa esquemático. Referencia: Natural Earth y © colaboradores de OpenStreetMap (ODbL).</p>
          <div style={{ height: 220, borderRadius: 18, overflow: 'hidden', background: 'var(--panel)' }}>
            <ImageSlot id="slot-reencuentro" shape="rect" placeholder="Recurso pendiente · mundo7/reencuentro" src={asset('mundo7/reencuentro.webp')} alt="Temayin y Temayina se reencuentran" />
          </div>
        </div>
      </div>
    </section>
  )
}
