// Piedras del acertijo: valores candidatos (la respuesta es 13 × 20 = 260).
export const STONES = [33, 365, 260]
export const ANSWER = 260

/** Descompone un dígito maya (0–19) en puntos y rayas. */
export function level(n) {
  return {
    zero: n === 0,
    dots: Array.from({ length: n % 5 }, (_, i) => i),
    bars: Array.from({ length: Math.floor(n / 5) }, (_, i) => i),
  }
}

/** Descripción accesible de un dígito maya. */
export function describe(n) {
  if (n === 0) return 'una concha'
  const bars = Math.floor(n / 5)
  const dots = n % 5
  const parts = []
  if (bars) parts.push(bars + (bars === 1 ? ' raya' : ' rayas'))
  if (dots) parts.push(dots + (dots === 1 ? ' punto' : ' puntos'))
  return parts.join(' y ')
}
