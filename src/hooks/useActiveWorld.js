import { useEffect, useState } from 'react'

/**
 * Devuelve el índice del mundo cuya tarjeta cruza el centro del viewport
 * (elementos con `data-world`) y un setter para forzarlo desde el mapa.
 */
export function useActiveWorld() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.world))
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    document.querySelectorAll('[data-world]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return [active, setActive]
}
