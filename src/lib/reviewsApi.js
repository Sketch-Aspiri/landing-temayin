import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config.js'

export const REVIEWS_ENABLED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY)
export const LIMITS = { name: 40, comment: 500 }

const ENDPOINT = SUPABASE_URL + '/rest/v1/reviews'
const HEADERS = { apikey: SUPABASE_ANON_KEY, Authorization: 'Bearer ' + SUPABASE_ANON_KEY }

/** @returns {Promise<Array<{id:string,name:string,rating:number,comment:string,created_at:string}>>} */
export async function fetchReviews() {
  const res = await fetch(ENDPOINT + '?select=id,name,rating,comment,created_at&approved=eq.true&order=created_at.desc&limit=50', { headers: HEADERS })
  if (!res.ok) throw new Error('No se pudieron cargar las reseñas (' + res.status + ').')
  return res.json()
}

/** @param {{name:string,rating:number,comment:string}} review */
export function validateReview({ name, rating, comment }) {
  if (!name.trim() || name.trim().length > LIMITS.name) return 'Escribe tu nombre (máximo ' + LIMITS.name + ' caracteres).'
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return 'Elige de 1 a 5 estrellas.'
  if (!comment.trim() || comment.trim().length > LIMITS.comment) return 'Escribe un comentario (máximo ' + LIMITS.comment + ' caracteres).'
  return ''
}

/** @param {{name:string,rating:number,comment:string}} review */
export async function submitReview({ name, rating, comment }) {
  const problem = validateReview({ name, rating, comment })
  if (problem) throw new Error(problem)
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { ...HEADERS, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
    body: JSON.stringify({ name: name.trim(), rating, comment: comment.trim(), approved: false }),
  })
  if (!res.ok) throw new Error('No se pudo enviar tu reseña (' + res.status + '). Intenta más tarde.')
}
