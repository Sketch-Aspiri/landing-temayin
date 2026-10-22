import ShutterBlindsCarousel from '@/components/ui/shutter-blinds-carousel'
import { asset } from '../assets.js'

const STATS = [
  ['7', 'mundos · tramos'],
  ['39', 'niveles de campaña'],
  ['7', 'niveles secretos con acertijos'],
  ['1', 'especial de temporada: Hanal Pixán'],
]

// Capturas reales del juego (temayin_juego/imagenes), recortadas sin HUD.
const SLIDES = [
  {
    image: asset('capturas/palenque.webp'),
    title: 'Mundo 1 · Palenque',
    caption: 'Toh espera en cada punto de control, entre templos y selva.',
    alt: 'Captura del juego: Temayin corre hacia Toh, posado en un punto de control frente a las ruinas de Palenque.',
  },
  {
    image: asset('capturas/toh-prologo.webp'),
    title: 'La historia',
    caption: '«¡Temayin! Soy Toh, el pájaro reloj. Sube al Tren Maya: te guiaré estación por estación».',
    alt: 'Escena del prólogo: Temayin y Toh, el pájaro reloj, frente a la selva y un templo maya.',
  },
  {
    image: asset('capturas/cancun.webp'),
    title: 'Mundo 5 · Cancún',
    caption: 'El Tren Maya corre junto al mar Caribe.',
    alt: 'Captura del juego: Temayin salta desde el Tren Maya sobre el mar turquesa, con Toh en un punto de control.',
  },
  {
    image: asset('capturas/acertijo-hacienda.webp'),
    title: 'Niveles secretos',
    caption: 'Acertijos con numeración maya: punto, raya y concha.',
    alt: 'Captura del juego: acertijo de numeración maya frente a una hacienda al atardecer.',
  },
  {
    image: asset('capturas/cenote.webp'),
    title: 'El cero maya',
    caption: 'Un acertijo bajo las estalactitas de un cenote.',
    alt: 'Captura del juego: acertijo numérico maya en un cenote con agua turquesa y una pirámide.',
  },
  {
    image: asset('capturas/hanal-pixan.webp'),
    title: 'Especial · Hanal Pixán',
    caption: 'Altares, velas y cempasúchil en la temporada de muertos.',
    alt: 'Captura del juego: altar de Hanal Pixán con velas y flores de cempasúchil junto a una pirámide.',
  },
]

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo" className="hero">
      <div className="hero-stage">
        <ShutterBlindsCarousel
          className="hero-carousel"
          slides={SLIDES}
          height="max(600px, calc(100svh - 96px))"
          slats={9}
          autoplay={6500}
          ink="#f4e1b5"
          ariaLabel="Capturas del juego"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Presentación institucional · Mérida, Yucatán</p>
          <h1 id="titulo" className="display hero-title">
            Temayin
            <span>La Aventura del Jaguar</span>
          </h1>
          <p className="hero-lead">
            Un jaguar guardián recorre la ruta del Tren Maya para rescatar a Temayina. Plataformas 2D en navegador y móvil.
          </p>
          <div className="hero-ctas">
            <a href="#modos" className="btn">Jugar la demo</a>
            <a href="#ruta" className="btn-outline btn-outline--lg hero-outline">Recorrer la ruta</a>
          </div>
        </div>
      </div>
      <dl className="hero-stats">
        {STATS.map(([value, label]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd className="display">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
