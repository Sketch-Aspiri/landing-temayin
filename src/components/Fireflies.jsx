import { useMemo } from 'react'
import { LUCIERNAGAS } from '../config.js'

/** Generador pseudoaleatorio determinista para que el render sea estable. */
function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

export default function Fireflies({ count, seed }) {
  const flies = useMemo(() => {
    const r = seededRandom(seed)
    return Array.from({ length: count }, () => ({
      left: r() * 100 + '%',
      top: r() * 100 + '%',
      duration: 3 + r() * 4,
      delay: r() * 3,
    }))
  }, [count, seed])

  if (!LUCIERNAGAS) return null

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
      {flies.map((f, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: f.left,
            top: f.top,
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: '#ffdf8c',
            boxShadow: '0 0 8px #ffdf8c',
            opacity: 0.5,
            animation: `temFly ${f.duration}s ease-in-out ${f.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  )
}
