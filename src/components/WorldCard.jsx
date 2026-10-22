import ImageSlot from './ImageSlot.jsx'
import PhotoCredit from './PhotoCredit.jsx'

export default function WorldCard({ world: w, isActive }) {
  return (
    <article
      aria-labelledby={w.anchor + '-t'}
      className="arch"
      style={{ borderColor: isActive ? '#f7b94b' : '#183a29', borderRadius: 20, padding: 'clamp(22px,3vw,30px) clamp(18px,3vw,30px) 26px', display: 'flex', flexDirection: 'column', gap: 18, transition: 'border-color .5s ease' }}
    >
      <div>
        <p style={{ margin: 0, color: 'var(--amber)', fontWeight: 800, fontSize: 15 }}>Mundo {w.n}</p>
        <h3 id={w.anchor + '-t'} className="display" style={{ margin: '6px 0 0', fontSize: 'clamp(26px,3vw,34px)', color: 'var(--cream)' }}>{w.ruta}</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))', gap: 16 }}>
        <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ height: 180, background: 'var(--bg)', borderRadius: 14 }}>
            <ImageSlot id={'slot-jefe-' + w.key} shape="rounded" radius={14} fit="contain" placeholder={w.bossPh} src={w.bossSrc} alt={w.jefe} />
          </div>
          <figcaption style={{ fontSize: 15, lineHeight: 1.45 }}>
            <strong className="display" style={{ fontSize: 20, color: 'var(--gold)', display: 'block' }}>{w.jefe}</strong>
            {w.jefeNota}
          </figcaption>
        </figure>
        <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ height: 180, background: 'var(--bg)', borderRadius: 14 }}>
            <ImageSlot id={'slot-foto-' + w.key} shape="rounded" radius={14} placeholder={w.fotoPh} src={w.photo?.src} alt={w.photo?.alt} />
          </div>
          <figcaption style={{ fontSize: 13, lineHeight: 1.45, color: 'var(--muted)' }}>
            {w.fotoLugar} · <PhotoCredit photo={w.photo} />
          </figcaption>
        </figure>
      </div>
      <aside aria-label="Dato de Toh" className="note" style={{ borderRadius: 16, padding: '18px 20px', boxShadow: '0 4px 0 #c9b483', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <p className="note-title" style={{ fontSize: 17 }}>Toh anota</p>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, textWrap: 'pretty' }}>{w.dato}</p>
        <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4 }}>Fuente: {w.fuente}</p>
      </aside>
    </article>
  )
}
