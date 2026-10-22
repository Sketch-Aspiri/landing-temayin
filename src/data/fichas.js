export const AXES = [
  ['edu', 'Educativo'],
  ['cul', 'Cultural'],
  ['tur', 'Turístico'],
  ['eco', 'Ecológico'],
  ['tec', 'Tecnológico y talento local'],
  ['acc', 'Accesibilidad e inclusión'],
]

const AXIS_LABELS = Object.fromEntries(AXES)

const RAW_FICHAS = [
  ['edu', 'Cuaderno de explorador de Toh', '100 páginas: 78 de campaña y 22 de numerología maya, con fuentes citadas página por página.', 'Evidencia: contenido del juego.'],
  ['edu', 'Numeración maya sin castigo', "Puntos, raya y concha (cero), base 20, Tzolk'in 13 × 20 = 260 y Haab 18 × 20 + 5 = 365. Un error no penaliza.", 'Evidencia: 7 niveles secretos con acertijos.'],
  ['edu', 'Lo que dice la investigación', 'El diseño se apoya en la investigación sobre aprendizaje basado en juegos. No hay estudios con estudiantes de Temayin.', 'Clark, Tanner-Smith y Killingsworth (2016), Review of Educational Research: g = 0.33 en juegos digitales en general.'],
  ['cul', 'Leyendas como relatos', 'Camazotz, Huay Chivo, Huay Pek, Xtabay y los aluxes aparecen como personajes de relatos tradicionales, nunca como «malvados».', 'Evidencia: textos de los jefes y del cuaderno.'],
  ['cul', 'Las ruinas no se destruyen', 'Ningún nivel daña zonas arqueológicas: el escenario se recorre y se respeta.', 'Evidencia: diseño de niveles.'],
  ['cul', 'Real y ficticio, separados', 'El cuaderno distingue los lugares reales de los míticos, como Xibalbá.', 'Evidencia: páginas del cuaderno.'],
  ['cul', 'Hanal Pixán', 'Nivel especial de temporada que trata Hanal Pixán como tradición viva.', 'Evidencia: nivel de temporada.'],
  ['tur', '39 destinos reales', 'Mapa de la península con 39 destinos y 39 fichas de estación con 117 datos y fotos con licencia.', 'Evidencia: mapa y fichas del juego.'],
  ['tur', 'Invitación a visitar', 'Mérida, Izamal, Tixkokob, Teya, Chichén Itzá y Valladolid tienen ficha. Sin horarios ni precios.', 'Evidencia: fichas de estación.'],
  ['eco', 'Pez león', 'Especie invasora del Caribe: el juego lo presenta con un mensaje breve sobre su control.', 'Evidencia: enemigos y fichas del mundo 5.'],
  ['eco', 'Sargazo', 'El Capitán Sargazo da pie a hablar de las arribazones de forma breve y positiva.', 'Evidencia: jefe y ficha del mundo 5.'],
  ['eco', 'Estromatolitos de Bacalar', 'Se presentan como vida antigua que se cuida sin pisarla.', 'Evidencia: ficha del mundo 6.'],
  ['eco', 'Tortugas de Akumal', 'Mensaje sobre observar a distancia y respetar su espacio.', 'Evidencia: ficha del mundo 5.'],
  ['tec', 'Sin instalación', 'Corre en el navegador, en escritorio y en móvil.', 'Evidencia: demo pública.'],
  ['tec', 'Contenido en datos', 'Fichas, páginas y acertijos están en datos y se pueden ampliar con especialistas locales.', 'Evidencia: estructura del proyecto.'],
  ['acc', 'Controles a tu medida', 'Controles reasignables y controles táctiles personalizables.', 'Evidencia: menú de opciones.'],
  ['acc', 'Vertical y horizontal', 'Se juega en ambas orientaciones del teléfono.', 'Evidencia: verificado en navegadores emulados.'],
  ['acc', 'Movimiento reducido', 'Respeta la preferencia del sistema.', 'Evidencia: opciones del juego.'],
  ['acc', 'Sin violencia realista', 'Aventura luminosa y familiar.', 'Evidencia: diseño de personajes y jefes.'],
]

export const FICHAS = RAW_FICHAS.map(([eje, t, d, ev], id) => ({
  id, eje, ejeLabel: AXIS_LABELS[eje], t, d, ev,
}))
