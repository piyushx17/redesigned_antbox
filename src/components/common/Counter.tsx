import { cn } from '@/utils/cn'
import { useCounter } from '@/hooks/useCounter'

interface CounterProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
}

export function Counter({ value, suffix = '', prefix = '', className }: CounterProps) {
  const { ref, displayValue } = useCounter({ target: value, suffix })

  return (
    <span ref={ref} className={cn('counter-value', className)}>
      {prefix}
      {displayValue}
    </span>
  )
}
