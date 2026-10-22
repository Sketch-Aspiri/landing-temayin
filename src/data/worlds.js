import { asset, PHOTOS } from '../assets.js'

const RAW_WORLDS = [
  { key: 'm1', ruta: 'Palenque → Escárcega', inicio: 'Palenque', jefe: 'Púas', jefeNota: 'Personaje del juego que custodia la guarida de la selva.', bossPh: 'Recurso pendiente · arte de Púas', fotoPh: 'estaciones/1-1', fotoLugar: 'Estación 1-1', dato: 'La zona arqueológica de Palenque está inscrita en la Lista del Patrimonio Mundial de la UNESCO desde 1987.', fuente: 'UNESCO, Lista del Patrimonio Mundial, «Ciudad prehispánica y parque nacional de Palenque».' },
  { key: 'm2', ruta: 'Escárcega → Calkiní', inicio: 'Escárcega', jefe: 'Kaimán Moreleti', jefeNota: 'Inspirado en el cocodrilo de pantano de la región.', bossPh: 'bosses/kaiman', fotoPh: 'estaciones/2-4', fotoLugar: 'Estación 2-4', dato: 'El cocodrilo de pantano (Crocodylus moreletii) habita lagunas y humedales de la península de Yucatán y del Golfo de México.', fuente: 'CONABIO, Enciclovida, ficha de Crocodylus moreletii.' },
  { key: 'm3', ruta: 'Calkiní → Izamal', inicio: 'Calkiní', jefe: 'Huay Chivo', jefeNota: 'Personaje de relatos tradicionales de la península.', bossPh: 'bosses/huayChivo', fotoPh: 'estaciones/3-5', fotoLugar: 'Estación 3-5', dato: 'En Izamal, el convento de San Antonio de Padua, del siglo XVI, se levantó sobre una plataforma prehispánica.', fuente: 'Secretaría de Turismo, programa Pueblos Mágicos, «Izamal».' },
  { key: 'm4', ruta: 'Izamal → Cancún', inicio: 'Izamal', jefe: 'Huay Pek', jefeNota: 'Personaje de relatos tradicionales de la península.', bossPh: 'bosses/huayPek', fotoPh: 'estaciones/4-1', fotoLugar: 'Estación 4-1', dato: 'La ciudad prehispánica de Chichén Itzá está inscrita como Patrimonio Mundial de la UNESCO desde 1988.', fuente: 'UNESCO, Lista del Patrimonio Mundial, «Ciudad prehispánica de Chichén Itzá».' },
  { key: 'm5', ruta: 'Cancún → Tulum', inicio: 'Cancún', jefe: 'Capitán Sargazo', jefeNota: 'Personaje de fantasía inspirado en el sargazo.', bossPh: 'bosses/sargazo', fotoPh: 'estaciones/5-6', fotoLugar: 'Estación 5-6', dato: 'El pez león es una especie invasora en el Caribe mexicano; es originario del Indo-Pacífico. Pescarlo y consumirlo ayuda a controlarlo.', fuente: 'CONABIO, Sistema de información sobre especies invasoras, Pterois volitans.' },
  { key: 'm6', ruta: 'Tulum → Chetumal', inicio: 'Tulum', jefe: 'Lorencillo', jefeNota: 'Inspirado en el pirata histórico Laurens de Graaf; aquí es un personaje de aventura.', bossPh: 'bosses/lorencillo', fotoPh: 'estaciones/6-5', fotoLugar: 'Estación 6-5', dato: 'La laguna de Bacalar alberga estromatolitos: estructuras que forman comunidades de microorganismos a lo largo de miles de años. Se cuidan sin pisarlos.', fuente: 'CONABIO, Biodiversidad Mexicana, «Estromatolitos».' },
  { key: 'm7', ruta: 'Chetumal → Escárcega', inicio: 'Chetumal', jefe: 'Camazotz', jefeNota: 'Personaje de relatos tradicionales; figura murciélago del Popol Vuh.', bossPh: 'bosses/camazotz', fotoPh: 'estaciones/7-3', fotoLugar: 'Estación 7-3', dato: 'La Antigua Ciudad Maya y Bosques Tropicales Protegidos de Calakmul es un bien mixto, cultural y natural, del Patrimonio Mundial desde 2014.', fuente: 'UNESCO, Lista del Patrimonio Mundial, «Calakmul, Campeche».' },
]

// Recursos por mundo: arte del jefe y foto real con crédito.
const BOSS_ART = { m1: 'puas', m2: 'kaiman', m3: 'huayChivo', m4: 'huayPek', m5: 'sargazo', m6: 'lorencillo', m7: 'camazotz' }
const STATION_PHOTO = { m1: '1-1', m2: '2-4', m3: '3-5', m4: '4-1', m5: '5-6', m6: '6-5', m7: '7-3' }

export const WORLDS = RAW_WORLDS.map((w, i) => ({
  ...w,
  n: i + 1,
  anchor: 'mundo-' + (i + 1),
  bossSrc: BOSS_ART[w.key] ? asset(`bosses/${BOSS_ART[w.key]}.webp`) : null,
  photo: STATION_PHOTO[w.key] ? PHOTOS[STATION_PHOTO[w.key]] : null,
}))
