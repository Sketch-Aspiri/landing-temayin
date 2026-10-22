// Geometría del mapa esquemático (viewBox 600×520).
export const PTS = [[55,462],[228,398],[212,262],[246,205],[318,158],[372,162],[410,180],[442,178],[548,138],[532,198],[516,238],[482,300],[468,392],[476,432],[372,428],[228,398]]

// Índice en PTS donde termina cada tramo (el 0 es el inicio).
export const ENDS = [0, 1, 3, 5, 8, 10, 13, 15]

const CUM = (() => {
  const c = [0]
  for (let i = 1; i < PTS.length; i++) {
    const [a, b] = PTS[i - 1]
    const [x, y] = PTS[i]
    c.push(c[i - 1] + Math.hypot(x - a, y - b))
  }
  return c
})()

const LEN = CUM[CUM.length - 1]

function at(d) {
  for (let i = 1; i < CUM.length; i++) {
    if (d <= CUM[i]) {
      const t = (d - CUM[i - 1]) / (CUM[i] - CUM[i - 1])
      const [a, b] = PTS[i - 1]
      const [x, y] = PTS[i]
      return [a + (x - a) * t, b + (y - b) * t]
    }
  }
  return PTS[PTS.length - 1]
}

/** Convierte coordenadas del viewBox a porcentajes CSS. */
export const pct = (x, y) => ({
  left: (x / 6).toFixed(2) + '%',
  top: (y / 5.2).toFixed(2) + '%',
})

export const DESTINATION_COUNT = 39

export const DOTS = Array.from({ length: DESTINATION_COUNT }, (_, i) => {
  const d = ((i + 0.5) / DESTINATION_COUNT) * LEN
  const [x, y] = at(d)
  let w = 0
  for (let k = 0; k < 7; k++) if (d >= CUM[ENDS[k]]) w = k
  return { ...pct(x, y), w, i }
})

export const LABELS = [
  ['Palenque', 55, 462, 'translate(-10%,40%)'],
  ['Escárcega', 228, 398, 'translate(-50%,40%)'],
  ['Campeche', 212, 262, 'translate(-110%,-50%)'],
  ['Mérida', 318, 158, 'translate(-50%,-150%)'],
  ['Valladolid', 442, 178, 'translate(-30%,40%)'],
  ['Cancún', 548, 138, 'translate(-100%,-160%)'],
  ['Tulum', 516, 238, 'translate(30%,-50%)'],
  ['Bacalar', 468, 392, 'translate(-120%,-50%)'],
  ['Chetumal', 476, 432, 'translate(-40%,50%)'],
  ['Xpujil', 372, 428, 'translate(-50%,40%)'],
].map(([name, x, y, tf]) => ({ name, tf, ...pct(x, y) }))

export const COAST_PATH =
  'M20,480 C60,450 110,410 150,372 C180,345 198,310 204,272 C210,238 222,205 240,182 C252,166 262,150 278,140 C320,128 380,120 440,116 C490,112 530,104 560,112 C575,124 570,150 560,170 C548,200 536,226 526,250 C512,282 500,316 494,350 C490,380 494,410 488,440 L470,470 L360,470 L350,520 L20,520 Z'
