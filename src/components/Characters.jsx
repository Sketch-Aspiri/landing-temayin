import { asset } from '../assets.js'
import ImageSlot from './ImageSlot.jsx'

const LEAD = { id: 'temayin', name: 'Temayin', ph: 'personajes/temayin-decidido', src: asset('personajes/temayin-decidido.webp'), text: 'Jaguar guardián. Recorre la ruta del Tren Maya para rescatar a Temayina.' }

const COMPANIONS = [
  { id: 'temayina', name: 'Temayina', ph: 'personajes/temayina', src: asset('personajes/temayina.webp'), text: 'La razón del viaje: Temayin la busca de tramo en tramo hasta el reencuentro.' },
  { id: 'toh', name: 'Toh', ph: 'personajes/toh', src: asset('personajes/toh.webp'), text: 'El pájaro reloj (motmot). Guía a Temayin y lleva el cuaderno de explorador: 100 páginas con fuentes citadas.' },
]

// Protagonista destacado a la izquierda; acompañantes apilados a la derecha.
export default function Characters() {
  return (
    <section aria-labelledby="personajes-t" className="section" style={{ paddingTop: 'clamp(48px,7vw,88px)', paddingBottom: 'clamp(48px,7vw,88px)' }}>
      <h2 id="personajes-t" className="sec-title sec-title--sm" style={{ marginBottom: 28 }}>Quién viaja</h2>
      <div className="cast">
        <article className="cast-lead">
          <div className="cast-lead__art">
            <ImageSlot id={'slot-' + LEAD.id} shape="rounded" radius={16} fit="contain" placeholder={'Recurso pendiente · ' + LEAD.ph} src={LEAD.src} alt={LEAD.name} />
          </div>
          <div className="cast-lead__body">
            <h3 className="display" style={{ margin: 0, fontSize: 'clamp(34px,4vw,44px)', color: 'var(--gold)' }}>{LEAD.name}</h3>
            <p style={{ margin: 0, fontSize: 19, lineHeight: 1.5, maxWidth: '26ch' }}>{LEAD.text}</p>
          </div>
        </article>
        {COMPANIONS.map((c) => (
          <article key={c.id} className="cast-mate">
            <div className="cast-mate__art">
              <ImageSlot id={'slot-' + c.id} shape="rounded" radius={16} fit="contain" placeholder={'Recurso pendiente · ' + c.ph} src={c.src} alt={c.name} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 className="display" style={{ margin: 0, fontSize: 26, color: 'var(--gold)' }}>{c.name}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5 }}>{c.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
