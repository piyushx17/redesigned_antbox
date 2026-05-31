import { cn } from '@/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
}

export function Card({ children, className, glow }: CardProps) {
  return (
    <article className={cn('card', glow && 'amber-glow', className)}>
      {children}
    </article>
  )
}
