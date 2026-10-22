import { asset, PHOTOS } from '../assets.js'
import ImageSlot from './ImageSlot.jsx'
import PhotoCredit from './PhotoCredit.jsx'

export default function Merida() {
  return (
    <section id="merida" aria-labelledby="merida-t" style={{ background: '#10241a', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: 'clamp(28px,5vw,64px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <p className="eyebrow">Parada destacada · Nivel 3-2</p>
          <h2 id="merida-t" className="display" style={{ margin: 0, fontSize: 'clamp(44px,7vw,84px)', lineHeight: 1, color: 'var(--gold)', textShadow: '0 4px 0 var(--brick)' }}>Mérida</h2>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6, textWrap: 'pretty' }}>
            En el tramo 3 el tren llega a la capital de Yucatán. Su ficha comparte vecindario con otros lugares que también tienen ficha propia en el juego: Tixkokob, Teya e Izamal; más adelante, Chichén Itzá y Valladolid.
          </p>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: '#d9d2b5', textWrap: 'pretty' }}>
            Las fichas invitan a visitar los lugares reales. No incluyen horarios ni precios: esos datos cambian y se consultan en fuentes oficiales.
          </p>
          <article className="note" style={{ borderRadius: 18, padding: '22px 24px', display: 'grid', gridTemplateColumns: '88px 1fr', gap: 16, alignItems: 'center', maxWidth: 560 }}>
            <div style={{ height: 88 }}>
              <ImageSlot id="slot-toh-guia" shape="circle" fit="contain" placeholder="cuaderno/toh-guia" src={asset('cuaderno/toh-guia.webp')} alt="Toh, guía del cuaderno" style={{ width: 88, height: 88 }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p className="note-title" style={{ fontSize: 18 }}>Cuaderno de Toh · Mérida</p>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5 }}>Mérida se fundó en 1542 sobre la antigua ciudad maya de T'Hó.</p>
              <p style={{ margin: 0, fontSize: 13 }}>Fuente: INAFED, Enciclopedia de los Municipios y Delegaciones de México, «Mérida, Yucatán».</p>
            </div>
          </article>
        </div>
        <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div className="frame" style={{ aspectRatio: '4/3', borderRadius: '50% 50% 22px 22px / 26% 26% 22px 22px', border: '3px solid var(--gold)' }}>
            <ImageSlot id="slot-merida" shape="rect" placeholder="Recurso pendiente · foto real de Mérida (estación 3-2)" src={PHOTOS['3-2'].src} alt={PHOTOS['3-2'].alt} />
          </div>
          <figcaption style={{ fontSize: 13, color: 'var(--muted)' }}>Mérida, Yucatán · <PhotoCredit photo={PHOTOS['3-2']} /></figcaption>
        </figure>
      </div>
    </section>
  )
}
