/** Ruta pública a un recurso de /public/assets (respeta `base` de Vite). */
export const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`

// Fotografías reales de Wikimedia Commons (metadatos de imagenes/fotos-estaciones/sources.json del juego).
export const PHOTOS = {
  '1-1': {
    src: asset('estaciones/1-1.webp'),
    alt: 'Templo escalonado de piedra rodeado de vegetación en Palenque.',
    author: 'Jan Harenburg',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Palenque_temple_1.jpg',
  },
  '2-4': {
    src: asset('estaciones/2-4.webp'),
    alt: 'Vegetación frondosa de la reserva de Los Petenes.',
    author: 'HAKEBRY1',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Reserva_los_petenes,_Campeche.JPG',
  },
  '3-5': {
    src: asset('estaciones/3-5.webp'),
    alt: 'Arcos y fachadas amarillas del convento de Izamal.',
    author: 'Simone Smith',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_Izamal_Convent_2011.jpg',
  },
  '5-6': {
    src: asset('estaciones/5-6.webp'),
    alt: 'Playa de arena y aguas turquesas en la bahía de Akumal.',
    author: 'Serge Melki',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Akumal_Beach_-_Mexico_(4303204764).jpg',
  },
  '6-5': {
    src: asset('estaciones/6-5.webp'),
    alt: 'Agua turquesa y orilla de la laguna de Bacalar.',
    author: 'Yosef Ben Melamed',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bacalar_Lagoon_1.jpg',
  },
  '3-2': {
    src: asset('estaciones/3-2.webp'),
    alt: 'Fachada y torres de la catedral de Mérida.',
    author: 'Tjeerd Wiersma',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Merida-cathedral-Yucatan-state.jpg',
  },
  '4-1': {
    src: asset('estaciones/4-1.webp'),
    alt: 'Pirámide de Kukulkán, El Castillo de Chichén Itzá.',
    author: 'Fcb981',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:El_Castillo_Stitch_2008_Edit_1.jpg',
  },
  '7-3': {
    src: asset('estaciones/7-3.webp'),
    alt: 'Gran base piramidal de la Estructura II de Calakmul.',
    author: 'Oogstweg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Calakmul,_Mexico,_structure_II.jpg',
  },
}
