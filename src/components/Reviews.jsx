import { useEffect, useState } from 'react'
import { REVIEWS_ENABLED, LIMITS, fetchReviews, submitReview, validateReview } from '../lib/reviewsApi.js'

const COOLDOWN_MS = 60000
const LAST_KEY = 'temayin-review-last'

const readLast = () => {
  try { return Number(localStorage.getItem(LAST_KEY)) || 0 } catch { return 0 }
}
const writeLast = () => {
  try { localStorage.setItem(LAST_KEY, String(Date.now())) } catch { /* sin almacenamiento: se omite el límite */ }
}

function Stars({ value }) {
  return <span className="review-stars" role="img" aria-label={value + ' de 5 estrellas'}>{'★'.repeat(value)}{'☆'.repeat(5 - value)}</span>
}

function ReviewList({ state }) {
  if (state.status === 'loading') return <p role="status">Cargando reseñas…</p>
  if (state.status === 'error') return <p role="alert">{state.error}</p>
  if (!state.items.length) return <p>Todavía no hay reseñas. ¡Escribe la primera!</p>
  const avg = state.items.reduce((s, r) => s + r.rating, 0) / state.items.length
  return (
    <>
      <p className="review-summary"><strong>{avg.toFixed(1)}</strong> / 5 · {state.items.length} {state.items.length === 1 ? 'reseña' : 'reseñas'}</p>
      <ul className="review-list">
        {state.items.map((r) => (
          <li key={r.id} className="note review-card">
            <Stars value={r.rating} />
            <p className="review-text">{r.comment}</p>
            <p className="review-meta">{r.name} · {new Date(r.created_at).toLocaleDateString('es-MX')}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

function ReviewForm() {
  const [form, setForm] = useState({ name: '', rating: 0, comment: '', trap: '' })
  const [msg, setMsg] = useState({ kind: '', text: '' })
  const [sending, setSending] = useState(false)
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (form.trap) return
    const wait = COOLDOWN_MS - (Date.now() - readLast())
    if (wait > 0) return setMsg({ kind: 'error', text: 'Espera ' + Math.ceil(wait / 1000) + ' s antes de enviar otra reseña.' })
    const problem = validateReview(form)
    if (problem) return setMsg({ kind: 'error', text: problem })
    setSending(true)
    try {
      await submitReview(form)
      writeLast()
      setForm({ name: '', rating: 0, comment: '', trap: '' })
      setMsg({ kind: 'ok', text: 'Gracias, tu reseña aparecerá cuando sea revisada.' })
    } catch (err) {
      setMsg({ kind: 'error', text: err.message })
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="note review-form" noValidate>
      <h3 className="note-title" style={{ fontSize: 26 }}>Deja tu reseña</h3>
      <label className="review-field">Nombre
        <input type="text" value={form.name} maxLength={LIMITS.name} autoComplete="nickname" onChange={(e) => set('name', e.target.value)} />
      </label>
      <fieldset className="review-field review-rating">
        <legend>Calificación</legend>
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} className="review-star">
            <input type="radio" name="rating" value={n} checked={form.rating === n} onChange={() => set('rating', n)} />
            <span aria-hidden="true">{n <= form.rating ? '★' : '☆'}</span>
            <span className="sr-only">{n} {n === 1 ? 'estrella' : 'estrellas'}</span>
          </label>
        ))}
      </fieldset>
      <label className="review-field">Comentario
        <textarea rows={4} value={form.comment} maxLength={LIMITS.comment} onChange={(e) => set('comment', e.target.value)} />
        <small>{form.comment.length}/{LIMITS.comment}</small>
      </label>
      <input className="review-trap" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.trap} onChange={(e) => set('trap', e.target.value)} />
      <button type="submit" className="btn btn--sm" disabled={sending}>{sending ? 'Enviando…' : 'Enviar reseña'}</button>
      {msg.text && <p role={msg.kind === 'error' ? 'alert' : 'status'} className={'review-msg review-msg--' + msg.kind}>{msg.text}</p>}
    </form>
  )
}

export default function Reviews() {
  const [state, setState] = useState({ status: 'loading', items: [], error: '' })

  useEffect(() => {
    if (!REVIEWS_ENABLED) return undefined
    let live = true
    fetchReviews()
      .then((items) => live && setState({ status: 'ok', items, error: '' }))
      .catch((err) => live && setState({ status: 'error', items: [], error: err.message }))
    return () => { live = false }
  }, [])

  return (
    <section id="resenas" aria-labelledby="resenas-t" className="section--band">
      <div className="section">
        <h2 id="resenas-t" className="sec-title" style={{ marginBottom: 24 }}>Reseñas de viajeros</h2>
        {REVIEWS_ENABLED ? (
          <div className="review-grid">
            <div><ReviewList state={state} /></div>
            <ReviewForm />
          </div>
        ) : (
          <p>Las reseñas estarán disponibles próximamente.</p>
        )}
      </div>
    </section>
  )
}
