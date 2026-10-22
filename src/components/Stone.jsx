import { describe, level } from '../data/numerals.js'

const GLYPH = '#ffd88b'

function ShellGlyph() {
  return (
    <svg width="52" height="28" viewBox="0 0 52 28" aria-hidden="true">
      <ellipse cx="26" cy="14" rx="24" ry="12" fill="none" stroke={GLYPH} strokeWidth="3" />
      <path d="M10,14 Q26,2 42,14 M14,18 Q26,10 38,18" fill="none" stroke={GLYPH} strokeWidth="2.5" />
    </svg>
  )
}

function Level({ n }) {
  const lv = level(n)
  return (
    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minHeight: 56, justifyContent: 'center', width: '100%', borderBottom: '1px dashed #2d5a44', paddingBottom: 12 }}>
      {lv.zero && <ShellGlyph />}
      <span style={{ display: 'flex', gap: 7 }}>
        {lv.dots.map((i) => <span key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: GLYPH }} />)}
      </span>
      {lv.bars.map((i) => <span key={i} style={{ width: 64, height: 10, borderRadius: 5, background: GLYPH }} />)}
    </span>
  )
}

export default function Stone({ value, index, off, correct, locked, onPick }) {
  const border = correct ? '#ffd88b' : off ? '#2d5a44' : '#4f7a72'
  const top = Math.floor(value / 20)
  const bottom = value % 20

  return (
    <button
      type="button"
      className="stone"
      aria-label={`Piedra ${index + 1}: arriba, ${describe(top)}; abajo, ${describe(bottom)}${off ? '. Apagada' : ''}`}
      aria-disabled={off || locked ? 'true' : 'false'}
      onClick={onPick}
      style={{ border: `3px solid ${border}`, opacity: off ? 0.35 : 1 }}
    >
      <Level n={top} />
      <Level n={bottom} />
      <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--cream)' }}>{off ? 'Apagada' : `Piedra ${index + 1}`}</span>
    </button>
  )
}
