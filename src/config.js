// Equivalentes a las props del diseño original (demoUrl, contacto, luciernagas).
export const DEMO_URL = (import.meta.env.VITE_DEMO_URL ?? 'https://juego-temayin-rho.vercel.app/').trim()
export const CONTACTO = (import.meta.env.VITE_CONTACTO ?? 'andresaspiri@outlook.com').trim()
export const LUCIERNAGAS = import.meta.env.VITE_LUCIERNAGAS !== 'false'
export const AUTOR = 'Andrés Alejandro Galván Aspiri'
