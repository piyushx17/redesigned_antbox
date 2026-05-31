import { cn } from '@/utils/cn'
import { useReveal } from '@/hooks/useReveal'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: 1 | 2 | 3 | 4
  direction?: 'up' | 'left' | 'scale'
}

export function Reveal({
  children,
  className,
  delay,
  direction = 'up',
}: RevealProps) {
  const { ref, isVisible } = useReveal()

  const directionClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'scale'
        ? 'reveal-scale'
        : 'reveal'

  return (
    <div
      ref={ref}
      className={cn(
        directionClass,
        isVisible && 'in',
        delay && `reveal-delay-${delay}`,
        className,
      )}
    >
      {children}
    </div>
  )
}
