import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = document.querySelector<HTMLElement>('.custom-cursor')
    const dot = document.querySelector<HTMLElement>('.custom-cursor-dot')
    if (!cursor || !dot) return

    setEnabled(true)
    document.body.classList.add('cursor-enabled')

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let frame = 0

    const move = (event: PointerEvent) => {
      tx = event.clientX
      ty = event.clientY
      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
    }

    const tick = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = window.requestAnimationFrame(tick)
    }

    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      setActive(Boolean(target?.closest('a, button, input, textarea, select, .card, .blog-card, .dashboard-panel')))
    }

    const down = () => setPressed(true)
    const up = () => setPressed(false)

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', up)
    frame = window.requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove('cursor-enabled')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', up)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div
        className={`custom-cursor custom-cursor-precision${enabled ? ' enabled' : ''}${active ? ' active' : ''}${pressed ? ' pressed' : ''}`}
        aria-hidden
      >
        <span className="custom-cursor-glyph" />
      </div>
      <div
        className={`custom-cursor-dot custom-cursor-dot-precision${enabled ? ' enabled' : ''}${active ? ' active' : ''}${pressed ? ' pressed' : ''}`}
        aria-hidden
      />
    </>
  )
}
